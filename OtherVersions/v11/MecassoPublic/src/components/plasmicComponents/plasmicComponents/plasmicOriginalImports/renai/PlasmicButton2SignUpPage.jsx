// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7hWdoDc5Fm3y1TqrPvEG7
// Component: d6xbjF1TjG
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_renai.module.css"; // plasmic-import: q7hWdoDc5Fm3y1TqrPvEG7/projectcss
import sty from "./PlasmicButton2SignUpPage.module.css"; // plasmic-import: d6xbjF1TjG/css
import FbLogo3Icon from "./icons/PlasmicIcon__FbLogo3"; // plasmic-import: aSinGb8xGPM/icon

export const PlasmicButton2SignUpPage__VariantProps = new Array();

export const PlasmicButton2SignUpPage__ArgProps = new Array("children");

function PlasmicButton2SignUpPage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
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
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <FbLogo3Icon
            className={classNames(projectcss.all, sty.svg__zdknl)}
            role={"img"}
          />
        ),

        value: args.children
      })}
    </button>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton2SignUpPage__ArgProps,
      internalVariantPropNames: PlasmicButton2SignUpPage__VariantProps
    });

    return PlasmicButton2SignUpPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton2SignUpPage";
  } else {
    func.displayName = `PlasmicButton2SignUpPage.${nodeName}`;
  }
  return func;
}

export const PlasmicButton2SignUpPage = Object.assign(
  // Top-level PlasmicButton2SignUpPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton2SignUpPage
    internalVariantProps: PlasmicButton2SignUpPage__VariantProps,
    internalArgProps: PlasmicButton2SignUpPage__ArgProps
  }
);

export default PlasmicButton2SignUpPage;
/* prettier-ignore-end */
