module Styles = {
  open Css;
  let button =
    style(
      [%style
        {|
    border-radius: 2px;
    border-style: none;
    color: #ffffff;
    font-size: 16px;
    padding: 10px 16px;
  |}
      ],
    );
  let primary = style([backgroundColor(`hex(Colors.primary200))]);
  let secondary = style([backgroundColor(`hex("2A77DF"))]);
};

type buttonType =
  | Primary
  | Secondary;

[@react.component]
let make =
  React.forwardRef(
    (
      ~type_=Primary,
      ~children,
      ~className=?,
      ~onClick=?,
      ~onMouseEnter=?,
      ~onMouseLeave=?,
      forwardedRef,
    ) =>
    <button
      className={Cn.make([
        Styles.button,
        switch (type_) {
        | Primary => Styles.primary
        | Secondary => Styles.secondary
        },
        Cn.unpack(className),
      ])}
      ?onClick
      ?onMouseEnter
      ?onMouseLeave
      ref=?{
        Belt.Option.map(
          Js.Nullable.toOption(forwardedRef),
          ReactDOMRe.Ref.domRef,
        )
      }>
      children
    </button>
  );