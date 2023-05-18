import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ServiceDetailsEntries,
  DefaultServiceDetailsValues,
} from "../../Pages/PetService/ServiceDetailsEntries";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import "./style.css";
import CustomButton from "../Button/Button";
import CustomTypography from "../Typography/Typography";
import CustomTextField from "../TextField/TextField";

const ServiceDetails = (props) => {
  const dispatch = useDispatch();
  const [resetValue, setResetValue] = React.useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    DefaultServiceDetailsValues,
  });

  const createPackage = useSelector((state) => state?.createPackage);
  console.log(createPackage, "createPackage");

  const userGet = useSelector((state) => state?.phbbasicdetails);
  console.log(userGet, "phbbasicdetails");

  const serviceMasterId =
    userGet?.phbbasicdetails?.data?.data?.service_master_id;
  const petServiceId = userGet?.phbbasicdetails?.data?.data?.pet_service_id;

  const onSubmit = (data1) => {
    console.log(data1, "checkData");
    const formData = new FormData();
    formData.append("package_name", data1.package_name);
    formData.append("included", data1.included);
    formData.append("rate", data1.rate);
    formData.append("service_master_id", serviceMasterId);
    formData.append("pet_service_id", petServiceId);

    const data = {
      data: formData,
      method: "post",
      apiName: "createPetServicePackage",
    };
    console.log(data, "createPetServicePackage");
    dispatch(actions.SERVICEDETAILS(data));
  };

  return (
    <form>
      <Grid container md={12} lg={12} xs={12} sm={12}>
        <Grid item md={5} lg={5} sm={12} xs={12}></Grid>
        <Grid item md={7} lg={7} sm={12} xs={12}>
          <h4 className="fontFamilyEdit">Become a pet Service Provider</h4>
          <h5 className="fontFamilyEdit">
            {" "}
            What are the pet Services you are providing?
          </h5>
          {ServiceDetailsEntries?.map((keyValue) => (
            <Grid item md={keyValue.breakpoint} sm={12} xs={12}>
              <Controller
                name={keyValue.name}
                rules={{
                  required: keyValue?.validation?.required,
                  pattern: keyValue.pattern,
                }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    {keyValue?.isTextInput && (
                      <Grid
                        className="textInputWidth"
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        my={2}
                        mx={2}
                      >
                        <CustomTextField
                          label={keyValue.label}
                          onHandleChange={(e) => {
                            onChange(e);
                            // textFieldChange(e, keyValue.name);
                          }}
                          value={value}
                          multiline={keyValue.multiline}
                          rows={keyValue.rows}
                          type={keyValue.type}
                          placeholder={keyValue.placeholder}
                          disabled={keyValue?.disabled}
                          uniqueText={keyValue.uniqueText}
                          requiredField={keyValue.requiredField}
                          // customClass="textBox"
                          customClass={keyValue.customClass}
                          defaultValue={keyValue.defaultValue}
                          resetValue={resetValue}
                        />
                      </Grid>
                    )}
                  </>
                )}
              />
              {errors && errors[keyValue?.name]?.type === "required" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.label} is Required`}
                    type="error"
                  />
                </Grid>
              )}
              {errors && errors[keyValue?.name]?.type === "pattern" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.label} is Invalid`}
                    type="error"
                  />
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          md={12}
          lg={12}
          sm={12}
          xs={12}
          display="inline-flex"
          justifyContent="space-around"
          pt={"60px"}
        >
          <Grid item xs={5}></Grid>
          <Grid item>
            <CustomButton
              btnTitle="Next"
              variant="contained"
              color="primary"
              btnStyles={{
                color: "#fff",
                background: "#f85a47",
                width: {
                  lg: "250px",
                  md: "200px",
                  sm: "150px",
                  xs: "200px",
                },
                fontSize: "17px",
                fontFamily: " Roboto-Regular",
              }}
              onClickHandle={handleSubmit(onSubmit)}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default ServiceDetails;
