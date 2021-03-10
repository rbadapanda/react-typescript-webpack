import * as React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1>
    Hi Top-level-await-result --&gt; "{props.userName}" from React! Welcome to {props.lang}!

    <div style={{top:200,position:'absolute'}}>Open developer tools console to see the sequence of operations</div>
  </h1>
);
