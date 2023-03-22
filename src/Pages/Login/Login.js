import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import customImages from "../../Utils/Images";
// import entries from './LoginEntries';
import "./Login.css";
import CustomButton from "../../Components/Button/Button";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTextField from "../../Components/TextField/TextField";
import CustomIcons from "../../Utils/Icons/Index";

const Login = () => {

// const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ mode: "onBlur" });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // handle login logic
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "pethows@gmail.com" && password === "pethows") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("email", email);

      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={6} lg={6} sm={12} xs={12} className="loginImg">
        <img src={customImages.Service} alt="" />
      </Grid>
      <Grid item md={6} lg={6} sm={12} xs={12} className="LoginSec">
        <Grid className="rightAlign">
          <Grid item md={12} lg={12} sm={12} xs={12} className="loginLogoImg">
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
          <Grid item md={12} lg={12} sm={12} xs={12} className="">
            <form onSubmit={handleSubmit}>
              <Grid className="inputBox">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid className="input_width loginButton">
                <CustomButton
                  btnTitle="LOGIN"
                  color="primary"
                  variant="contained"
                  btnStyles={{ color: "white", width: "320px" }}
                />
              </Grid>
            </form>
            <Grid pt={2} className="googleGrid">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/https://accounts.google.com/v3/signin/identifier?dsh=S-435618783%3A1679050594426781&ifkv=AWnogHdcogBclojIsc_9xbHbnlYh3M2JPMohu8n83lV0HNIxQMGXq181ythzXg6RixF_YsKjOArDSw&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              >
                <CustomButton
                  image={CustomIcons.Google}
                  btnTitle="Sign In With Google"
                  color="primary"
                  variant="contained"
                  // btnStyles={{ color: "white", width: "320px" }}
                  customClass="googleBtn"
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
