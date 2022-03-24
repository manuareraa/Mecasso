// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7hWdoDc5Fm3y1TqrPvEG7
// Component: 3uzL35hsc1p
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_renai.module.css"; // plasmic-import: q7hWdoDc5Fm3y1TqrPvEG7/projectcss
import sty from "./PlasmicYoutubeStat.module.css"; // plasmic-import: 3uzL35hsc1p/css
import YoutubesvgIcon from "./icons/PlasmicIcon__Youtubesvg"; // plasmic-import: 6v5uShw8O/icon
import image11SGlvfvWa7 from "./images/image11.png"; // plasmic-import: sGlvfvWa7/picture

export const PlasmicYoutubeStat__VariantProps = new Array();

export const PlasmicYoutubeStat__ArgProps = new Array(
  "subs",
  "media",
  "views",
  "youtubethumbnail",
  "channelname",
  "channeldescription"
);

function PlasmicYoutubeStat__RenderFunc(props) {
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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__sB2Gh)}
      >
        <YoutubesvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rNy5
          )}
        >
          {"Youtube"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__htjcy)}
      >
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__onQVx)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__jmQjL)}
                  displayHeight={"90px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"90px"}
                  loading={"lazy"}
                  src={{
                    src: image11SGlvfvWa7,
                    fullWidth: 500,
                    fullHeight: 432,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.youtubethumbnail
            })}
          </div>
        ) : null}

        <div className={classNames(projectcss.all, sty.freeBox__ft7WQ)}>
          <div className={classNames(projectcss.all, sty.freeBox__vGZyp)}>
            {p.renderPlasmicSlot({
              defaultContents: "si.by.surabhi",
              value: args.channelname,
              className: classNames(sty.slotTargetChannelname)
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__w6IQ)}>
            {p.renderPlasmicSlot({
              defaultContents: "jonepaul@gmail.com",
              value: args.channeldescription,
              className: classNames(sty.slotTargetChanneldescription)
            })}
          </div>
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___6LHp)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__segi8)}>
          <div className={classNames(projectcss.all, sty.freeBox__sZtyZ)}>
            {p.renderPlasmicSlot({
              defaultContents: "24k",
              value: args.subs,
              className: classNames(sty.slotTargetSubs)
            })}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uMtEe
            )}
          >
            {"Subscribers"}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__bMy6)}>
          <div className={classNames(projectcss.all, sty.freeBox__hqCb1)}>
            {p.renderPlasmicSlot({
              defaultContents: "88",
              value: args.media,
              className: classNames(sty.slotTargetMedia)
            })}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uZ0Ia
            )}
          >
            {"Videos"}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__sw2Xd)}>
          <div className={classNames(projectcss.all, sty.freeBox__tgGfP)}>
            {p.renderPlasmicSlot({
              defaultContents: "982.6k",
              value: args.views,
              className: classNames(sty.slotTargetViews)
            })}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tkj4H
            )}
          >
            {"Views"}
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicYoutubeStat__ArgProps,
      internalVariantPropNames: PlasmicYoutubeStat__VariantProps
    });

    return PlasmicYoutubeStat__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicYoutubeStat";
  } else {
    func.displayName = `PlasmicYoutubeStat.${nodeName}`;
  }
  return func;
}

export const PlasmicYoutubeStat = Object.assign(
  // Top-level PlasmicYoutubeStat renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicYoutubeStat
    internalVariantProps: PlasmicYoutubeStat__VariantProps,
    internalArgProps: PlasmicYoutubeStat__ArgProps
  }
);

export default PlasmicYoutubeStat;
/* prettier-ignore-end */