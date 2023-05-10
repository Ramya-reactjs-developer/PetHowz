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
import { useLocation } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, "statelogin");
  const loginAdmin = useSelector((state) => state?.login?.login);
  console.log(loginAdmin, "useSelector");
  const [list, setList] = useState([]);
  console.log(list, "listValue");
  const [showToast, setShowToast] = useState(false);
  console.log(loginAdmin, "list");
  const [isSignedIn, setIsSignedIn] = useState(null);
  //  const signin = () => {
  //    setIsSignedIn(true);
  //  };
  //  const signout = () => {
  //    setIsSignedIn(false);
  //  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   *
   * @param {*} e
   */

  const onSubmit = (dat) => {
    const data = { data: dat, method: "post", apiName: "userLogin" };
    dispatch(actions.LOGIN_ADMIN(data));
    setShowToast(!showToast);
  };
  // const login = useSelector((state) => state?.login);
  // React.useEffect(() => {
  //   console.log(login, "list");
  // }, [login]);
  const userId = localStorage.getItem("LoginChecker");
  const UserType = localStorage.getItem("UserType");
  console.log(UserType, "UserType");
  useEffect(() => {
    console.log(loginAdmin?.data?.data?.user_type, "loginAdmin?.data");
    if (
      loginAdmin?.data?.data?.user_id !== "" &&
      loginAdmin?.data?.data?.user_id !== undefined &&
      loginAdmin?.data?.data?.user_type !== "" &&
      loginAdmin?.data?.data?.user_type !== undefined
    ) {
      setIsSignedIn(true);
      localStorage.setItem("LoginChecker", loginAdmin?.data?.data?.user_id);
      localStorage.setItem("user_type", loginAdmin?.data?.data?.user_type);
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
    } else if (loginAdmin?.data?.Success === false) {
      setList([
        {
          id: 2,
          title: "Error",
          description: loginAdmin?.data?.Message,
          backgroundColor: "error",
          icon: "warning",
        },
      ]);
    }
  }, [loginAdmin, userId, UserType, localStorage]);

  // React.useEffect(() => {
  //   if (loginAdmin?.data?.data?.user_id) {

  //   }
  //   // if (userId !== null) {
  //   console.log(UserType, "UserType");
  //   console.log(userId, "userId");
  //   // }
  // }, [loginAdmin, userId, UserType, localStorage]);

  const setNav = () => {
    setTimeout(() => {
      if (
        state !== null &&
        state !== "/petHowz/CustomerLayout/CustomerDashBoard"
      ) {
        navigate(state);
      } else if (loginAdmin?.data?.data?.user_type === 0 || UserType === "0") {
        navigate("/petHowz/CustomerLayout/CustomerDashBoard");
      } else if (loginAdmin?.data?.data?.user_type === 1 || UserType == "1") {
        navigate("/petHowz/CustomerLayout/CustomerDashBoard");
      } else if (loginAdmin?.data?.data?.user_type === 2 || UserType == "2") {
        navigate("/petHowz/HostLayout/HostDashBoard");
      } else if (loginAdmin?.data?.data?.user_type === 3 || UserType == "3") {
        navigate("/petHowz/HostLayout/HostDashBoard");
      }
      // else if (state !== "" && UserType === "0" && UserType !== null) {
      //   navigate("/");
      // } else if (state === "" && UserType === "1" && UserType !== null) {
      //   navigate("/CustomerLayout/CustomerDashBoard");
      // } else if (state === "" && UserType === "2" && UserType !== null) {
      //   navigate("/HostLayout/HostDashBoard");
      // }

      // if (UserType === "0" && UserType !== null) {
      //   navigate("/");
      // } else if (UserType === "1" && UserType !== null) {
      //   navigate("/CustomerLayout/CustomerDashBoard");
      // } else if (UserType === "2" && UserType !== null) {
      //   navigate("/HostLayout/HostDashBoard");
      // }
    }, 1000);
  };
  const onSignup = () => {
    navigate("/petHowz/registertopethowz", {
      state:
        state !== null ? state : "/petHowz/CustomerLayout/CustomerDashBoard",
    });
  };
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
              {showToast && (
                <>
                  <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                    {list?.map((item) => (
                      <LinearProgress
                        sx={{
                          backgroundColor: item?.id === 1 ? "#5cb85c" : "red",
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
                  onClickHandle={handleSubmit(onSubmit)}
                  btnStyles={{
                    width: "320px",
                    color: "white",
                    backgroundColor: "#F85A47",
                    fontFamily: " Roboto-Regular",
                  }}
                />
              </Grid>

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
                <div>
                  <Typography
                    sx={{
                      textDecorationLine: "underline",
                      color: "#F85A47",
                      cursor: "pointer",
                    }}
                    onClick={onSignup}
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
}

export default Login;
