// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: waVhN6sKC41JduCkjZHFuq
// Component: 20yDqEjpojAV

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
import Logo from "../../Logo"; // plasmic-import: nCrsogexD5Rs/component
import Button from "../../Button"; // plasmic-import: XVnqJFFWe0Ng/component

import { useScreenVariants as useScreenVariantsogPeTNssmuP2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: OGPeTNssmuP2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_app_starter_hostless_no_auth_test.module.css"; // plasmic-import: waVhN6sKC41JduCkjZHFuq/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: 20yDqEjpojAV/css

createPlasmicElementProxy;

export type PlasmicNavbar__VariantMembers = {
  isAuthFlow: "isAuthFlow";
};
export type PlasmicNavbar__VariantsArgs = {
  isAuthFlow?: SingleBooleanChoiceArg<"isAuthFlow">;
};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>(
  "isAuthFlow"
);

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultNavbarProps {
  isAuthFlow?: SingleBooleanChoiceArg<"isAuthFlow">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;
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
        path: "isAuthFlow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isAuthFlow
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__aaKts, {
          [sty.freeBoxisAuthFlow__aaKtssci0F]: hasVariant(
            $state,
            "isAuthFlow",
            "isAuthFlow"
          )
        })}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xgaY)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__dzWMp, {
              [sty.buttonisAuthFlow__dzWMpsci0F]: hasVariant(
                $state,
                "isAuthFlow",
                "isAuthFlow"
              )
            })}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__dlhi7)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__p7Ao5)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Services"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__e1V3, {
              [sty.buttonisAuthFlow__e1V3Sci0F]: hasVariant(
                $state,
                "isAuthFlow",
                "isAuthFlow"
              )
            })}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__fifc2)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___5R4As)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Features"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__xIHrj, {
              [sty.buttonisAuthFlow__xIHrjsci0F]: hasVariant(
                $state,
                "isAuthFlow",
                "isAuthFlow"
              )
            })}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__uOvRu)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__cc7Me)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Company"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__byHq7, {
              [sty.buttonisAuthFlow__byHq7Sci0F]: hasVariant(
                $state,
                "isAuthFlow",
                "isAuthFlow"
              )
            })}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__qeAN)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__j49F5)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Contact"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__iNaLq, {
              [sty.buttonisAuthFlow__iNaLqsci0F]: hasVariant(
                $state,
                "isAuthFlow",
                "isAuthFlow"
              )
            })}
            color={"baseDark"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__lm36Q)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__e6A4C)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Sign up"}
          </Button>
        </p.Stack>
        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__nNUg)}>
            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.button__xsa79
              )}
            >
              {"Sign up"}
            </button>
            <Button
              className={classNames("__wab_instance", sty.button___6URpF)}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__wSlgz)}
                  role={"img"}
                />
              }
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__uaPm)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar__ArgsType,
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
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
