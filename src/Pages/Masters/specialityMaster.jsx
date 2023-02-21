import React from 'react'
import CustomTextField from "../../components/textField/textField";

function SpecialityMaster() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);


  return (
    <>
      <CustomTextField
        label="Name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <CustomTextField
        label="Email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <CustomTextField
        label="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        type="password"
        error
      />
      <CustomTextField
        label="Confirm Password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
        fullWidth
      />
   
    </>
  );
}
export default SpecialityMaster