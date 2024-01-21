// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: waVhN6sKC41JduCkjZHFuq
// Component: Q_baW8ZSiXFF

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
import MultiLineItem from "../../MultiLineItem"; // plasmic-import: HqquheP4hkVA/component
import SingleLineItem from "../../SingleLineItem"; // plasmic-import: tkPk7FHQm8Xl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_app_starter_hostless_no_auth_test.module.css"; // plasmic-import: waVhN6sKC41JduCkjZHFuq/projectcss
import sty from "./PlasmicChecklist.module.css"; // plasmic-import: Q_baW8ZSiXFF/css

createPlasmicElementProxy;

export type PlasmicChecklist__VariantMembers = {};
export type PlasmicChecklist__VariantsArgs = {};
type VariantPropType = keyof PlasmicChecklist__VariantsArgs;
export const PlasmicChecklist__VariantProps = new Array<VariantPropType>();

export type PlasmicChecklist__ArgsType = {};
type ArgPropType = keyof PlasmicChecklist__ArgsType;
export const PlasmicChecklist__ArgProps = new Array<ArgPropType>();

export type PlasmicChecklist__OverridesType = {
  root?: p.Flex<"div">;
  multiLineItem?: p.Flex<typeof MultiLineItem>;
  item2?: p.Flex<typeof SingleLineItem>;
};

