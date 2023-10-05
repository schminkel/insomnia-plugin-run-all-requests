import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

export const requestGroupActions = [
  {
    label: "Run All Requests",
    icon: "play",
    action: async (context, data) => {
      const props = { context, data };
      const root = document.createElement("div");
      const container = ReactDOM.createRoot(root);

      container.render(<App {...props} />);

      context.app.dialog(`Run All Requests - ${data.requestGroup.name}`, root, {
        onHide() {
          container.unmount();
        },
      });
    },
  },
];
