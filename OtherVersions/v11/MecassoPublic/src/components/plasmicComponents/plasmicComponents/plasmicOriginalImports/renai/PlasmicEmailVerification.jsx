// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7hWdoDc5Fm3y1TqrPvEG7
// Component: gr85fcna-k
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ScreenAlert from "../../../ScreenAlert"; // plasmic-import: laQG7AfxmqV/component
import { useScreenVariants as useScreenVariantsifq4PdpMk2Y } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: IFQ4PdpMK2Y/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_renai.module.css"; // plasmic-import: q7hWdoDc5Fm3y1TqrPvEG7/projectcss
import sty from "./PlasmicEmailVerification.module.css"; // plasmic-import: gr85fcna-k/css
import gmailLogo2Svg5KMxnz6BnEs from "./images/gmailLogo2Svg5.svg"; // plasmic-import: kMxnz6BnEs/picture

export const PlasmicEmailVerification__VariantProps = new Array();

export const PlasmicEmailVerification__ArgProps = new Array();

function PlasmicEmailVerification__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsifq4PdpMk2Y()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <ScreenAlert
              data-plasmic-name={"screenAlert"}
              data-plasmic-override={overrides.screenAlert}
              className={classNames("__wab_instance", sty.screenAlert)}
            />
          ) : null}

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7AqFe
            )}
          >
            {"Email Verification"}
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mfDi
                )}
              >
                {
                  "An email has been sent to you. Please confirm your email address. You can close this browser window."
                }
              </div>
            ) : null}
            {true ? (
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"107px"}
                loading={"lazy"}
                src={{
                  src: gmailLogo2Svg5KMxnz6BnEs,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />
            ) : null}
          </p.Stack>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "screenAlert", "freeBox", "img"],
  screenAlert: ["screenAlert"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEmailVerification__ArgProps,
      internalVariantPropNames: PlasmicEmailVerification__VariantProps
    });

    return PlasmicEmailVerification__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmailVerification";
  } else {
    func.displayName = `PlasmicEmailVerification.${nodeName}`;
  }
  return func;
}

export const PlasmicEmailVerification = Object.assign(
  // Top-level PlasmicEmailVerification renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    screenAlert: makeNodeComponent("screenAlert"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicEmailVerification
    internalVariantProps: PlasmicEmailVerification__VariantProps,
    internalArgProps: PlasmicEmailVerification__ArgProps
  }
);

export default PlasmicEmailVerification;
/* prettier-ignore-end */
