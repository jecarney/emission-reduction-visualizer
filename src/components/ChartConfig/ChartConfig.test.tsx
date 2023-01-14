import React from "react";
import ReactDOM from "react-dom";
import ChartConfig from "./ChartConfig";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChartConfig />, div);
  ReactDOM.unmountComponentAtNode(div);
});
