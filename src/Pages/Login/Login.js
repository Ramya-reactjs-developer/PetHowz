import { Grid } from '@mui/material';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import customImages from '../../Utils/Images';
// import entries from './LoginEntries';
import './Login.css';
import CustomButton from '../../Components/Button/Button';
import CustomTypography from '../../Components/Typography/Typography';
import CustomTextField from '../../Components/TextField/TextField';
import CustomIcons from '../../Utils/Icons/Index';

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

    if (email === 'pethows@gmail.com' && password === 'pethows') {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('email', email);

      navigate("/pet-howz/home");
    } else {
      alert('Invalid credentials');
    }
  };

    
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
            {/* {entries?.map((keyValue) => (
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
            ))} */}
            <form onSubmit={handleSubmit}>
          {/* <Grid className="inputBox"> */}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* </Grid> */}
        </form>
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

// /* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable no-tabs */
// import React, { useState } from 'react';
// import { Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Logo from '../../assets/Images/Logo.png';
// import Login from '../../assets/Images/Login.jpg';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import './Login.css';

// function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   // handle login logic
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // validate the input fields
//     if (email === 'praxisadmin@gmail.com' && password === 'praxis12') {
//       // store the credentials in local storage
//       localStorage.setItem('isLoggedIn', true);
//       localStorage.setItem('email', email);

//       // redirect to the dashboard/home component
//       // window.location.href = '/praxis-webadmin/dashboard';
//       navigate('/praxis-webadmin/patientsList');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <Grid className="login-container">
//       <img className="background-img" src={Login} alt="background" />
//       <Grid className="login-box">
//         <img className="logo" src={Logo} alt="logo" />
//         <h3 className="welcomeText"> Welcome </h3>
//         <p className="contentText"> Please enter the individual access credentials provided to you.</p>
//         <form onSubmit={handleSubmit}>
//           {/* <Grid className="inputBox"> */}
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {/* </Grid> */}
//           <Grid display="flex" justifyContent="center" className="submitButton" pt={3.5}>
//             <CustomButton
//               btnTitle="LOGIN"
//               color="primary"
//               variant="contained"
//               btnStyles={{
//                 width: '350px',
//                 color: 'white',
//                 backgroundColor: '#4a0239',
//                 // boxShadow: '0px 6px 20px #EE8E5480',
//               }}
//             />
//           </Grid>
//         </form>
//       </Grid>
//     </Grid>
//   );
// }

// export default LoginScreen;