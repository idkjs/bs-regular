// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Css = require("bs-css/src/Css.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Colors$ReactHooksTemplate = require("../theme/Colors.bs.js");

var input = Css.style(/* :: */[
      Css.border(/* `px */[
            25096,
            1
          ], /* solid */12956715, /* `hex */[
            5194459,
            Colors$ReactHooksTemplate.primary450
          ]),
      /* :: */[
        Css.boxSizing(/* borderBox */9307263),
        /* :: */[
          Css.color(/* `hex */[
                5194459,
                Colors$ReactHooksTemplate.primary200
              ]),
          /* :: */[
            Css.fontSize(/* `px */[
                  25096,
                  16
                ]),
            /* :: */[
              Css.lineHeight(/* `px */[
                    25096,
                    24
                  ]),
              /* :: */[
                Css.padding4(/* `px */[
                      25096,
                      8
                    ], /* `px */[
                      25096,
                      8
                    ], /* `px */[
                      25096,
                      8
                    ], /* `px */[
                      25096,
                      16
                    ]),
                /* :: */[
                  Css.transition(100, undefined, undefined, "border-color"),
                  /* :: */[
                    Css.width(/* `percent */[
                          -119887163,
                          100
                        ]),
                    /* :: */[
                      Css.focus(/* :: */[
                            Css.borderColor(/* `hex */[
                                  5194459,
                                  Colors$ReactHooksTemplate.primary300
                                ]),
                            /* :: */[
                              Css.outlineStyle(/* none */-922086728),
                              /* [] */0
                            ]
                          ]),
                      /* :: */[
                        Css.placeholder(/* :: */[
                              Css.color(/* `hex */[
                                    5194459,
                                    Colors$ReactHooksTemplate.primary400
                                  ]),
                              /* :: */[
                                Css.fontWeight(/* `num */[
                                      5496390,
                                      300
                                    ]),
                                /* [] */0
                              ]
                            ]),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[/* input */input];

function TextInput(Props) {
  var className = Props.className;
  var placeholder = Props.placeholder;
  var tmp = {
    className: Cn.make(/* :: */[
          input,
          /* :: */[
            Cn.unpack(className),
            /* [] */0
          ]
        ]),
    type: "text"
  };
  if (placeholder !== undefined) {
    tmp.placeholder = Caml_option.valFromOption(placeholder);
  }
  return React.createElement("input", tmp);
}

var make = TextInput;

exports.Styles = Styles;
exports.make = make;
/* input Not a pure module */
