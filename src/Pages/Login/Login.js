import { Grid } from '@mui/material';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import customImages from '../../Utils/Images';
import entries from './LoginEntries';
import './Login.css';
import CustomButton from '../../Components/Button/Button';
import CustomTypography from '../../Components/Typography/Typography';
import CustomTextField from '../../Components/TextField/TextField';
import CustomIcons from '../../Utils/Icons/Index';

const Login = () => {

      const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onBlur" });

    
  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={6} lg={6} sm={12} xs={12} className="loginImg">
        <img src={customImages.Service} alt="" />
      </Grid>
      <Grid item md={6} lg={6} sm={12} xs={12} className="LoginSec">
        <Grid className="rightAlign"> 
          <Grid item md={12} lg={12} sm={12} xs={12} className="logoImg">
            <img src={CustomIcons.Logo} alt="" />
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12} className="loginText">
            <CustomTypography type="head" text="Hello Again," customClass="" />
            <CustomTypography
              type="link"
              text="Enter your login credentials to log in to your account"
              customClass=""
            />
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12} pt={3} className="">
            {entries?.map((keyValue) => (
              <Grid item pb={2} className="inputSec">
                <Controller
                  control={control}
                  rules={{
                    required: keyValue?.validation?.isRequired,
                    pattern: keyValue?.pattern,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Grid item md={12} sm={12} className="input_width">
                      {keyValue.textField && (
                        <Grid className="loginTextBox">
                          <CustomTextField
                            value={value}
                            placeholder={keyValue.placeholder}
                            type={keyValue.type}
                            onHandleChange={onChange}
                            iconSource={keyValue.iconSource}
                            isLogin
                          />
                        </Grid>
                      )}
                    </Grid>
                  )}
                  name={keyValue.entryName}
                />
                {errors[keyValue.entryName]?.type === "required" && (
                  <Grid display="flex">
                    <CustomTypography
                      customClass="loginErrorText"
                      colorType="error"
                      text={`${keyValue.label} is required`}
                    />
                  </Grid>
                )}
                {errors[keyValue.entryName]?.type === "pattern" && (
                  <Grid display="flex">
                    <CustomTypography
                      customClass="loginErrorText"
                      colorType="error"
                      text={`${keyValue.label} is Invalid`}
                    />
                  </Grid>
                )}
              </Grid>
            ))}
          </Grid>
          <Grid className="input_width loginButton">
            <CustomButton
              btnTitle="LOGIN"
              color="primary"
              variant="contained"
              btnStyles={{ color: "white", width: "320px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;