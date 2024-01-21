// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gqxPS4AgvrvZFiLQ3PbJ65
// Component: K5WwyigzrnEx

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
import PageLayout from "../../PageLayout"; // plasmic-import: xGklKYpUUGMg/component
import Hero from "../../Hero"; // plasmic-import: w5qEdbiJ11n3/component
import Button from "../../Button"; // plasmic-import: 3WK9FRVCXJcs/component
import NavigationBar from "../../NavigationBar"; // plasmic-import: JQmM1UuIubiQ/component
import Logo from "../../Logo"; // plasmic-import: No_gtKjzaEYA/component
import Footer from "../../Footer"; // plasmic-import: Q20KHtWWjNMw/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_app_starter_hostless_no_auth_test_css from "../app_starter_hostless_no_auth_test/plasmic_app_starter_hostless_no_auth_test.module.css"; // plasmic-import: waVhN6sKC41JduCkjZHFuq/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_software_foundry.module.css"; // plasmic-import: gqxPS4AgvrvZFiLQ3PbJ65/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: K5WwyigzrnEx/css

import IconmonstrRefresh1SvgIcon from "./icons/PlasmicIcon__IconmonstrRefresh1Svg"; // plasmic-import: WhpeF1cGeUrK/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: QI7Bkirsjidh/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  pageLayout?: p.Flex<typeof PageLayout>;
  hero?: p.Flex<typeof Hero>;
  h3?: p.Flex<"h3">;
  h1?: p.Flex<"h1">;
  navigationBar?: p.Flex<typeof NavigationBar>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_app_starter_hostless_no_auth_test_css.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
            slot={
              <NavigationBar
                data-plasmic-name={"navigationBar"}
                data-plasmic-override={overrides.navigationBar}
                className={classNames("__wab_instance", sty.navigationBar)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dvFpS)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__uaWt)}
                    color={"link"}
                    link={`/`}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gFlkf
                      )}
                    >
                      {"Home"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__rNf7)}
                    color={"clear"}
                    link={`/demo`}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fbJiX
                      )}
                    >
                      {"Try a Demo"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__aUN9)}
                    color={"primary"}
                    link={`/partnership`}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bIfAx
                      )}
                    >
                      {"Become a Partner"}
                    </div>
                  </Button>
                </p.Stack>
              </NavigationBar>
            }
          >
            <div className={classNames(projectcss.all, sty.freeBox__tBEt)}>
              <div className={classNames(projectcss.all, sty.freeBox__qhnch)}>
                <Hero
                  data-plasmic-name={"hero"}
                  data-plasmic-override={overrides.hero}
                  className={classNames("__wab_instance", sty.hero)}
                  slot={
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Build With Confidence"}
                    </h1>
                  }
                  slot2={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3Tx2D
                      )}
                    >
                      {
                        "Step into a new era of web application development where security isn't an afterthought. With Software Foundry, you're not just building apps; you're fortifying them from the ground up. Begin your secure development journey today."
                      }
                    </div>
                  }
                  slot3={
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__x2TXd
                      )}
                      color={"clear"}
                      endIcon={
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__nmX7K)}
                          role={"img"}
                        />
                      }
                      link={`/demo`}
                      showEndIcon={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__yq6Ss
                        )}
                      >
                        {"Try a Demo"}
                      </div>
                    </Button>
                  }
                  slot4={
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__y3Kv9
                      )}
                      color={"primary"}
                      endIcon={
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__rHqmM)}
                          role={"img"}
                        />
                      }
                      link={`/partnership`}
                      showEndIcon={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dA6R0
                        )}
                      >
                        {"Become a Partner"}
                      </div>
                    </Button>
                  }
                  variations={"alpha"}
                >
                  <h3
                    data-plasmic-name={"h3"}
                    data-plasmic-override={overrides.h3}
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3
                    )}
                  >
                    {"Collaborate for a Safer Web"}
                  </h3>
                </Hero>
              </div>
            </div>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "hero", "h3", "h1", "navigationBar"],
  pageLayout: ["pageLayout", "hero", "h3", "h1", "navigationBar"],
  hero: ["hero", "h3", "h1"],
  h3: ["h3"],
  h1: ["h1"],
  navigationBar: ["navigationBar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  hero: typeof Hero;
  h3: "h3";
  h1: "h1";
  navigationBar: typeof NavigationBar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    hero: makeNodeComponent("hero"),
    h3: makeNodeComponent("h3"),
    h1: makeNodeComponent("h1"),
    navigationBar: makeNodeComponent("navigationBar"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
