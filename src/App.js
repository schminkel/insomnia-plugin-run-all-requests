import React, { useState } from "react";
import { ActionBar } from "./components/ActionBar";
import { ListItem } from "./components/ListItem";

export default function App({ context, data }) {
  const [statusRequest, setStatusRequest] = useState({});
  const [durationRequest, setDurationRequest] = useState({});
  const [validateRequest, setValidateRequest] = useState({});
  const [runningState, setRunningState] = useState(false);
  const [validateRun, setValidateRun] = useState(undefined);

  const resetStates = () => {
    setRunningState(true);
    setDurationRequest({});
    setValidateRequest({});
    setStatusRequest({});
    setValidateRun(true);
  };

  const extractBracketsValue = (str) => {
    const match = str.match(/\[([^\]]+)\]/);
    return match ? match[1] : null;
  };

  const runAllRequests = async () => {
    const reqs = data.requests;
    resetStates();
    for (const req of reqs) {
      const response = await context.network.sendRequest(req);
      const validation =
        extractBracketsValue(req.name) === response.statusCode.toString();
      if (!validation) {
        setValidateRun(false);
      }
      setStatusRequest((status) => ({
        ...status,
        [req._id]: response.statusCode,
      }));
      setDurationRequest((duration) => ({
        ...duration,
        [req._id]: Math.floor(response.elapsedTime),
      }));
      setValidateRequest((validate) => ({
        ...validate,
        [req._id]: validation,
      }));
      await new Promise((r) => setTimeout(r, 200));
    }
    setRunningState(false);
  };

  return (
    <>
      <ActionBar
        onSubmit={runAllRequests}
        runningState={runningState}
        validateRun={validateRun}
      />
      <div style={{ marginTop: "5px" }}>
        <ul>
          {data.requests.map((r) => (
            <ListItem
              key={r._id}
              method={r.method}
              name={r.name}
              onClick={(_) => handleRequest(r._id)}
              status={statusRequest[r._id]}
              duration={durationRequest[r._id]}
              validate={validateRequest[r._id]}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
