// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6366ps4JUXGcyRNfgAokBX
// Component: w1AsPdUUjj
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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

import projectcss from "./plasmic_bentukcinta.module.css"; // plasmic-import: 6366ps4JUXGcyRNfgAokBX/projectcss
import sty from "./PlasmicBrideTitleHero.module.css"; // plasmic-import: w1AsPdUUjj/css

export type PlasmicBrideTitleHero__VariantMembers = {};

export type PlasmicBrideTitleHero__VariantsArgs = {};
type VariantPropType = keyof PlasmicBrideTitleHero__VariantsArgs;
export const PlasmicBrideTitleHero__VariantProps = new Array<VariantPropType>();

export type PlasmicBrideTitleHero__ArgsType = {
  brideTitleHero?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBrideTitleHero__ArgsType;
export const PlasmicBrideTitleHero__ArgProps = new Array<ArgPropType>(
  "brideTitleHero"
);

export type PlasmicBrideTitleHero__OverridesType = {
  root?: p.Flex<"span">;
};

export interface DefaultBrideTitleHeroProps {
  brideTitleHero?: React.ReactNode;
  className?: string;
}

function PlasmicBrideTitleHero__RenderFunc(props: {
  variants: PlasmicBrideTitleHero__VariantsArgs;
  args: PlasmicBrideTitleHero__ArgsType;
  overrides: PlasmicBrideTitleHero__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    true ? (
      <span
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.span,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__wUgxd
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <span
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span___12JfN
                    )}
                  >
                    {"Jonh & Marry"}
                  </span>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </h1>
          ),

          value: args.brideTitleHero
        })}
      </span>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "span";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBrideTitleHero__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBrideTitleHero__VariantsArgs;
    args?: PlasmicBrideTitleHero__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBrideTitleHero__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBrideTitleHero__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBrideTitleHero__ArgProps,
          internalVariantPropNames: PlasmicBrideTitleHero__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBrideTitleHero__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBrideTitleHero";
  } else {
    func.displayName = `PlasmicBrideTitleHero.${nodeName}`;
  }
  return func;
}

export const PlasmicBrideTitleHero = Object.assign(
  // Top-level PlasmicBrideTitleHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBrideTitleHero
    internalVariantProps: PlasmicBrideTitleHero__VariantProps,
    internalArgProps: PlasmicBrideTitleHero__ArgProps
  }
);

export default PlasmicBrideTitleHero;
/* prettier-ignore-end */
