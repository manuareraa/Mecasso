// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7hWdoDc5Fm3y1TqrPvEG7
// Component: HuYkf3chA9X
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TopNavBar from "../../../TopNavBar"; // plasmic-import: 2FmHKYp2yyp/component
import ScreenAlert from "../../../ScreenAlert"; // plasmic-import: laQG7AfxmqV/component
import Socialfeedcard from "../../../Socialfeedcard"; // plasmic-import: EitcxuTfiwr/component
import Navbartwo from "../../../Navbartwo"; // plasmic-import: jF1x-X1nWSN/component
import { useScreenVariants as useScreenVariantsifq4PdpMk2Y } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: IFQ4PdpMK2Y/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_renai.module.css"; // plasmic-import: q7hWdoDc5Fm3y1TqrPvEG7/projectcss
import sty from "./PlasmicSocialFeed.module.css"; // plasmic-import: HuYkf3chA9X/css
import arrow233Png1Ht3Ij9Y from "./images/arrow233Png.png"; // plasmic-import: 1-HT3Ij9y/picture
import maleUser480Pxpng2EH7EoyOk2 from "./images/maleUser480Pxpng2.png"; // plasmic-import: eH7eoyOK2/picture
import image21RNLgHhObX from "./images/image21.png"; // plasmic-import: rNLgHhObX/picture
import image220Bc7WcLqX from "./images/image22.png"; // plasmic-import: 0BC7WCLqX/picture
import image23O3ZcEucCt from "./images/image23.png"; // plasmic-import: O3zcEucCt/picture

export const PlasmicSocialFeed__VariantProps = new Array(
  "profileoverlay",
  "authoverlay"
);

export const PlasmicSocialFeed__ArgProps = new Array(
  "overlaycreatorname",
  "overlaycategory",
  "overlaycreatortype",
  "errormessage",
  "socialfeedslot",
  "overlayuserprofilepic",
  "uploadbuttonslot"
);

