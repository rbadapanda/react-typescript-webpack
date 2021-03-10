import * as React from "react";
import {topLevelAsyncData} from './TopLevelAwait';
import * as ReactDOM from "react-dom";
import { App } from "./App";

console.log('*** Going to render ReactDOM...');

ReactDOM.render(
  <App userName={topLevelAsyncData?.data?.first_name || "Developer"}  lang="TypeScript"/>,
  document.getElementById("output")
);
