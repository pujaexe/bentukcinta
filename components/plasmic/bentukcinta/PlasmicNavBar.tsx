// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6366ps4JUXGcyRNfgAokBX
// Component: Bsrcg3o0x1
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
import TombolCinta from "../../TombolCinta"; // plasmic-import: KWGUqEZOm9/component
import MenubarCollapse from "../../MenubarCollapse"; // plasmic-import: SVNXSXhQAU/component

import { useScreenVariants as useScreenVariantslPlKhvYjoqxXf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: lPlKHVYjoqxXF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bentukcinta.module.css"; // plasmic-import: 6366ps4JUXGcyRNfgAokBX/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: Bsrcg3o0x1/css

import MenuSvgrepoCom3SvgIcon from "./icons/PlasmicIcon__MenuSvgrepoCom3Svg"; // plasmic-import: JoX-gYL16O/icon

export type PlasmicNavBar__VariantMembers = {
  isCollapse: "isCollapse";
};

export type PlasmicNavBar__VariantsArgs = {
  isCollapse?: SingleBooleanChoiceArg<"isCollapse">;
};

type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>(
  "isCollapse"
);

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  alingLeft?: p.Flex<"div">;
  logo?: p.Flex<"a"> & Partial<LinkProps>;
  h5?: p.Flex<"h5">;
  navMenu?: p.Flex<"div">;
  tentangKami?: p.Flex<"a"> & Partial<LinkProps>;
  faq?: p.Flex<"a"> & Partial<LinkProps>;
  harga?: p.Flex<"a"> & Partial<LinkProps>;
  alingRigth?: p.Flex<"div">;
  tombolCinta?: p.Flex<typeof TombolCinta>;
  button?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
  menubarCollapse?: p.Flex<typeof MenubarCollapse>;
};

