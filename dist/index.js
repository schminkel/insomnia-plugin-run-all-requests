var $6uPpa$reactjsxruntime = require("react/jsx-runtime");
var $6uPpa$react = require("react");
var $6uPpa$reactdomclient = require("react-dom/client");
var $6uPpa$emotioncss = require("@emotion/css");
var $6uPpa$clsx = require("clsx");
var $6uPpa$reactspinners = require("react-spinners");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "requestGroupActions", () => $d3928351bb4a0237$export$245754a6922eec3c);













const $2273c383e2e8a278$var$indicatorStyles = (isSuccessful, all)=>(0, $6uPpa$emotioncss.css)`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-sm);
  text-align: center;
  text-transform: capitalize;
  ${all === true && `
    height: 34px;
    width: 100px;
  `}
  ${all === false && `
    height: 22px;
    width: 60px;
  `}
  ${isSuccessful === true && `
    border: 1px solid var(--color-success);
    background-color: var(--color-bg);
    color: var(--color-success);
  `}
  ${isSuccessful === false && `
    border: 1px solid var(--color-danger);
    background-color: var(--color-danger);
    color: var(--color-bg);
    font-weight: var(--font-weight-bold);
  `}
`;
function $2273c383e2e8a278$export$794e892580855985({ status: status, all: all }) {
    let passedText = "Passed";
    let failedText = "Failed";
    if (status === null || status === undefined) return null;
    if (all === true) {
        passedText = "All\xa0Passed";
        failedText = "≥1\xa0Failed";
    }
    if (status) return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
        className: $2273c383e2e8a278$var$indicatorStyles(status, all),
        children: passedText
    });
    else return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
        className: $2273c383e2e8a278$var$indicatorStyles(status, all),
        children: failedText
    });
}
var $2273c383e2e8a278$export$2e2bcd8739ae039 = $2273c383e2e8a278$export$794e892580855985;


function $e481a9ad7af868fb$export$3e34caa1932fc626({ runningState: runningState, validateRun: validateRun }) {
    if (runningState) return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactspinners.PulseLoader), {
            className: (0, $6uPpa$emotioncss.css)`
            margin-right: 32px;
          `,
            color: "#ffffff",
            size: 10,
            loading: runningState
        })
    });
    else if (runningState === false) {
        if (validateRun === true) return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactjsxruntime.Fragment), {
            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $2273c383e2e8a278$export$2e2bcd8739ae039), {
                status: true,
                all: true
            })
        });
        else if (validateRun === false) return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactjsxruntime.Fragment), {
            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $2273c383e2e8a278$export$2e2bcd8739ae039), {
                status: false,
                all: true
            })
        });
        else return null;
    }
}
var $e481a9ad7af868fb$export$2e2bcd8739ae039 = $e481a9ad7af868fb$export$3e34caa1932fc626;


const $2cbe89b645e35827$var$buttonStyles = (disabled)=>(0, $6uPpa$emotioncss.css)`
  margin-left: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: green;
  border-radius: 3px;
  ${disabled === false && `
    &:hover {
      background-color: darkgreen;
      color: darkgrey;
    }
  `}
`;
function $2cbe89b645e35827$export$e213cebad6250b4a({ onSubmit: onSubmit, runningState: runningState, validateRun: validateRun }) {
    const handleSubmit = ()=>onSubmit();
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("div", {
        className: (0, $6uPpa$clsx.clsx)("flex flex-row", (0, $6uPpa$emotioncss.css)`
          margin-bottom: 12px;
          align-items: baseline;
          margin-right: 2px;
        `),
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("button", {
                className: $2cbe89b645e35827$var$buttonStyles(runningState),
                onClick: handleSubmit,
                disabled: runningState,
                children: [
                    "Run All Requests",
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("i", {
                        className: "fa fa-play space-left"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                className: "flex-1"
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $e481a9ad7af868fb$export$2e2bcd8739ae039), {
                runningState: runningState,
                validateRun: validateRun
            })
        ]
    });
}
var $2cbe89b645e35827$export$2e2bcd8739ae039 = $2cbe89b645e35827$export$e213cebad6250b4a;








function $b0dcddf949bbc040$export$96e9906d6d93a972({ children: children }) {
    if (!children) return null;
    const infoStyle = ()=>{
        if (children >= 100 && children < 200) return "bg-info";
        if (children >= 200 && children < 300) return "bg-success";
        if (children >= 300 && children < 400) return "bg-surprise";
        if (children >= 400 && children < 500) return "bg-warning";
        else return "bg-danger";
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
        className: (0, $6uPpa$clsx.clsx)(infoStyle(), (0, $6uPpa$emotioncss.css)`
          margin-left: 5px;
          padding: 1px;
          padding-left: 5px;
          padding-right: 5px;
          font-weight: bold;
          border-radius: var(--radius-sm);
        `),
        children: children
    });
}
var $b0dcddf949bbc040$export$2e2bcd8739ae039 = $b0dcddf949bbc040$export$96e9906d6d93a972;





function $dd4aa4a1572adfb0$export$3b11bc38611c5941({ children: children }) {
    const durationStyles = ()=>(0, $6uPpa$emotioncss.css)`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-shrink: 0;
    font-size: var(--font-size-xs);
    color: var(--hl-xl);
    fill: var(--hl-xl);
    margin-right: 0.25rem;
  `;
    if (!children) return null;
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("div", {
        className: durationStyles(),
        children: [
            " ",
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                className: durationStyles(),
                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 12 12",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    style: {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "2"
                    },
                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("path", {
                        d: "M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM6.5 3v2.5H9V7H5V3h1.5Z"
                    })
                })
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("div", {
                children: [
                    children,
                    " ms"
                ]
            })
        ]
    });
}
var $dd4aa4a1572adfb0$export$2e2bcd8739ae039 = $dd4aa4a1572adfb0$export$3b11bc38611c5941;



