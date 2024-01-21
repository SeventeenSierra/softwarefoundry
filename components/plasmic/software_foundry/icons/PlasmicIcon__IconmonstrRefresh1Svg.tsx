// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconmonstrRefresh1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconmonstrRefresh1SvgIcon(
  props: IconmonstrRefresh1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.5 2C7.879 2 3.289 6.443 3.025 12H0l5 6.625L10 12H7.025c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5S17.084 19 13.5 19a6.479 6.479 0 01-4.728-2.053l-2.427 3.216A10.449 10.449 0 0013.5 23C19.29 23 24 18.29 24 12.5S19.29 2 13.5 2z"
        }
      ></path>
    </svg>
  );
}

export default IconmonstrRefresh1SvgIcon;
/* prettier-ignore-end */
