// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vMzXsCafajCSr7cXNFyn5b
// Component: xo8s2VkrTxe3

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_v_mz_xs_cafaj_c_sr_7_c_xn_fyn_5_b.module.css"; // plasmic-import: vMzXsCafajCSr7cXNFyn5b/projectcss
import sty from "./PlasmicSingleLineItem.module.css"; // plasmic-import: xo8s2VkrTxe3/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 9tvmQ14zpX7W/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: OR0mReM4JDov/icon

createPlasmicElementProxy;

export type PlasmicSingleLineItem__VariantMembers = {
  checked: "checked";
};
export type PlasmicSingleLineItem__VariantsArgs = {
  checked?: SingleBooleanChoiceArg<"checked">;
};
type VariantPropType = keyof PlasmicSingleLineItem__VariantsArgs;
export const PlasmicSingleLineItem__VariantProps = new Array<VariantPropType>(
  "checked"
);

export type PlasmicSingleLineItem__ArgsType = {
  onItemClick?: (event: any) => void;
  completed?: boolean;
  onCompletedChange?: (val: string) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  valuez?: string;
  onValueChange?: (name: string, type: any) => void;
};
type ArgPropType = keyof PlasmicSingleLineItem__ArgsType;
export const PlasmicSingleLineItem__ArgProps = new Array<ArgPropType>(
  "onItemClick",
  "completed",
  "onCompletedChange",
  "title",
  "onTitleChange",
  "valuez",
  "onValueChange"
);

export type PlasmicSingleLineItem__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultSingleLineItemProps {
  onItemClick?: (event: any) => void;
  completed?: boolean;
  onCompletedChange?: (val: string) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  valuez?: string;
  onValueChange?: (name: string, type: any) => void;
  checked?: SingleBooleanChoiceArg<"checked">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSingleLineItem__RenderFunc(props: {
  variants: PlasmicSingleLineItem__VariantsArgs;
  args: PlasmicSingleLineItem__ArgsType;
  overrides: PlasmicSingleLineItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "checked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.completed;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.checked
      },
      {
        path: "completed",
        type: "writable",
        variableType: "boolean",

        valueProp: "completed",
        onChangeProp: "onCompletedChange"
      },
      {
        path: "title",
        type: "writable",
        variableType: "text",

        valueProp: "title",
        onChangeProp: "onTitleChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootchecked]: hasVariant($state, "checked", "checked") }
      )}
    >
      <p.PlasmicIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant($state, "checked", "checked") ? Icon2Icon : IconIcon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgchecked]: hasVariant($state, "checked", "checked")
        })}
        onClick={args.onItemClick}
        role={"img"}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textchecked]: hasVariant($state, "checked", "checked")
        })}
      >
        <React.Fragment>
          {(() => {
            try {
              return $state.title;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSingleLineItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSingleLineItem__VariantsArgs;
    args?: PlasmicSingleLineItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSingleLineItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSingleLineItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSingleLineItem__ArgProps,
          internalVariantPropNames: PlasmicSingleLineItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSingleLineItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSingleLineItem";
  } else {
    func.displayName = `PlasmicSingleLineItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSingleLineItem = Object.assign(
  // Top-level PlasmicSingleLineItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSingleLineItem
    internalVariantProps: PlasmicSingleLineItem__VariantProps,
    internalArgProps: PlasmicSingleLineItem__ArgProps
  }
);

export default PlasmicSingleLineItem;
/* prettier-ignore-end */