// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type Theme3Value = "dark" | "darkest";
export const Theme3Context = React.createContext<Theme3Value | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useTheme3() {
  return React.useContext(Theme3Context);
}

export default Theme3Context;
/* prettier-ignore-end */
