// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: waVhN6sKC41JduCkjZHFuq
// Component: 5s_JKTayEZiK

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
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: 5s_JKTayEZiK/css

createPlasmicElementProxy;

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vZg70)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__l4Jp9)}
        >
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            _50Opaque={true}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___0X7My)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6PMa
              )}
            >
              {"Connect with us"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ykQwD)}
            >
              <svg
                className={classNames(projectcss.all, sty.svg__cwtdi)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__ryS2)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__vLIp)}
                role={"img"}
              />
            </p.Stack>
          </p.Stack>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__etK0R)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aQWu4
            )}
          >
            {"Product"}
          </div>
          <Button
            className={classNames("__wab_instance", sty.button__vthbW)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__t0Vjf)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__uPiP)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__heq9H
              )}
            >
              {"Pricing"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__y0C4T)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__lgl2M)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__nqXNx)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5Ivx
              )}
            >
              {"Log in"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__py2UX)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__jdb9L)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___3GEjR)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1LRyx
              )}
            >
              {"Integrations"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__loVcP)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__sdEko)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__m1Qp)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cEwU
              )}
            >
              {"Insights"}
            </div>
          </Button>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zvezy)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__u02Jh
            )}
          >
            {"Support"}
          </div>
          <Button
            className={classNames("__wab_instance", sty.button__dvSqk)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___7PE8D)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__fQmEs)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Documentation"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button___6Dtww)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__byDgx)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__epz9A)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"FAQs"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button___4Peae)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__vHc70)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__mMv2U)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Status"}
          </Button>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__aO37W)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r3Kwa
            )}
          >
            {"Company"}
          </div>
          <Button
            className={classNames("__wab_instance", sty.button__l22WB)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___4ILVh)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__tpnW)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"About"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__ljrKt)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__nMuP6)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__kaSn)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Contact us"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__dWjmI)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__mXSx1)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__uusro)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Careers"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__jrCct)}
            color={"text"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___8C7XE)}
                role={"img"}
              />
            }
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__yCfsx)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Media"}
          </Button>
        </p.Stack>
      </p.Stack>
    </div>
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
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
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
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */