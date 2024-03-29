// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: waVhN6sKC41JduCkjZHFuq
// Component: NxWZEowvmz20

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
import Button from "../../Button"; // plasmic-import: XVnqJFFWe0Ng/component

import { useScreenVariants as useScreenVariantsogPeTNssmuP2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: OGPeTNssmuP2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_app_starter_hostless_no_auth_test.module.css"; // plasmic-import: waVhN6sKC41JduCkjZHFuq/projectcss
import sty from "./PlasmicPlasmicLogin.module.css"; // plasmic-import: NxWZEowvmz20/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: dxj71VlIakcj/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: oo3GFQUuqF3Z/icon

createPlasmicElementProxy;

export type PlasmicPlasmicLogin__VariantMembers = {};
export type PlasmicPlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlasmicLogin__VariantsArgs;
export const PlasmicPlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicPlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicPlasmicLogin__ArgsType;
export const PlasmicPlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicPlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  foreground?: p.Flex<"div">;
  emailInput?: p.Flex<"input">;
  passwordInput?: p.Flex<"input">;
};

export interface DefaultPlasmicLoginProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlasmicLogin__RenderFunc(props: {
  variants: PlasmicPlasmicLogin__VariantsArgs;
  args: PlasmicPlasmicLogin__ArgsType;
  overrides: PlasmicPlasmicLogin__OverridesType;
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
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "you@example.com"
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "Some value"
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
        className={classNames(projectcss.all, sty.freeBox__s4A)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___53Rgd)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uaaxq)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__oEcE2)}
              color={undefined}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__dgsTn)}
                  role={"img"}
                />
              }
              showStartIcon={true}
              startIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__veXas)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__am06
                )}
              >
                {"Back"}
              </div>
            </Button>
          </p.Stack>
        </p.Stack>
      </p.Stack>
      <p.Stack
        as={"div"}
        data-plasmic-name={"foreground"}
        data-plasmic-override={overrides.foreground}
        hasGap={true}
        className={classNames(projectcss.all, sty.foreground)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mqizS)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__rInyu)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___5Xgyk)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oarhw)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___08BuT
                  )}
                >
                  {"Email"}
                </div>
                <input
                  data-plasmic-name={"emailInput"}
                  data-plasmic-override={overrides.emailInput}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.emailInput
                  )}
                  onChange={e => {
                    p.generateStateOnChangeProp($state, [
                      "emailInput",
                      "value"
                    ])(e.target.value);
                  }}
                  placeholder={"you@example.com"}
                  ref={ref => {
                    $refs["emailInput"] = ref;
                  }}
                  size={1}
                  type={"text"}
                  value={
                    p.generateStateValueProp($state, ["emailInput", "value"]) ??
                    ""
                  }
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dMfNj
                  )}
                >
                  {"Password"}
                </div>
                <input
                  data-plasmic-name={"passwordInput"}
                  data-plasmic-override={overrides.passwordInput}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.passwordInput
                  )}
                  onChange={e => {
                    p.generateStateOnChangeProp($state, [
                      "passwordInput",
                      "value"
                    ])(e.target.value);
                  }}
                  placeholder={"Some placeholder"}
                  ref={ref => {
                    $refs["passwordInput"] = ref;
                  }}
                  size={1}
                  type={"password"}
                  value={
                    p.generateStateValueProp($state, [
                      "passwordInput",
                      "value"
                    ]) ?? ""
                  }
                />
              </p.Stack>
              <Button
                className={classNames("__wab_instance", sty.button__hOLlq)}
                color={undefined}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__z8R05)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__r7R9M)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eNMH
                  )}
                >
                  {"Sign In"}
                </div>
              </Button>
              <Button
                className={classNames("__wab_instance", sty.button___8Rcu)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__fozVm)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__u6OzH)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7Nbxi
                  )}
                >
                  {"Sign Up"}
                </div>
              </Button>
            </p.Stack>
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "foreground", "emailInput", "passwordInput"],
  foreground: ["foreground", "emailInput", "passwordInput"],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  foreground: "div";
  emailInput: "input";
  passwordInput: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlasmicLogin__VariantsArgs;
    args?: PlasmicPlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlasmicLogin__ArgsType,
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
          internalArgPropNames: PlasmicPlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicPlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlasmicLogin";
  } else {
    func.displayName = `PlasmicPlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicPlasmicLogin = Object.assign(
  // Top-level PlasmicPlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground: makeNodeComponent("foreground"),
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),

    // Metadata about props expected for PlasmicPlasmicLogin
    internalVariantProps: PlasmicPlasmicLogin__VariantProps,
    internalArgProps: PlasmicPlasmicLogin__ArgProps
  }
);

export default PlasmicPlasmicLogin;
/* prettier-ignore-end */
