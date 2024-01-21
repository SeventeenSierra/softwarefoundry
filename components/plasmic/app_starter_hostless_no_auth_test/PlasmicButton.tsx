// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: waVhN6sKC41JduCkjZHFuq
// Component: XVnqJFFWe0Ng

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";
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

import projectcss from "./plasmic_app_starter_hostless_no_auth_test.module.css"; // plasmic-import: waVhN6sKC41JduCkjZHFuq/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: XVnqJFFWe0Ng/css

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  color:
    | "primary"
    | "primaryVivid"
    | "primaryDark"
    | "primaryLight"
    | "secondary"
    | "secondaryVivid"
    | "secondaryDark"
    | "secondaryLight"
    | "accentCool"
    | "accentCoolDark"
    | "accentCoolLight"
    | "accentWarm"
    | "accentWarmDark"
    | "accentWarmLight"
    | "white"
    | "baseDark"
    | "baseReg"
    | "baseLight"
    | "link"
    | "text";
  iconOnly: "iconOnly";
  outline: "outline";
  round: "round";
  large: "large";
  extraSmallShadow: "extraSmallShadow";
  isDisabled: "isDisabled";
};
export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  color?: SingleChoiceArg<
    | "primary"
    | "primaryVivid"
    | "primaryDark"
    | "primaryLight"
    | "secondary"
    | "secondaryVivid"
    | "secondaryDark"
    | "secondaryLight"
    | "accentCool"
    | "accentCoolDark"
    | "accentCoolLight"
    | "accentWarm"
    | "accentWarmDark"
    | "accentWarmLight"
    | "white"
    | "baseDark"
    | "baseReg"
    | "baseLight"
    | "link"
    | "text"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "outline",
  "round",
  "large",
  "extraSmallShadow",
  "isDisabled"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link",
  "submitsForm",
  "target"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  color?: SingleChoiceArg<
    | "primary"
    | "primaryVivid"
    | "primaryDark"
    | "primaryLight"
    | "secondary"
    | "secondaryVivid"
    | "secondaryDark"
    | "secondaryLight"
    | "accentCool"
    | "accentCoolDark"
    | "accentCoolLight"
    | "accentWarm"
    | "accentWarmDark"
    | "accentWarmLight"
    | "white"
    | "baseDark"
    | "baseReg"
    | "baseLight"
    | "link"
    | "text"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
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
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconOnly
      },
      {
        path: "outline",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.outline
      },
      {
        path: "round",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.round
      },
      {
        path: "large",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.large
      },
      {
        path: "extraSmallShadow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.extraSmallShadow
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
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
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_baseDark]: hasVariant($state, "color", "baseDark"),
          [sty.rootcolor_baseLight]: hasVariant($state, "color", "baseLight"),
          [sty.rootcolor_baseReg]: hasVariant($state, "color", "baseReg"),
          [sty.rootcolor_link]: hasVariant($state, "color", "link"),
          [sty.rootcolor_primaryDark]: hasVariant(
            $state,
            "color",
            "primaryDark"
          ),
          [sty.rootcolor_primaryLight]: hasVariant(
            $state,
            "color",
            "primaryLight"
          ),
          [sty.rootcolor_primaryVivid]: hasVariant(
            $state,
            "color",
            "primaryVivid"
          ),
          [sty.rootcolor_primary]: hasVariant($state, "color", "primary"),
          [sty.rootcolor_secondaryDark]: hasVariant(
            $state,
            "color",
            "secondaryDark"
          ),
          [sty.rootcolor_secondaryLight]: hasVariant(
            $state,
            "color",
            "secondaryLight"
          ),
          [sty.rootcolor_secondaryVivid]: hasVariant(
            $state,
            "color",
            "secondaryVivid"
          ),
          [sty.rootcolor_secondary]: hasVariant($state, "color", "secondary"),
          [sty.rootcolor_text]: hasVariant($state, "color", "text"),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rootextraSmallShadow]: hasVariant(
            $state,
            "extraSmallShadow",
            "extraSmallShadow"
          ),
          [sty.rooticonOnly]: hasVariant($state, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootlarge]: hasVariant($state, "large", "large"),
          [sty.rootoutline]: hasVariant($state, "outline", "outline"),
          [sty.rootround]: hasVariant($state, "round", "round"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
    >
      <p.Stack
        as={"button"}
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.button, sty.button, {
          [sty.buttoncolor_accentCoolDark]: hasVariant(
            $state,
            "color",
            "accentCoolDark"
          ),
          [sty.buttoncolor_accentCoolLight]: hasVariant(
            $state,
            "color",
            "accentCoolLight"
          ),
          [sty.buttoncolor_accentCool]: hasVariant(
            $state,
            "color",
            "accentCool"
          ),
          [sty.buttoncolor_accentWarmDark]: hasVariant(
            $state,
            "color",
            "accentWarmDark"
          ),
          [sty.buttoncolor_accentWarmLight]: hasVariant(
            $state,
            "color",
            "accentWarmLight"
          ),
          [sty.buttoncolor_accentWarm]: hasVariant(
            $state,
            "color",
            "accentWarm"
          ),
          [sty.buttoncolor_baseDark]: hasVariant($state, "color", "baseDark"),
          [sty.buttoncolor_baseLight]: hasVariant($state, "color", "baseLight"),
          [sty.buttoncolor_baseReg]: hasVariant($state, "color", "baseReg"),
          [sty.buttoncolor_link]: hasVariant($state, "color", "link"),
          [sty.buttoncolor_primaryDark]: hasVariant(
            $state,
            "color",
            "primaryDark"
          ),
          [sty.buttoncolor_primaryLight]: hasVariant(
            $state,
            "color",
            "primaryLight"
          ),
          [sty.buttoncolor_primaryVivid]: hasVariant(
            $state,
            "color",
            "primaryVivid"
          ),
          [sty.buttoncolor_primary]: hasVariant($state, "color", "primary"),
          [sty.buttoncolor_secondaryDark]: hasVariant(
            $state,
            "color",
            "secondaryDark"
          ),
          [sty.buttoncolor_secondaryLight]: hasVariant(
            $state,
            "color",
            "secondaryLight"
          ),
          [sty.buttoncolor_secondaryVivid]: hasVariant(
            $state,
            "color",
            "secondaryVivid"
          ),
          [sty.buttoncolor_secondary]: hasVariant($state, "color", "secondary"),
          [sty.buttoncolor_text]: hasVariant($state, "color", "text"),
          [sty.buttoncolor_white]: hasVariant($state, "color", "white"),
          [sty.buttonextraSmallShadow]: hasVariant(
            $state,
            "extraSmallShadow",
            "extraSmallShadow"
          ),
          [sty.buttoniconOnly]: hasVariant($state, "iconOnly", "iconOnly"),
          [sty.buttonisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.buttonlarge]: hasVariant($state, "large", "large"),
          [sty.buttonoutline]: hasVariant($state, "outline", "outline"),
          [sty.buttonround]: hasVariant($state, "round", "round"),
          [sty.buttonshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.buttonshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
      >
        {(
          hasVariant($state, "iconOnly", "iconOnly")
            ? true
            : hasVariant($state, "showStartIcon", "showStartIcon")
            ? true
            : false
        )
          ? p.renderPlasmicSlot({
              defaultContents: (
                <svg
                  className={classNames(projectcss.all, sty.svg___1DjsN, {
                    [sty.svgshowEndIcon___1DjsNo3FkH]: hasVariant(
                      $state,
                      "showEndIcon",
                      "showEndIcon"
                    )
                  })}
                  role={"img"}
                />
              ),

              value: args.startIcon,
              className: classNames(sty.slotTargetStartIcon, {
                [sty.slotTargetStartIconcolor_baseDark]: hasVariant(
                  $state,
                  "color",
                  "baseDark"
                ),
                [sty.slotTargetStartIconcolor_baseLight]: hasVariant(
                  $state,
                  "color",
                  "baseLight"
                ),
                [sty.slotTargetStartIconcolor_baseReg]: hasVariant(
                  $state,
                  "color",
                  "baseReg"
                ),
                [sty.slotTargetStartIconcolor_link]: hasVariant(
                  $state,
                  "color",
                  "link"
                ),
                [sty.slotTargetStartIconcolor_primaryDark]: hasVariant(
                  $state,
                  "color",
                  "primaryDark"
                ),
                [sty.slotTargetStartIconcolor_primaryLight]: hasVariant(
                  $state,
                  "color",
                  "primaryLight"
                ),
                [sty.slotTargetStartIconcolor_primaryVivid]: hasVariant(
                  $state,
                  "color",
                  "primaryVivid"
                ),
                [sty.slotTargetStartIconcolor_primary]: hasVariant(
                  $state,
                  "color",
                  "primary"
                ),
                [sty.slotTargetStartIconcolor_secondaryDark]: hasVariant(
                  $state,
                  "color",
                  "secondaryDark"
                ),
                [sty.slotTargetStartIconcolor_secondaryLight]: hasVariant(
                  $state,
                  "color",
                  "secondaryLight"
                ),
                [sty.slotTargetStartIconcolor_secondaryVivid]: hasVariant(
                  $state,
                  "color",
                  "secondaryVivid"
                ),
                [sty.slotTargetStartIconcolor_secondary]: hasVariant(
                  $state,
                  "color",
                  "secondary"
                ),
                [sty.slotTargetStartIconcolor_text]: hasVariant(
                  $state,
                  "color",
                  "text"
                ),
                [sty.slotTargetStartIconcolor_white]: hasVariant(
                  $state,
                  "color",
                  "white"
                ),
                [sty.slotTargetStartIconiconOnly]: hasVariant(
                  $state,
                  "iconOnly",
                  "iconOnly"
                ),
                [sty.slotTargetStartIconisDisabled]: hasVariant(
                  $state,
                  "isDisabled",
                  "isDisabled"
                ),
                [sty.slotTargetStartIconshowEndIcon]: hasVariant(
                  $state,
                  "showEndIcon",
                  "showEndIcon"
                ),
                [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                  $state,
                  "showStartIcon",
                  "showStartIcon"
                )
              })
            })
          : null}
        {(hasVariant($state, "iconOnly", "iconOnly") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildrencolor_accentCoolLight]: hasVariant(
                  $state,
                  "color",
                  "accentCoolLight"
                ),
                [sty.slotTargetChildrencolor_accentCool]: hasVariant(
                  $state,
                  "color",
                  "accentCool"
                ),
                [sty.slotTargetChildrencolor_accentWarmDark]: hasVariant(
                  $state,
                  "color",
                  "accentWarmDark"
                ),
                [sty.slotTargetChildrencolor_accentWarmLight]: hasVariant(
                  $state,
                  "color",
                  "accentWarmLight"
                ),
                [sty.slotTargetChildrencolor_accentWarm]: hasVariant(
                  $state,
                  "color",
                  "accentWarm"
                ),
                [sty.slotTargetChildrencolor_baseDark]: hasVariant(
                  $state,
                  "color",
                  "baseDark"
                ),
                [sty.slotTargetChildrencolor_baseLight]: hasVariant(
                  $state,
                  "color",
                  "baseLight"
                ),
                [sty.slotTargetChildrencolor_baseReg]: hasVariant(
                  $state,
                  "color",
                  "baseReg"
                ),
                [sty.slotTargetChildrencolor_link]: hasVariant(
                  $state,
                  "color",
                  "link"
                ),
                [sty.slotTargetChildrencolor_primaryDark]: hasVariant(
                  $state,
                  "color",
                  "primaryDark"
                ),
                [sty.slotTargetChildrencolor_primaryLight]: hasVariant(
                  $state,
                  "color",
                  "primaryLight"
                ),
                [sty.slotTargetChildrencolor_primaryVivid]: hasVariant(
                  $state,
                  "color",
                  "primaryVivid"
                ),
                [sty.slotTargetChildrencolor_primary]: hasVariant(
                  $state,
                  "color",
                  "primary"
                ),
                [sty.slotTargetChildrencolor_secondaryDark]: hasVariant(
                  $state,
                  "color",
                  "secondaryDark"
                ),
                [sty.slotTargetChildrencolor_secondaryLight]: hasVariant(
                  $state,
                  "color",
                  "secondaryLight"
                ),
                [sty.slotTargetChildrencolor_secondaryVivid]: hasVariant(
                  $state,
                  "color",
                  "secondaryVivid"
                ),
                [sty.slotTargetChildrencolor_secondary]: hasVariant(
                  $state,
                  "color",
                  "secondary"
                ),
                [sty.slotTargetChildrencolor_text]: hasVariant(
                  $state,
                  "color",
                  "text"
                ),
                [sty.slotTargetChildrencolor_white]: hasVariant(
                  $state,
                  "color",
                  "white"
                ),
                [sty.slotTargetChildreniconOnly]: hasVariant(
                  $state,
                  "iconOnly",
                  "iconOnly"
                ),
                [sty.slotTargetChildrenisDisabled]: hasVariant(
                  $state,
                  "isDisabled",
                  "isDisabled"
                ),
                [sty.slotTargetChildrenlarge]: hasVariant(
                  $state,
                  "large",
                  "large"
                ),
                [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                  $state,
                  "showEndIcon",
                  "showEndIcon"
                ),
                [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                  $state,
                  "showStartIcon",
                  "showStartIcon"
                )
              })
            })
          : null}
        {(
          hasVariant($state, "iconOnly", "iconOnly")
            ? false
            : hasVariant($state, "showEndIcon", "showEndIcon")
            ? true
            : hasVariant($state, "showStartIcon", "showStartIcon")
            ? false
            : false
        )
          ? p.renderPlasmicSlot({
              defaultContents: (
                <svg
                  className={classNames(projectcss.all, sty.svg___5MrQ3, {
                    [sty.svgshowEndIcon___5MrQ3O3FkH]: hasVariant(
                      $state,
                      "showEndIcon",
                      "showEndIcon"
                    )
                  })}
                  role={"img"}
                />
              ),

              value: args.endIcon,
              className: classNames(sty.slotTargetEndIcon, {
                [sty.slotTargetEndIconcolor_baseDark]: hasVariant(
                  $state,
                  "color",
                  "baseDark"
                ),
                [sty.slotTargetEndIconcolor_baseLight]: hasVariant(
                  $state,
                  "color",
                  "baseLight"
                ),
                [sty.slotTargetEndIconcolor_baseReg]: hasVariant(
                  $state,
                  "color",
                  "baseReg"
                ),
                [sty.slotTargetEndIconcolor_link]: hasVariant(
                  $state,
                  "color",
                  "link"
                ),
                [sty.slotTargetEndIconcolor_primaryDark]: hasVariant(
                  $state,
                  "color",
                  "primaryDark"
                ),
                [sty.slotTargetEndIconcolor_primaryLight]: hasVariant(
                  $state,
                  "color",
                  "primaryLight"
                ),
                [sty.slotTargetEndIconcolor_primaryVivid]: hasVariant(
                  $state,
                  "color",
                  "primaryVivid"
                ),
                [sty.slotTargetEndIconcolor_primary]: hasVariant(
                  $state,
                  "color",
                  "primary"
                ),
                [sty.slotTargetEndIconcolor_secondaryDark]: hasVariant(
                  $state,
                  "color",
                  "secondaryDark"
                ),
                [sty.slotTargetEndIconcolor_secondaryLight]: hasVariant(
                  $state,
                  "color",
                  "secondaryLight"
                ),
                [sty.slotTargetEndIconcolor_secondaryVivid]: hasVariant(
                  $state,
                  "color",
                  "secondaryVivid"
                ),
                [sty.slotTargetEndIconcolor_secondary]: hasVariant(
                  $state,
                  "color",
                  "secondary"
                ),
                [sty.slotTargetEndIconcolor_text]: hasVariant(
                  $state,
                  "color",
                  "text"
                ),
                [sty.slotTargetEndIconcolor_white]: hasVariant(
                  $state,
                  "color",
                  "white"
                ),
                [sty.slotTargetEndIconiconOnly]: hasVariant(
                  $state,
                  "iconOnly",
                  "iconOnly"
                ),
                [sty.slotTargetEndIconisDisabled]: hasVariant(
                  $state,
                  "isDisabled",
                  "isDisabled"
                ),
                [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                  $state,
                  "showEndIcon",
                  "showEndIcon"
                ),
                [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                  $state,
                  "showStartIcon",
                  "showStartIcon"
                )
              })
            })
          : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton__ArgsType,
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
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
