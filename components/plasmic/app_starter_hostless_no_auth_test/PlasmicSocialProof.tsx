// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: waVhN6sKC41JduCkjZHFuq
// Component: bbJICMB2bj-5

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

import { useScreenVariants as useScreenVariantsogPeTNssmuP2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: OGPeTNssmuP2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_app_starter_hostless_no_auth_test.module.css"; // plasmic-import: waVhN6sKC41JduCkjZHFuq/projectcss
import sty from "./PlasmicSocialProof.module.css"; // plasmic-import: bbJICMB2bj-5/css

createPlasmicElementProxy;

export type PlasmicSocialProof__VariantMembers = {};
export type PlasmicSocialProof__VariantsArgs = {};
type VariantPropType = keyof PlasmicSocialProof__VariantsArgs;
export const PlasmicSocialProof__VariantProps = new Array<VariantPropType>();

export type PlasmicSocialProof__ArgsType = {};
type ArgPropType = keyof PlasmicSocialProof__ArgsType;
export const PlasmicSocialProof__ArgProps = new Array<ArgPropType>();

export type PlasmicSocialProof__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSocialProofProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSocialProof__RenderFunc(props: {
  variants: PlasmicSocialProof__VariantsArgs;
  args: PlasmicSocialProof__ArgsType;
  overrides: PlasmicSocialProof__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsogPeTNssmuP2()
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
        sty.root
      )}
    >
      <p.PlasmicImg
        alt={""}
        className={classNames(sty.img__hu4Gi)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={
          hasVariant(globalVariants, "screen", "mobileOnly") ? "170px" : "100%"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/app_starter_hostless_no_auth_test/images/image4.png",
          fullWidth: 233,
          fullHeight: 50,
          aspectRatio: undefined
        }}
      />

      <p.PlasmicImg
        alt={""}
        className={classNames(sty.img__gMkLq)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={
          hasVariant(globalVariants, "screen", "mobileOnly") ? "170px" : "100%"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/app_starter_hostless_no_auth_test/images/image5.png",
          fullWidth: 189,
          fullHeight: 50,
          aspectRatio: undefined
        }}
      />

      <p.PlasmicImg
        alt={""}
        className={classNames(sty.img__og2IM)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={
          hasVariant(globalVariants, "screen", "mobileOnly") ? "170px" : "100%"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/app_starter_hostless_no_auth_test/images/image6.png",
          fullWidth: 194,
          fullHeight: 50,
          aspectRatio: undefined
        }}
      />

      <p.PlasmicImg
        alt={""}
        className={classNames(sty.img__a1UZl)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={
          hasVariant(globalVariants, "screen", "mobileOnly") ? "170px" : "100%"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/app_starter_hostless_no_auth_test/images/image7.png",
          fullWidth: 189,
          fullHeight: 50,
          aspectRatio: undefined
        }}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSocialProof__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSocialProof__VariantsArgs;
    args?: PlasmicSocialProof__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSocialProof__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSocialProof__ArgsType,
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
          internalArgPropNames: PlasmicSocialProof__ArgProps,
          internalVariantPropNames: PlasmicSocialProof__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSocialProof__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSocialProof";
  } else {
    func.displayName = `PlasmicSocialProof.${nodeName}`;
  }
  return func;
}

export const PlasmicSocialProof = Object.assign(
  // Top-level PlasmicSocialProof renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSocialProof
    internalVariantProps: PlasmicSocialProof__VariantProps,
    internalArgProps: PlasmicSocialProof__ArgProps
  }
);

export default PlasmicSocialProof;
/* prettier-ignore-end */
