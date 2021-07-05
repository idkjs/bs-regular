module Styles = {
  open Css
  let card = style(list{
    border(#px(1), #solid, #hex(Colors.primary450)),
    borderRadius(#px(4)),
    padding(#px(16)),
  })
}

@react.component
let make = (~children, ~className=?) =>
  <div className={Cn.fromList(list{Styles.card, Cn.take(className)})}> children </div>
