import React from "react";
import { css } from "@emotion/css";
import { clsx } from "clsx";

export function Status({ children }) {
  if (!children) return null;

  const infoStyle = () => {
    if (children >= 100 && children < 200) {
      return "bg-info";
    }
    if (children >= 200 && children < 300) {
      return "bg-success";
    }
    if (children >= 300 && children < 400) {
      return "bg-surprise";
    }
    if (children >= 400 && children < 500) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  };

  return (
    <span
      className={clsx(
        infoStyle(),
        css`
          margin-left: 5px;
          padding: 1px;
          padding-left: 5px;
          padding-right: 5px;
          font-weight: bold;
          border-radius: var(--radius-sm);
        `
      )}
    >
      {children}
    </span>
  );
}

export default Status;