export interface DefaultNavBarProps {
  isCollapse?: SingleBooleanChoiceArg<"isCollapse">;
  className?: string;
}

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;

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

  const [isRootActive, triggerRootActiveProps] = useTrigger("usePressed", {});
  const [isRootFocusWithin, triggerRootFocusWithinProps] = useTrigger(
    "useFocusedWithin",
    {}
  );
  const triggers = {
    active_root: isRootActive,
    focusWithin_root: isRootFocusWithin
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantslPlKhvYjoqxXf()
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
      data-plasmic-trigger-props={[
        triggerRootActiveProps,
        triggerRootFocusWithinProps
      ]}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"alingLeft"}
          data-plasmic-override={overrides.alingLeft}
          className={classNames(projectcss.all, sty.alingLeft)}
        >
          {true ? (
            <p.PlasmicLink
              data-plasmic-name={"logo"}
              data-plasmic-override={overrides.logo}
              className={classNames(projectcss.all, projectcss.a, sty.logo, {
                [sty.logoisCollapse]: hasVariant(
                  variants,
                  "isCollapse",
                  "isCollapse"
                )
              })}
              component={Link}
              href={
                hasVariant(variants, "isCollapse", "isCollapse") ? `/` : `/`
              }
              platform={"nextjs"}
            >
              <h5
                data-plasmic-name={"h5"}
                data-plasmic-override={overrides.h5}
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5,
                  {
                    [sty.h5isCollapse]: hasVariant(
                      variants,
                      "isCollapse",
                      "isCollapse"
                    )
                  }
                )}
              >
                {"Bentuk Cinta"}
              </h5>
            </p.PlasmicLink>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"navMenu"}
              data-plasmic-override={overrides.navMenu}
              hasGap={true}
              className={classNames(projectcss.all, sty.navMenu)}
            >
              <p.PlasmicLink
                data-plasmic-name={"tentangKami"}
                data-plasmic-override={overrides.tentangKami}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.tentangKami
                )}
                component={Link}
                href={"#about" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__if0Pi,
                    {
                      [sty.textisCollapse__if0Pi24Wj]: hasVariant(
                        variants,
                        "isCollapse",
                        "isCollapse"
                      )
                    }
                  )}
                >
                  {"Tentang Kami"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                data-plasmic-name={"faq"}
                data-plasmic-override={overrides.faq}
                className={classNames(projectcss.all, projectcss.a, sty.faq)}
                component={Link}
                href={"#feature" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___12OzW
                  )}
                >
                  {"Fitur"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                data-plasmic-name={"harga"}
                data-plasmic-override={overrides.harga}
                className={classNames(projectcss.all, projectcss.a, sty.harga)}
                component={Link}
                href={"#price" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__i7ZxI
                  )}
                >
                  {"Harga"}
                </div>
              </p.PlasmicLink>
            </p.Stack>
          ) : null}
        </div>

        <div
          data-plasmic-name={"alingRigth"}
          data-plasmic-override={overrides.alingRigth}
          className={classNames(projectcss.all, sty.alingRigth)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__s7S3T,
              {
                [sty.linkisCollapse__s7S3T24Wj]: hasVariant(
                  variants,
                  "isCollapse",
                  "isCollapse"
                )
              }
            )}
            component={Link}
            href={
              hasVariant(variants, "isCollapse", "isCollapse")
                ? ("https://api.whatsapp.com/send?phone=%2b6281916567373%20&text=Hi,%20saya%20mau%20pesan%20undangan%20online." as const)
                : ("https://api.whatsapp.com/send?phone=%2b6281916567373%20&text=Hi,%20saya%20mau%20pesan%20undangan%20online." as const)
            }
            platform={"nextjs"}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <TombolCinta
                data-plasmic-name={"tombolCinta"}
                data-plasmic-override={overrides.tombolCinta}
                className={classNames("__wab_instance", sty.tombolCinta, {
                  [sty.tombolCintaisCollapse]: hasVariant(
                    variants,
                    "isCollapse",
                    "isCollapse"
                  )
                })}
                size={"small" as const}
              >
                {"Contact Us"}
              </TombolCinta>
            ) : null}
          </p.PlasmicLink>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames(
                projectcss.all,
                projectcss.button,
                sty.button
              )}
            >
              <MenuSvgrepoCom3SvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </button>
          ) : null}
        </div>
      </div>

      {(
        triggers.active_root &&
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? true
          : triggers.focusWithin_root &&
            hasVariant(globalVariants, "screen", "mobileOnly")
          ? true
          : hasVariant(variants, "isCollapse", "isCollapse")
          ? true
          : true
      ) ? (
        <MenubarCollapse
          data-plasmic-name={"menubarCollapse"}
          data-plasmic-override={overrides.menubarCollapse}
          className={classNames("__wab_instance", sty.menubarCollapse, {
            [sty.menubarCollapseisCollapse]: hasVariant(
              variants,
              "isCollapse",
              "isCollapse"
            )
          })}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___3Pcx8
            )}
            component={Link}
            href={
              triggers.active_root &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("#about" as const)
                : ("#about" as const)
            }
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ginIy
              )}
            >
              {"Tentang Kami"}
            </div>
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__uQkXw
            )}
            component={Link}
            href={
              triggers.active_root &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("#feature" as const)
                : ("#feature" as const)
            }
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uf4Vv
              )}
            >
              {"Fitur"}
            </div>
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___1ViJ
            )}
            component={Link}
            href={
              triggers.active_root &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("#price" as const)
                : ("#price" as const)
            }
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0Y31Z
              )}
            >
              {"Harga"}
            </div>
          </p.PlasmicLink>
        </MenubarCollapse>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "alingLeft",
    "logo",
    "h5",
    "navMenu",
    "tentangKami",
    "faq",
    "harga",
    "alingRigth",
    "tombolCinta",
    "button",
    "svg",
    "menubarCollapse"
  ],
  freeBox: [
    "freeBox",
    "alingLeft",
    "logo",
    "h5",
    "navMenu",
    "tentangKami",
    "faq",
    "harga",
    "alingRigth",
    "tombolCinta",
    "button",
    "svg"
  ],
  alingLeft: [
    "alingLeft",
    "logo",
    "h5",
    "navMenu",
    "tentangKami",
    "faq",
    "harga"
  ],
  logo: ["logo", "h5"],
  h5: ["h5"],
  navMenu: ["navMenu", "tentangKami", "faq", "harga"],
  tentangKami: ["tentangKami"],
  faq: ["faq"],
  harga: ["harga"],
  alingRigth: ["alingRigth", "tombolCinta", "button", "svg"],
  tombolCinta: ["tombolCinta"],
  button: ["button", "svg"],
  svg: ["svg"],
  menubarCollapse: ["menubarCollapse"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  alingLeft: "div";
  logo: "a";
  h5: "h5";
  navMenu: "div";
  tentangKami: "a";
  faq: "a";
  harga: "a";
  alingRigth: "div";
  tombolCinta: typeof TombolCinta;
  button: "button";
  svg: "svg";
  menubarCollapse: typeof MenubarCollapse;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavBar__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    alingLeft: makeNodeComponent("alingLeft"),
    logo: makeNodeComponent("logo"),
    h5: makeNodeComponent("h5"),
    navMenu: makeNodeComponent("navMenu"),
    tentangKami: makeNodeComponent("tentangKami"),
    faq: makeNodeComponent("faq"),
    harga: makeNodeComponent("harga"),
    alingRigth: makeNodeComponent("alingRigth"),
    tombolCinta: makeNodeComponent("tombolCinta"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    menubarCollapse: makeNodeComponent("menubarCollapse"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */