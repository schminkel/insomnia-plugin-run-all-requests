import React, { useState } from "react";
import { css } from "@emotion/css";
import { clsx } from "clsx";
import RunState from "./RunState";

const buttonStyles = (disabled) => css`
  margin-left: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: green;
  border-radius: 3px;
  ${disabled === false &&
  `
    &:hover {
      background-color: darkgreen;
      color: darkgrey;
    }
  `}
`;

export function ActionBar({ onSubmit, runningState, validateRun }) {
  const handleSubmit = () => onSubmit();

  return (
    <div
      className={clsx(
        "flex flex-row",
        css`
          margin-bottom: 12px;
          align-items: baseline;
          margin-right: 2px;
        `
      )}
    >
      <button
        className={buttonStyles(runningState)}
        onClick={handleSubmit}
        disabled={runningState}
      >
        Run All Requests
        <i className="fa fa-play space-left"></i>
      </button>
      <span className="flex-1"></span>
      <RunState runningState={runningState} validateRun={validateRun} />
    </div>
  );
}

export default ActionBar;
