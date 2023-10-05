import React from "react";
import { Status } from "./Status";
import { clsx } from "clsx";
import Duration from "./Duration";
import Validation from "./Validation";

export function ListItem({ method, name, status, duration, validate }) {
  let requestMethodeStyle = "";
  if (method === "POST") {
    requestMethodeStyle = "http-method-POST";
  } else if (method === "GET") {
    requestMethodeStyle = "http-method-GET";
  } else {
    requestMethodeStyle = "http-method-OPTIONS";
  }

  return (
    <li style={{ padding: "0px", marginRight: "2px" }}>
      <span style={{ marginLeft: "0px" }}>
        <div
          className="flex select-none outline-none group-aria-selected:text-[--color-font] relative group-hover:bg-[--hl-xs] group-focus:bg-[--hl-sm] transition-colors gap-2 px-0 items-center h-[--line-height-xs] w-full overflow-hidden text-[--hl]"
          style={{ paddingLeft: "0rem" }}
        >
          <span className="group-aria-selected:bg-[--color-surprise] transition-colors top-0 left-0 absolute h-full w-[2px] bg-transparent"></span>
          <button
            type="button"
            aria-label="Drag {name}"
            className="hidden"
            slot="drag"
            aria-describedby="react-aria-description-8"
            style={{ pointerEvents: "none" }}
          ></button>
          <span
            className={clsx(
              "w-10 flex-shrink-0 flex text-[0.65rem] rounded-sm border border-solid border-[--hl-sm] items-center justify-center",
              requestMethodeStyle
            )}
          >
            {method}
          </span>
          <span className="truncate">{name}</span>
          <span className="flex-1"></span>
          <Duration>{duration}</Duration>
          <Status>{status}</Status>
          <Validation status={validate} all={false} />
        </div>
      </span>
    </li>
  );
}

export default ListItem;
