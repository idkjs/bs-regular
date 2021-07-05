module Styles = {
  open Css
  let layer = style(list{
    position(#fixed),
    top(#zero),
    left(#zero),
    right(#zero),
    bottom(#zero),
    display(#flex),
    alignItems(#center),
    justifyContent(#center),
  })
  let backdrop = style(list{
    position(#absolute),
    top(#zero),
    left(#zero),
    right(#zero),
    bottom(#zero),
    backgroundColor(#rgba(0, 0, 0, #num(0.1))),
    zIndex(-1),
  })
}

module Backdrop = {
  @react.component
  let make = (~onClick=?) => <div className=Styles.backdrop ?onClick />
}

type modalKey = string
let nextModalKey = ref(1)
type modal = {
  modalKey: modalKey,
  renderModal: unit => React.element,
  onCloseRequest: option<unit => unit>,
}
let modals: ref<array<modal>> = ref([])
let subscriptions: ref<array<unit => unit>> = ref([])

let openModal = (~renderModal, ~onCloseRequest) => {
  let modalKey = string_of_int(nextModalKey.contents)
  modals :=
    Js.Array.concat(
      [{modalKey: modalKey, renderModal: renderModal, onCloseRequest: onCloseRequest}],
      modals.contents,
    )
  subscriptions.contents |> Js.Array.forEach(subscription => subscription())
  nextModalKey := nextModalKey.contents + 1
  modalKey
}

let updateModal = (modalKey: modalKey, ~renderModal, ~onCloseRequest) => {
  modals := Js.Array.map(modal =>
      if modal.modalKey == modalKey {
        {
          ...modal,
          renderModal: renderModal,
          onCloseRequest: onCloseRequest,
        }
      } else {
        modal
      }
    , modals.contents)
  subscriptions.contents |> Js.Array.forEach(subscription => subscription())
}

let closeModal = (modalKey: modalKey) => {
  modals := Js.Array.filter(modal => modal.modalKey != modalKey, modals.contents)
  subscriptions.contents |> Js.Array.forEach(subscription => subscription())
}

@react.component
let make = () => {
  let (_, forceUpdate) = React.useState(() => 1)
  React.useLayoutEffect0(() => {
    let callback = () => forceUpdate(x => x + 1)
    subscriptions := Js.Array.concat(subscriptions.contents, [callback])
    Some(
      () =>
        subscriptions :=
          Js.Array.filter(subscription => subscription !== callback, subscriptions.contents),
    )
  })

  let onKeyPress = ({onCloseRequest}, e) =>
    switch Webapi.Dom.KeyboardEvent.key(e) {
    | "Esc"
    | "Escape" =>
      switch onCloseRequest {
      | Some(onCloseRequest) => onCloseRequest()
      | None => ()
      }
    | _ => ()
    }

  if Js.Array.length(modals.contents) == 0 {
    React.null
  } else {
    React.array(
      Js.Array.mapi(
        (modal, i) =>
          <Layer key={string_of_int(i)} onKeyPress={onKeyPress(modal)}>
            <div className=Styles.layer>
              <Backdrop
                onClick=?{Belt.Option.map(modal.onCloseRequest, (onCloseRequest, _) =>
                  onCloseRequest()
                )}
              />
              {modal.renderModal()}
            </div>
          </Layer>,
        modals.contents,
      ),
    )
  }
}
