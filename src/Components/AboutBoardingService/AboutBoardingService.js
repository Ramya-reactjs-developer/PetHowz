import { Grid } from "@mui/material";
import React from "react";
import CustomButton from "../Button/Button";
import CustomTypography from "../Typography/Typography";
import "./AboutBoardingService.css";
import CustomIcons from "../../Utils/Icons/Index";

const AboutBoardingService = (props) => {
  const {
    onRequest,
    image,
    firstName,
    Name,
    professional,
    year,
    content,
    requestBtnStyles,
    btnTitle,
    BtnText,
    Heading,
    Area,
    Size,
    Type,
    Prefer,
    Capacity,
    petsAccepted,
    location,
    Provide,
  } = props;

  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={2} lg={2} sm={6} xs={6} className="aboutServiceImage">
        <img src={image} alt="" />
      </Grid>
      <Grid container item md={10} lg={10} sm={12} xs={12} pl={2}>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <CustomTypography
            type="head"
            text={Heading}
            customClass="aboutServiceHeaderName"
          />
        </Grid>
        <Grid item md={3} lg={3} sm={6} xs={6} >
          <CustomTypography
            type="link"
            text={firstName}
            customClass="aboutServiceName"
          />
          <CustomTypography
            type="link"
            text="&nbsp;"
            customClass="aboutServiceName"
          />
          <CustomTypography
            type="link"
            text={Name}
            customClass="aboutServiceName"
          />
        </Grid>
        <Grid item md={3} lg={3} sm={6} xs={6}  display="flex">
          <Grid item className="Profession-img">
            <img src={CustomIcons.Profession} alt="" />
          </Grid>
          <Grid pl={1.5}>
            <CustomTypography
              type="head"
              text={professional}
              customClass="aboutServiceProfessional"
            />
          </Grid>
        </Grid>
        <Grid item md={2} lg={2} sm={6} xs={6}  display="flex">
          <Grid item className="year-img">
            <img src={CustomIcons.year} alt="" />
          </Grid>
          <Grid pl={1.5}>
            <CustomTypography
              type="link"
              text={year}
              customClass="aboutServiceYear"
            />
            <CustomTypography
              type="link"
              text="&nbsp;Years"
              customClass="aboutServiceYear"
            />
          </Grid>
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <CustomTypography
            type="head1"
            text={content}
            customClass="aboutServiceContent"
          />
        </Grid>
        <Grid item md={12} sm={12} lg={12} xs={12} pt={2}>
          <Grid pb={2}>
            <CustomTypography
              type="head"
              text="Boarding Space Details"
              customClass="aboutServiceName"
            />
          </Grid>
          <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
            <Grid item lg={2} sm={6} xs={6} className="aboutSpace-Details">
              <Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text="Area"
                    customClass="aboutHeader"
                  />
                </Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text={Area}
                    customClass="aboutSubHeader"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} sm={6} xs={6}>
              <Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text="Size"
                    customClass="aboutHeader"
                  />
                </Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text={Size}
                    customClass="aboutSubHeader"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} sm={6} xs={6}>
              <Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text="Type"
                    customClass="aboutHeader"
                  />
                </Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text={Type}
                    customClass="aboutSubHeader"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} sm={6} xs={6}>
              <Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text="Prefer"
                    customClass="aboutHeader"
                  />
                </Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text={Prefer}
                    customClass="aboutSubHeader"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} sm={6} xs={6}>
              <Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text="Capacity"
                    customClass="aboutHeader"
                  />
                </Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text={Capacity}
                    customClass="aboutSubHeader"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} sm={6} xs={6}>
              <Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text="Pets Accepted"
                    customClass="aboutHeader"
                  />
                </Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text={petsAccepted}
                    customClass="aboutSubHeader"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} sm={6} xs={6}>
              <Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text="Location"
                    customClass="aboutHeader"
                  />
                </Grid>
                <Grid>
                  <CustomTypography
                    type="head"
                    text={location}
                    customClass="aboutSubHeader"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} sm={6} xs={6} pt={2}>
            <Grid>
              <Grid>
                <CustomTypography
                  type="head"
                  text="Can Provide"
                  customClass="aboutHeader"
                />
              </Grid>
              <Grid>
                <CustomTypography
                  type="head"
                  text={Provide}
                  customClass="aboutSubHeader"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item md={12} lg={12} sm={12} xs={12} className="serviceBtn">
        <CustomButton
          onClickHandle={onRequest}
          btnTitle={btnTitle}
          color="primary"
          customClass={requestBtnStyles}
        />
        <CustomTypography
          type="head"
          text={BtnText}
          customClass="btnBottomText"
        />
      </Grid> */}
    </Grid>
  );
};

export default AboutBoardingService;
