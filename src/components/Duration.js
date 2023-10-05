import { css } from "@emotion/css";

export function Duration({ children }) {
  const durationStyles = () => css`
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

  return (
    <div className={durationStyles()}>
      {" "}
      <div className={durationStyles()}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "2",
          }}
        >
          <path d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM6.5 3v2.5H9V7H5V3h1.5Z"></path>
        </svg>
      </div>
      <div>{children} ms</div>
    </div>
  );
}

export default Duration;