export interface DefaultChecklistProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChecklist__RenderFunc(props: {
  variants: PlasmicChecklist__VariantsArgs;
  args: PlasmicChecklist__ArgsType;
  overrides: PlasmicChecklist__OverridesType;
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
        path: "itemz",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          { title: "first item list on your list", complete: false },
          { title: "second item list on your list", complete: true },
          { title: "third item list on your list", complete: true },
          { title: "fourth item list on your list", complete: false },
          { title: "fifth item list on your list", complete: false }
        ]
      },
      {
        path: "item2[].completed",
        type: "private",
        variableType: "boolean"
      },
      {
        path: "item2[].title",
        type: "private",
        variableType: "text"
      },
      {
        path: "multiLineItem[].completed",
        type: "private",
        variableType: "boolean"
      },
      {
        path: "multiLineItem[].title",
        type: "private",
        variableType: "text"
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
        sty.root
      )}
    >
      <section className={classNames(projectcss.all, sty.section__xYrVu)}>
        <h1
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1__bEiTu
          )}
        >
          {"Multi Line Checklist"}
        </h1>
        <div className={classNames(projectcss.all, sty.freeBox__uweTo)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aKwXz
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return JSON.stringify($state.itemz, null, "\t");
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
          <div className={classNames(projectcss.all, sty.freeBox__u0TK)}>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $state.itemz;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.multiLineItem),
                  completed: p.generateStateValueProp($state, [
                    "multiLineItem",
                    __plasmic_idx_0,
                    "completed"
                  ]),
                  key: currentIndex,
                  onCompletedChange: p.generateStateOnChangeProp($state, [
                    "multiLineItem",
                    __plasmic_idx_0,
                    "completed"
                  ]),
                  onItemClick: async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (currentItem.complete =
                                !currentItem.complete);
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }
                  },
                  onTitleChange: async (...eventArgs: any) => {
                    p.generateStateOnChangeProp($state, [
                      "multiLineItem",
                      __plasmic_idx_0,
                      "title"
                    ]).apply(null, eventArgs);
                    (async val => {
                      const $steps = {};

                      $steps["runCode"] = true
                        ? (() => {
                            const actionArgs = {
                              customFunction: async () => {
                                return (currentItem.title = val);
                              }
                            };
                            return (({ customFunction }) => {
                              return customFunction();
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["runCode"] != null &&
                        typeof $steps["runCode"] === "object" &&
                        typeof $steps["runCode"].then === "function"
                      ) {
                        $steps["runCode"] = await $steps["runCode"];
                      }
                    }).apply(null, eventArgs);
                  },
                  title: p.generateStateValueProp($state, [
                    "multiLineItem",
                    __plasmic_idx_0,
                    "title"
                  ])
                };

                p.initializePlasmicStates(
                  $state,
                  [
                    {
                      name: "multiLineItem[].completed",
                      initFunc: ({ $props, $state, $queries }) =>
                        (() => {
                          try {
                            return currentItem.complete;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return false;
                            }
                            throw e;
                          }
                        })()
                    },
                    {
                      name: "multiLineItem[].title",
                      initFunc: ({ $props, $state, $queries }) =>
                        (() => {
                          try {
                            return currentItem.title;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()
                    }
                  ],
                  [__plasmic_idx_0]
                );
                return (
                  <MultiLineItem
                    data-plasmic-name={"multiLineItem"}
                    data-plasmic-override={overrides.multiLineItem}
                    {...child$Props}
                  />
                );
              })();
            })}
          </div>
        </div>
      </section>
      <section className={classNames(projectcss.all, sty.section___7DeJk)}>
        <h1
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1___8Ji2F
          )}
        >
          {"Single Line Checklist"}
        </h1>
        <div className={classNames(projectcss.all, sty.freeBox___0PhvE)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zR4YK
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return JSON.stringify($state.itemz, null, "\t");
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
          <div className={classNames(projectcss.all, sty.freeBox___57A68)}>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $state.itemz;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.item2),
                  completed: p.generateStateValueProp($state, [
                    "item2",
                    __plasmic_idx_0,
                    "completed"
                  ]),
                  key: currentIndex,
                  onCompletedChange: p.generateStateOnChangeProp($state, [
                    "item2",
                    __plasmic_idx_0,
                    "completed"
                  ]),
                  onItemClick: async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (currentItem.complete =
                                !currentItem.complete);
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }
                  },
                  onTitleChange: p.generateStateOnChangeProp($state, [
                    "item2",
                    __plasmic_idx_0,
                    "title"
                  ]),
                  title: p.generateStateValueProp($state, [
                    "item2",
                    __plasmic_idx_0,
                    "title"
                  ])
                };

                p.initializePlasmicStates(
                  $state,
                  [
                    {
                      name: "item2[].completed",
                      initFunc: ({ $props, $state, $queries }) =>
                        (() => {
                          try {
                            return currentItem.complete;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return false;
                            }
                            throw e;
                          }
                        })()
                    },
                    {
                      name: "item2[].title",
                      initFunc: ({ $props, $state, $queries }) =>
                        (() => {
                          try {
                            return currentItem.title;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()
                    }
                  ],
                  [__plasmic_idx_0]
                );
                return (
                  <SingleLineItem
                    data-plasmic-name={"item2"}
                    data-plasmic-override={overrides.item2}
                    {...child$Props}
                  />
                );
              })();
            })}
          </div>
        </div>
      </section>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "multiLineItem", "item2"],
  multiLineItem: ["multiLineItem"],
  item2: ["item2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  multiLineItem: typeof MultiLineItem;
  item2: typeof SingleLineItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChecklist__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChecklist__VariantsArgs;
    args?: PlasmicChecklist__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChecklist__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChecklist__ArgsType,
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
          internalArgPropNames: PlasmicChecklist__ArgProps,
          internalVariantPropNames: PlasmicChecklist__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChecklist__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChecklist";
  } else {
    func.displayName = `PlasmicChecklist.${nodeName}`;
  }
  return func;
}

export const PlasmicChecklist = Object.assign(
  // Top-level PlasmicChecklist renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    multiLineItem: makeNodeComponent("multiLineItem"),
    item2: makeNodeComponent("item2"),

    // Metadata about props expected for PlasmicChecklist
    internalVariantProps: PlasmicChecklist__VariantProps,
    internalArgProps: PlasmicChecklist__ArgProps
  }
);

export default PlasmicChecklist;
/* prettier-ignore-end */
