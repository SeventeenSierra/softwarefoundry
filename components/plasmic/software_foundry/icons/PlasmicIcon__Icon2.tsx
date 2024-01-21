// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 1025 1025"}
      className={classNames("plasmic-default__svg", className, "icon")}
      version={"1.1"}
      fill={"#000"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M512.8 977.4c-26.1 0-50.1-7.3-71.5-21.7C323.5 897 0 675.3 0 400.5 0 212 153.4 58.6 341.9 58.6c60.5 0 119 15.8 170.9 45.9 51.9-30.1 110.5-45.9 170.9-45.9 188.5 0 341.9 153.4 341.9 341.9 0 274.8-323.5 496.6-441.3 555.2-21.4 14.4-45.4 21.7-71.5 21.7zM341.9 144.1c-141.4 0-256.4 115-256.4 256.4 0 117.2 80.6 225.2 148.2 295.1 86.1 89 187.5 155.2 248.1 184.8l6.1 3.7c15.1 10.8 34.6 10.8 49.7 0l6.1-3.7c60.7-29.7 162.1-95.8 248.1-184.8C859.4 625.7 940 517.8 940 400.5c0-141.4-115-256.4-256.4-256.4-52.6 0-103.2 16-146.5 46.1l-24.3 17.1-24.5-17.1c-43.2-30.2-93.9-46.1-146.4-46.1z"
        }
        fill={"#3688FF"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
