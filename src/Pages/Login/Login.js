/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import customImages from "../../Utils/Images";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import CustomTextField from "../../Components/TextField/TextField";
import actions from "../../Redux/Actions/index";
import entries from "./LoginEntries";
import "./Login.css";
import CustomButton from "../../Components/Button/Button";
import CustomTypography from "../../Components/Typography/Typography";
import CustomIcons from "../../Utils/Icons/Index";
import Toast from "../../Utils/Notification/Toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  /**
   *
   * @param {*} e
   */
  const onSubmit = (dat) => {
    const data = { data: dat, method: "post", apiName: "userLogin" };
    dispatch(actions.LOGIN(data));
    setShowToast(!showToast);
  };
  const login = useSelector((state) => state?.login);
  React.useEffect(() => {
    console.log(login, "list");
  }, [login]);

  const setNav = () => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };
  useEffect(() => {
    console.log(login?.Message, "checkData");
    if (login?.data?.usertype === 0 && true) {
      setList([
        {
          id: 1,
          title: "Success",
          description: "Login Success",
          backgroundColor: "check",
          icon: "check",
        },
      ]);
      setNav();
    }
    if (login?.Success === false) {
      setList([
        {
          id: 2,
          title: "Error",
          description: "Incorrect Email or Password",
          backgroundColor: "error",
          icon: "warning",
        },
      ]);
    }
  }, [login, dispatch]);

  return (
    <Grid container sm={12} xs={12}>
      <Grid item sm={6} xs={12}>
        <Box className="loginImg"></Box>
      </Grid>
      <Grid
        item
        display={"flex"}
        // alignItems={"top"}
        justifyContent={"center"}
        sm={6}
        xs={12}
      >
        <Grid item className="LoginSec">
          <Grid item className="rightAlign">
            <Grid item className="loginLogoImg">
              <img src={CustomIcons.Logo} alt="" />
            </Grid>
            <Grid item className="loginText">
              <CustomTypography
                type="head"
                text="Hello Again,"
                customClass=""
              />
              <CustomTypography
                type="link"
                text="Enter your login credentials to log in to your account"
                customClass=""
              />
            </Grid>
            <Grid item className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                {showToast && (
                  <>
                    <Stack
                      sx={{ width: "100%", color: "grey.500" }}
                      spacing={2}
                    >
                      {list?.map((item) => (
                        <LinearProgress
                          sx={{
                            backgroundColor: item?.id === 1 ? "green" : "red",
                          }}
                        />
                      ))}
                    </Stack>
                    <Toast toastList={list} position="top-right" />
                  </>
                )}

                {entries?.map((keyValue) => (
                  <Grid item>
                    <Controller
                      control={control}
                      rules={{
                        required: keyValue?.validation?.isRequired,
                        pattern: keyValue?.pattern,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <Grid
                          item
                          md={12}
                          sm={12}
                          pt={2}
                          className="MailPasswordBox"
                        >
                          {keyValue.textField && (
                            <Grid className="loginTextBox">
                              <CustomTextField
                                value={value}
                                placeholder={keyValue.placeholder}
                                type={keyValue.type}
                                onHandleChange={onChange}
                                isLogin
                                textInputIcon
                              />
                            </Grid>
                          )}
                        </Grid>
                      )}
                      name={keyValue.entryName}
                    />
                    {errors[keyValue.entryName]?.type === "required" && (
                      <Grid item className="login_required">
                        <CustomTypography
                          customClass="login_Error_Text"
                          text={` ${keyValue.label} is required`}
                        />
                      </Grid>
                    )}
                    {errors[keyValue.entryName]?.type === "pattern" && (
                      <Grid item>
                        <CustomTypography
                          customClass="login_Error_Text"
                          text={`${keyValue.label} is Invalid`}
                        />
                      </Grid>
                    )}
                  </Grid>
                ))}
                <Grid
                  item
                  display=" inline-flex"
                  justifyContent="center"
                  pt={3.5}
                >
                  <CustomButton
                    btnTitle="LOGIN"
                    color="primary"
                    variant="contained"
                    btnStyles={{
                      width: "320px",
                      color: "white",
                      backgroundColor: "#F85A47",
                      fontFamily: "Poppins_Medium",
                    }}
                  />
                </Grid>
              </form>
              <Grid item pt={2} className="googleGrid">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://accounts.google.com/v3/signin/identifier?dsh=S-435618783%3A1679050594426781&ifkv=AWnogHdcogBclojIsc_9xbHbnlYh3M2JPMohu8n83lV0HNIxQMGXq181ythzXg6RixF_YsKjOArDSw&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                >
                  <CustomButton
                    image={CustomIcons.Google}
                    btnTitle="Sign In With Google"
                    color="primary"
                    variant="contained"
                    customClass="googleBtn"
                  />
                </Link>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  pt: "40px",
                }}
              >
                <Typography>Don't have an account yet?</Typography>
                <div
                  onClick={() => {
                    navigate("/registertopethowz");
                  }}
                >
                  <Typography
                    sx={{
                      textDecorationLine: "underline",
                      color: "#F85A47",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    Sign Up
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