function $cd06d61d892f42a6$export$a7b06bfba60a8a78({ method: method, name: name, status: status, duration: duration, validate: validate }) {
    let requestMethodeStyle = "";
    if (method === "POST") requestMethodeStyle = "http-method-POST";
    else if (method === "GET") requestMethodeStyle = "http-method-GET";
    else requestMethodeStyle = "http-method-OPTIONS";
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("li", {
        style: {
            padding: "0px",
            marginRight: "2px"
        },
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
            style: {
                marginLeft: "0px"
            },
            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("div", {
                className: "flex select-none outline-none group-aria-selected:text-[--color-font] relative group-hover:bg-[--hl-xs] group-focus:bg-[--hl-sm] transition-colors gap-2 px-0 items-center h-[--line-height-xs] w-full overflow-hidden text-[--hl]",
                style: {
                    paddingLeft: "0rem"
                },
                children: [
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                        className: "group-aria-selected:bg-[--color-surprise] transition-colors top-0 left-0 absolute h-full w-[2px] bg-transparent"
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("button", {
                        type: "button",
                        "aria-label": "Drag {name}",
                        className: "hidden",
                        slot: "drag",
                        "aria-describedby": "react-aria-description-8",
                        style: {
                            pointerEvents: "none"
                        }
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                        className: (0, $6uPpa$clsx.clsx)("w-10 flex-shrink-0 flex text-[0.65rem] rounded-sm border border-solid border-[--hl-sm] items-center justify-center", requestMethodeStyle),
                        children: method
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                        className: "truncate",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                        className: "flex-1"
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $dd4aa4a1572adfb0$export$2e2bcd8739ae039), {
                        children: duration
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $b0dcddf949bbc040$export$96e9906d6d93a972), {
                        children: status
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $2273c383e2e8a278$export$2e2bcd8739ae039), {
                        status: validate,
                        all: false
                    })
                ]
            })
        })
    });
}
var $cd06d61d892f42a6$export$2e2bcd8739ae039 = $cd06d61d892f42a6$export$a7b06bfba60a8a78;


function $4e377c42f539ba61$export$2e2bcd8739ae039({ context: context, data: data }) {
    const [statusRequest, setStatusRequest] = (0, $6uPpa$react.useState)({});
    const [durationRequest, setDurationRequest] = (0, $6uPpa$react.useState)({});
    const [validateRequest, setValidateRequest] = (0, $6uPpa$react.useState)({});
    const [runningState, setRunningState] = (0, $6uPpa$react.useState)(false);
    const [validateRun, setValidateRun] = (0, $6uPpa$react.useState)(undefined);
    const resetStates = ()=>{
        setRunningState(true);
        setDurationRequest({});
        setValidateRequest({});
        setStatusRequest({});
        setValidateRun(true);
    };
    const extractBracketsValue = (str)=>{
        const match = str.match(/\[([^\]]+)\]/);
        return match ? match[1] : null;
    };
    const runAllRequests = async ()=>{
        const reqs = data.requests;
        resetStates();
        for (const req of reqs){
            const response = await context.network.sendRequest(req);
            const validation = extractBracketsValue(req.name) === response.statusCode.toString();
            if (!validation) setValidateRun(false);
            setStatusRequest((status)=>({
                    ...status,
                    [req._id]: response.statusCode
                }));
            setDurationRequest((duration)=>({
                    ...duration,
                    [req._id]: Math.floor(response.elapsedTime)
                }));
            setValidateRequest((validate)=>({
                    ...validate,
                    [req._id]: validation
                }));
            await new Promise((r)=>setTimeout(r, 200));
        }
        setRunningState(false);
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $2cbe89b645e35827$export$e213cebad6250b4a), {
                onSubmit: runAllRequests,
                runningState: runningState,
                validateRun: validateRun
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                style: {
                    marginTop: "5px"
                },
                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("ul", {
                    children: data.requests.map((r)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $cd06d61d892f42a6$export$a7b06bfba60a8a78), {
                            method: r.method,
                            name: r.name,
                            onClick: (_)=>handleRequest(r._id),
                            status: statusRequest[r._id],
                            duration: durationRequest[r._id],
                            validate: validateRequest[r._id]
                        }, r._id))
                })
            })
        ]
    });
}



const $d3928351bb4a0237$export$245754a6922eec3c = [
    {
        label: "Run All Requests",
        icon: "play",
        action: async (context, data)=>{
            const props = {
                context: context,
                data: data
            };
            const root = document.createElement("div");
            const container = (0, ($parcel$interopDefault($6uPpa$reactdomclient))).createRoot(root);
            container.render(/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $4e377c42f539ba61$export$2e2bcd8739ae039), {
                ...props
            }));
            context.app.dialog(`Run All Requests - ${data.requestGroup.name}`, root, {
                onHide () {
                    container.unmount();
                }
            });
        }
    }
];


