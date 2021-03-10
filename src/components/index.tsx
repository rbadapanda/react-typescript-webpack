import * as React from "react";
/** un-comment line#3 and comment line #4 to see the top-level-await call not happening */
// const topLevelAsyncData={data:{first_name:'Raj'}};
import {topLevelAsyncData} from './TopLevelAwait';
import * as ReactDOM from "react-dom";
import { App } from "./App";
console.log('*** Going to render ReactDOM...');

ReactDOM.render(
  <App userName={topLevelAsyncData?.data?.first_name || "Developer"}  lang="TypeScript"/>,
  document.getElementById("output")
);
