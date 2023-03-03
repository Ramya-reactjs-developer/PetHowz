import { Grid } from '@mui/material';
import React from 'react';
import CustomButton from '../Button/Button';
import CustomTypography from '../Typography/Typography';
import './Service.css';

const Service = (props) => {

    const {
      image,
      Name,
      professional,
      year,
      content,
      requestBtnStyles,
      btnTitle,
      BtnText,
    } = props;

    return (
      <Grid container md={12} lg={12} sm={12} xs={12}>
        <Grid item md={2} lg={2} sm={6} xs={6} className="serviceImage">
          <img src={image} alt="" />
        </Grid>
        <Grid container item md={10} lg={10} sm={12} xs={12} pl={2}>
          <Grid item md={2} lg={2} sm={6} xs={6}>
            <CustomTypography
              type="head"
              text={Name}
              customClass="serviceName"
            />
          </Grid>
          <Grid item md={3} lg={3} sm={6} xs={6}>
            <CustomTypography
              type="head"
              text={professional}
              customClass="serviceProfessional"
            />
          </Grid>
          <Grid item md={2} lg={2} sm={6} xs={6}>
            <CustomTypography
              type="head"
              text={year}
              customClass="serviceYear"
            />
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12} pt={2}>
            <CustomTypography
              type="head1"
              text={content}
              customClass="serviceContent"
            />
          </Grid>
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12} className="serviceBtn">
          <CustomButton
            btnTitle={btnTitle}
            color="primary"
            customClass={requestBtnStyles}
          />
            <CustomTypography type='head' text={BtnText} customClass="btnBottomText" />
        </Grid>
      </Grid>
    );
};

export default Service;