function PlasmicSocialFeed__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsifq4PdpMk2Y()
  });

  return (
    <React.Fragment>
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
            sty.root,
            {
              [sty.rootauthoverlay]: hasVariant(
                variants,
                "authoverlay",
                "authoverlay"
              ),

              [sty.rootprofileoverlay]: hasVariant(
                variants,
                "profileoverlay",
                "profileoverlay"
              )
            }
          )}
        >
          <TopNavBar
            data-plasmic-name={"topNavBar"}
            data-plasmic-override={overrides.topNavBar}
            className={classNames("__wab_instance", sty.topNavBar)}
          />

          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <ScreenAlert
              className={classNames("__wab_instance", sty.screenAlert__rc5He)}
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : false) ? (
            <div className={classNames(projectcss.all, sty.freeBox__du64L)}>
              {p.renderPlasmicSlot({
                defaultContents: "Please verify your email ID",
                value: args.errormessage,
                className: classNames(sty.slotTargetErrormessage)
              })}
            </div>
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <div className={classNames(projectcss.all, sty.freeBox__aw982)}>
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__sO56W)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bZbu
                    )}
                  >
                    {"Social Feed"}
                  </div>
                </p.Stack>
              ) : null}
            </div>
          ) : null}
          {(
            hasVariant(variants, "authoverlay", "authoverlay")
              ? true
              : hasVariant(variants, "profileoverlay", "profileoverlay")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__jzAQh, {
                [sty.freeBoxauthoverlay__jzAQhr30Gz]: hasVariant(
                  variants,
                  "authoverlay",
                  "authoverlay"
                ),

                [sty.freeBoxprofileoverlay__jzAQhcLu24]: hasVariant(
                  variants,
                  "profileoverlay",
                  "profileoverlay"
                )
              })}
            >
              {(
                hasVariant(variants, "authoverlay", "authoverlay")
                  ? true
                  : hasVariant(variants, "profileoverlay", "profileoverlay")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox___7VXfp, {
                    [sty.freeBoxauthoverlay___7VXfPr30Gz]: hasVariant(
                      variants,
                      "authoverlay",
                      "authoverlay"
                    ),

                    [sty.freeBoxprofileoverlay___7VXfPcLu24]: hasVariant(
                      variants,
                      "profileoverlay",
                      "profileoverlay"
                    )
                  })}
                >
                  {(
                    hasVariant(variants, "authoverlay", "authoverlay")
                      ? true
                      : hasVariant(variants, "profileoverlay", "profileoverlay")
                      ? true
                      : true
                  ) ? (
                    <button
                      data-plasmic-name={"backbutton"}
                      data-plasmic-override={overrides.backbutton}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        sty.backbutton,
                        {
                          [sty.backbuttonauthoverlay]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.backbuttonprofileoverlay]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        }
                      )}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__vyPEl, {
                          [sty.imgauthoverlay__vyPElr30Gz]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.imgprofileoverlay__vyPElcLu24]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        })}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"37px"}
                        loading={"lazy"}
                        src={{
                          src: arrow233Png1Ht3Ij9Y,
                          fullWidth: 640,
                          fullHeight: 640,
                          aspectRatio: undefined
                        }}
                      />
                    </button>
                  ) : null}
                </div>
              ) : null}
              {(
                hasVariant(variants, "authoverlay", "authoverlay")
                  ? true
                  : hasVariant(variants, "profileoverlay", "profileoverlay")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__eOh0J, {
                    [sty.freeBoxauthoverlay__eOh0Jr30Gz]: hasVariant(
                      variants,
                      "authoverlay",
                      "authoverlay"
                    ),

                    [sty.freeBoxprofileoverlay__eOh0JcLu24]: hasVariant(
                      variants,
                      "profileoverlay",
                      "profileoverlay"
                    )
                  })}
                >
                  {(
                    hasVariant(variants, "profileoverlay", "profileoverlay")
                      ? false
                      : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lY0O8,
                        {
                          [sty.textauthoverlay__lY0O8R30Gz]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.textprofileoverlay__lY0O8CLu24]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        }
                      )}
                    >
                      {hasVariant(variants, "authoverlay", "authoverlay")
                        ? "Renai"
                        : "Manu Areraa"}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "authoverlay", "authoverlay")
                      ? false
                      : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__vYnF, {
                        [sty.freeBoxauthoverlay__vYnFr30Gz]: hasVariant(
                          variants,
                          "authoverlay",
                          "authoverlay"
                        ),

                        [sty.freeBoxprofileoverlay__vYnFcLu24]: hasVariant(
                          variants,
                          "profileoverlay",
                          "profileoverlay"
                        )
                      })}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents: "Manu Areraa",
                        value: args.overlaycreatorname,
                        className: classNames(
                          sty.slotTargetOverlaycreatorname,
                          {
                            [sty.slotTargetOverlaycreatornameauthoverlay]:
                              hasVariant(
                                variants,
                                "authoverlay",
                                "authoverlay"
                              ),

                            [sty.slotTargetOverlaycreatornameprofileoverlay]:
                              hasVariant(
                                variants,
                                "profileoverlay",
                                "profileoverlay"
                              )
                          }
                        )
                      })}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "authoverlay", "authoverlay")
                      ? false
                      : hasVariant(variants, "profileoverlay", "profileoverlay")
                      ? true
                      : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox__fk6CI,
                        {
                          [sty.freeBoxauthoverlay__fk6CIr30Gz]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.freeBoxprofileoverlay__fk6CIcLu24]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        }
                      )}
                    >
                      {(
                        hasVariant(variants, "authoverlay", "authoverlay")
                          ? false
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__tKyzB,
                            {
                              [sty.freeBoxauthoverlay__tKyzBr30Gz]: hasVariant(
                                variants,
                                "authoverlay",
                                "authoverlay"
                              ),

                              [sty.freeBoxprofileoverlay__tKyzBcLu24]:
                                hasVariant(
                                  variants,
                                  "profileoverlay",
                                  "profileoverlay"
                                )
                            }
                          )}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: "Cooking",
                            value: args.overlaycategory,
                            className: classNames(
                              sty.slotTargetOverlaycategory,
                              {
                                [sty.slotTargetOverlaycategoryauthoverlay]:
                                  hasVariant(
                                    variants,
                                    "authoverlay",
                                    "authoverlay"
                                  ),

                                [sty.slotTargetOverlaycategoryprofileoverlay]:
                                  hasVariant(
                                    variants,
                                    "profileoverlay",
                                    "profileoverlay"
                                  )
                              }
                            )
                          })}
                        </div>
                      ) : null}
                      {(
                        hasVariant(variants, "authoverlay", "authoverlay")
                          ? false
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__d5LmV,
                            {
                              [sty.textauthoverlay__d5LmVr30Gz]: hasVariant(
                                variants,
                                "authoverlay",
                                "authoverlay"
                              ),

                              [sty.textprofileoverlay__d5LmVcLu24]: hasVariant(
                                variants,
                                "profileoverlay",
                                "profileoverlay"
                              )
                            }
                          )}
                        >
                          {" | "}
                        </div>
                      ) : null}
                      {(
                        hasVariant(variants, "authoverlay", "authoverlay")
                          ? false
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__gaGgI,
                            {
                              [sty.freeBoxauthoverlay__gaGgIr30Gz]: hasVariant(
                                variants,
                                "authoverlay",
                                "authoverlay"
                              ),

                              [sty.freeBoxprofileoverlay__gaGgIcLu24]:
                                hasVariant(
                                  variants,
                                  "profileoverlay",
                                  "profileoverlay"
                                )
                            }
                          )}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: "Influencer",
                            value: args.overlaycreatortype,
                            className: classNames(
                              sty.slotTargetOverlaycreatortype,
                              {
                                [sty.slotTargetOverlaycreatortypeauthoverlay]:
                                  hasVariant(
                                    variants,
                                    "authoverlay",
                                    "authoverlay"
                                  ),

                                [sty.slotTargetOverlaycreatortypeprofileoverlay]:
                                  hasVariant(
                                    variants,
                                    "profileoverlay",
                                    "profileoverlay"
                                  )
                              }
                            )
                          })}
                        </div>
                      ) : null}
                      {(
                        hasVariant(variants, "profileoverlay", "profileoverlay")
                          ? true
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__aniJz,
                            {
                              [sty.textprofileoverlay__aniJzcLu24]: hasVariant(
                                variants,
                                "profileoverlay",
                                "profileoverlay"
                              )
                            }
                          )}
                        >
                          {"|  Young Stars"}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div
                className={classNames(projectcss.all, sty.freeBox__lpE5A, {
                  [sty.freeBoxprofileoverlay__lpE5AcLu24]: hasVariant(
                    variants,
                    "profileoverlay",
                    "profileoverlay"
                  )
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__hjRKl)}
                      displayHeight={"290px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"290px"}
                      loading={"lazy"}
                      src={{
                        src: maleUser480Pxpng2EH7EoyOk2,
                        fullWidth: 480,
                        fullHeight: 480,
                        aspectRatio: undefined
                      }}
                    />
                  ),

                  value: args.overlayuserprofilepic
                })}
              </div>

              {(
                hasVariant(variants, "authoverlay", "authoverlay")
                  ? true
                  : hasVariant(variants, "profileoverlay", "profileoverlay")
                  ? true
                  : true
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0RB4C, {
                    [sty.freeBoxauthoverlay___0RB4Cr30Gz]: hasVariant(
                      variants,
                      "authoverlay",
                      "authoverlay"
                    ),

                    [sty.freeBoxprofileoverlay___0RB4CcLu24]: hasVariant(
                      variants,
                      "profileoverlay",
                      "profileoverlay"
                    )
                  })}
                >
                  {(
                    hasVariant(variants, "profileoverlay", "profileoverlay")
                      ? false
                      : true
                  ) ? (
                    <p.Stack
                      as={"button"}
                      data-plasmic-name={"loginbutton"}
                      data-plasmic-override={overrides.loginbutton}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        sty.loginbutton,
                        {
                          [sty.loginbuttonauthoverlay]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.loginbuttonprofileoverlay]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        }
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qZjd0,
                          {
                            [sty.textauthoverlay__qZjd0R30Gz]: hasVariant(
                              variants,
                              "authoverlay",
                              "authoverlay"
                            ),

                            [sty.textprofileoverlay__qZjd0CLu24]: hasVariant(
                              variants,
                              "profileoverlay",
                              "profileoverlay"
                            )
                          }
                        )}
                      >
                        {hasVariant(variants, "authoverlay", "authoverlay")
                          ? "Login"
                          : "Update Profile"}
                      </div>
                    </p.Stack>
                  ) : null}
                  {(
                    hasVariant(variants, "profileoverlay", "profileoverlay")
                      ? false
                      : true
                  ) ? (
                    <p.Stack
                      as={"button"}
                      data-plasmic-name={"signupbutton"}
                      data-plasmic-override={overrides.signupbutton}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        sty.signupbutton,
                        {
                          [sty.signupbuttonauthoverlay]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.signupbuttonprofileoverlay]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        }
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__baGoI,
                          {
                            [sty.textauthoverlay__baGoIr30Gz]: hasVariant(
                              variants,
                              "authoverlay",
                              "authoverlay"
                            ),

                            [sty.textprofileoverlay__baGoIcLu24]: hasVariant(
                              variants,
                              "profileoverlay",
                              "profileoverlay"
                            )
                          }
                        )}
                      >
                        {hasVariant(variants, "authoverlay", "authoverlay")
                          ? "SignUp"
                          : "Update Profile"}
                      </div>
                    </p.Stack>
                  ) : null}
                  {(
                    hasVariant(variants, "authoverlay", "authoverlay")
                      ? true
                      : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox__aD9CF,
                        {
                          [sty.freeBoxauthoverlay__aD9CFr30Gz]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.freeBoxprofileoverlay__aD9CFcLu24]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        }
                      )}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents: (
                          <p.Stack
                            as={"button"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              projectcss.button,
                              sty.button__rv0Pa
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__w8Mq
                              )}
                            >
                              {"Upload Profile Photo"}
                            </div>
                          </p.Stack>
                        ),

                        value: args.uploadbuttonslot
                      })}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "authoverlay", "authoverlay")
                      ? false
                      : true
                  ) ? (
                    <p.Stack
                      as={"button"}
                      data-plasmic-name={"logoutbutton"}
                      data-plasmic-override={overrides.logoutbutton}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        sty.logoutbutton,
                        {
                          [sty.logoutbuttonauthoverlay]: hasVariant(
                            variants,
                            "authoverlay",
                            "authoverlay"
                          ),

                          [sty.logoutbuttonprofileoverlay]: hasVariant(
                            variants,
                            "profileoverlay",
                            "profileoverlay"
                          )
                        }
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__nIua5,
                          {
                            [sty.textauthoverlay__nIua5R30Gz]: hasVariant(
                              variants,
                              "authoverlay",
                              "authoverlay"
                            ),

                            [sty.textprofileoverlay__nIua5CLu24]: hasVariant(
                              variants,
                              "profileoverlay",
                              "profileoverlay"
                            )
                          }
                        )}
                      >
                        {"Logout"}
                      </div>
                    </p.Stack>
                  ) : null}
                </p.Stack>
              ) : null}
            </div>
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__m9Yh0)}
            >
              {true ? (
                <Socialfeedcard
                  className={classNames(
                    "__wab_instance",
                    sty.socialfeedcard__bRaFk
                  )}
                  postpicture={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__obpis)}
                      displayHeight={"100%"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: image21RNLgHhObX,
                        fullWidth: 500,
                        fullHeight: 750,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  posttitle={"First post for the followers of Renai Community "}
                />
              ) : null}
              {true ? (
                <Socialfeedcard
                  className={classNames(
                    "__wab_instance",
                    sty.socialfeedcard__gbqBa
                  )}
                  postpicture={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___6Hc3E)}
                      displayHeight={"100%"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: image220Bc7WcLqX,
                        fullWidth: 500,
                        fullHeight: 375,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  posttitle={
                    "Second Post for the followers of Renai Community "
                  }
                />
              ) : null}
              {true ? (
                <Socialfeedcard
                  className={classNames(
                    "__wab_instance",
                    sty.socialfeedcard__nhOgy
                  )}
                  postpicture={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__miPh)}
                      displayHeight={"100%"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: image23O3ZcEucCt,
                        fullWidth: 500,
                        fullHeight: 750,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  posttitle={"Third Post for the followers of Renai Community "}
                />
              ) : null}
              {true
                ? p.renderPlasmicSlot({
                    defaultContents: null,
                    value: args.socialfeedslot
                  })
                : null}
            </p.Stack>
          ) : null}
          {(
            hasVariant(variants, "authoverlay", "authoverlay")
              ? true
              : hasVariant(variants, "profileoverlay", "profileoverlay")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <Navbartwo
              data-plasmic-name={"navbartwo"}
              data-plasmic-override={overrides.navbartwo}
              className={classNames("__wab_instance", sty.navbartwo, {
                [sty.navbartwoauthoverlay]: hasVariant(
                  variants,
                  "authoverlay",
                  "authoverlay"
                ),

                [sty.navbartwoprofileoverlay]: hasVariant(
                  variants,
                  "profileoverlay",
                  "profileoverlay"
                )
              })}
            />
          ) : null}
          {true ? (
            <ScreenAlert
              className={classNames("__wab_instance", sty.screenAlert__dtgMg)}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "topNavBar",
    "backbutton",
    "loginbutton",
    "signupbutton",
    "logoutbutton",
    "navbartwo"
  ],

  topNavBar: ["topNavBar"],
  backbutton: ["backbutton"],
  loginbutton: ["loginbutton"],
  signupbutton: ["signupbutton"],
  logoutbutton: ["logoutbutton"],
  navbartwo: ["navbartwo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSocialFeed__ArgProps,
      internalVariantPropNames: PlasmicSocialFeed__VariantProps
    });

    return PlasmicSocialFeed__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSocialFeed";
  } else {
    func.displayName = `PlasmicSocialFeed.${nodeName}`;
  }
  return func;
}

export const PlasmicSocialFeed = Object.assign(
  // Top-level PlasmicSocialFeed renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    topNavBar: makeNodeComponent("topNavBar"),
    backbutton: makeNodeComponent("backbutton"),
    loginbutton: makeNodeComponent("loginbutton"),
    signupbutton: makeNodeComponent("signupbutton"),
    logoutbutton: makeNodeComponent("logoutbutton"),
    navbartwo: makeNodeComponent("navbartwo"),
    // Metadata about props expected for PlasmicSocialFeed
    internalVariantProps: PlasmicSocialFeed__VariantProps,
    internalArgProps: PlasmicSocialFeed__ArgProps
  }
);

export default PlasmicSocialFeed;
/* prettier-ignore-end */
