// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7hWdoDc5Fm3y1TqrPvEG7
// Component: bXzPLl1BCFu
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_renai.module.css"; // plasmic-import: q7hWdoDc5Fm3y1TqrPvEG7/projectcss
import sty from "./PlasmicNavbutton.module.css"; // plasmic-import: bXzPLl1BCFu/css
import leaderboardLogopngWuMaN8Y from "./images/leaderboardLogopng.png"; // plasmic-import: Wu_maN8-y/picture

export const PlasmicNavbutton__VariantProps = new Array("selected");

export const PlasmicNavbutton__ArgProps = new Array("children", "slot");

function PlasmicNavbutton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
        { [sty.rootselected]: hasVariant(variants, "selected", "selected") }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__kYv4)}
            displayHeight={"47px"}
            displayMaxHeight={"47px"}
            displayMaxWidth={"47px"}
            displayMinHeight={"47px"}
            displayMinWidth={"0"}
            displayWidth={"47px"}
            loading={"lazy"}
            src={{
              src: leaderboardLogopngWuMaN8Y,
              fullWidth: 96,
              fullHeight: 96,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.children
      })}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Leaderboard",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbutton__ArgProps,
      internalVariantPropNames: PlasmicNavbutton__VariantProps
    });

    return PlasmicNavbutton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbutton";
  } else {
    func.displayName = `PlasmicNavbutton.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbutton = Object.assign(
  // Top-level PlasmicNavbutton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicNavbutton
    internalVariantProps: PlasmicNavbutton__VariantProps,
    internalArgProps: PlasmicNavbutton__ArgProps
  }
);

export default PlasmicNavbutton;
/* prettier-ignore-end */
