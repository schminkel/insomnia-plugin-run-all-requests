import { css } from "@emotion/css";

const indicatorStyles = (isSuccessful, all) => css`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-sm);
  text-align: center;
  text-transform: capitalize;
  ${all === true &&
  `
    height: 34px;
    width: 100px;
  `}
  ${all === false &&
  `
    height: 22px;
    width: 60px;
  `}
  ${isSuccessful === true &&
  `
    border: 1px solid var(--color-success);
    background-color: var(--color-bg);
    color: var(--color-success);
  `}
  ${isSuccessful === false &&
  `
    border: 1px solid var(--color-danger);
    background-color: var(--color-danger);
    color: var(--color-bg);
    font-weight: var(--font-weight-bold);
  `}
`;

export function Validation({ status, all }) {
  let passedText = "Passed";
  let failedText = "Failed";

  if (status === null || status === undefined) return null;
  if (all === true) {
    passedText = "All\u00A0Passed";
    failedText = "≥1\u00A0Failed";
  }

  if (status) {
    return <span className={indicatorStyles(status, all)}>{passedText}</span>;
  } else {
    return <span className={indicatorStyles(status, all)}>{failedText}</span>;
  }
}

export default Validation;
