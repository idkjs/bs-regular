// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Css = require("bs-css/src/Css.js");
var React = require("react");
var Text$ReactHooksTemplate = require("./Text.bs.js");
var Colors$ReactHooksTemplate = require("./theme/Colors.bs.js");

var badge = Css.style(/* :: */[
      Css.border(/* `px */[
            25096,
            1
          ], /* solid */12956715, /* `hex */[
            5194459,
            Colors$ReactHooksTemplate.primary450
          ]),
      /* :: */[
        Css.borderRadius(/* `px */[
              25096,
              2
            ]),
        /* :: */[
          Css.color(/* `hex */[
                5194459,
                Colors$ReactHooksTemplate.primary300
              ]),
          /* :: */[
            Css.display(/* inlineBlock */-147785676),
            /* :: */[
              Css.padding2(/* `px */[
                    25096,
                    2
                  ], /* `px */[
                    25096,
                    6
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[/* badge */badge];

function Badge(Props) {
  var children = Props.children;
  var className = Props.className;
  return React.createElement(Text$ReactHooksTemplate.smallBody, {
              children: children,
              className: Cn.make(/* :: */[
                    badge,
                    /* :: */[
                      Cn.unpack(className),
                      /* [] */0
                    ]
                  ])
            });
}

var make = Badge;

exports.Styles = Styles;
exports.make = make;
/* badge Not a pure module */
