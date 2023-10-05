import { PulseLoader } from "react-spinners";
import { css } from "@emotion/css";
import Validation from "./Validation";

export function RunState({ runningState, validateRun }) {
  if (runningState) {
    return (
      <>
        <PulseLoader
          className={css`
            margin-right: 32px;
          `}
          color="#ffffff"
          size={10}
          loading={runningState}
        />
      </>
    );
  } else if (runningState === false) {
    if (validateRun === true) {
      return (
        <>
          <Validation status={true} all={true} />
        </>
      );
    } else if (validateRun === false) {
      return (
        <>
          <Validation status={false} all={true} />
        </>
      );
    } else {
      return null;
    }
  }
}

export default RunState;
