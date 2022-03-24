// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7hWdoDc5Fm3y1TqrPvEG7
// Component: nf8JE9OOJ2Z
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_renai.module.css"; // plasmic-import: q7hWdoDc5Fm3y1TqrPvEG7/projectcss
import sty from "./PlasmicFiatbuybutton.module.css"; // plasmic-import: nf8JE9OOJ2Z/css

export const PlasmicFiatbuybutton__VariantProps = new Array(
  "loading",
  "success",
  "failed"
);

export const PlasmicFiatbuybutton__ArgProps = new Array();

function PlasmicFiatbuybutton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    hasVariant(variants, "failed", "failed")
      ? true
      : hasVariant(variants, "success", "success")
      ? true
      : hasVariant(variants, "loading", "loading")
      ? true
      : true
  ) ? (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootfailed]: hasVariant(variants, "failed", "failed"),
          [sty.rootloading]: hasVariant(variants, "loading", "loading"),
          [sty.rootsuccess]: hasVariant(variants, "success", "success")
        }
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textfailed]: hasVariant(variants, "failed", "failed"),
          [sty.textsuccess]: hasVariant(variants, "success", "success")
        })}
      >
        {hasVariant(variants, "failed", "failed")
          ? "GO TO "
          : hasVariant(variants, "success", "success")
          ? "GO TO "
          : "Pay via UPI"}
      </div>
    </button>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFiatbuybutton__ArgProps,
      internalVariantPropNames: PlasmicFiatbuybutton__VariantProps
    });

    return PlasmicFiatbuybutton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFiatbuybutton";
  } else {
    func.displayName = `PlasmicFiatbuybutton.${nodeName}`;
  }
  return func;
}

export const PlasmicFiatbuybutton = Object.assign(
  // Top-level PlasmicFiatbuybutton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicFiatbuybutton
    internalVariantProps: PlasmicFiatbuybutton__VariantProps,
    internalArgProps: PlasmicFiatbuybutton__ArgProps
  }
);

export default PlasmicFiatbuybutton;
/* prettier-ignore-end */