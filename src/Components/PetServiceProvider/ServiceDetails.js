import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { LabelContext } from "../../Pages/PetService/LableData";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  ServiceDetailsEntries,
  DefaultServiceDetailsValues,
} from "../../Pages/PetService/ServiceDetailsEntries";
import CustomForm from "../CustomForm/CustomForm";
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
  const value = useContext(LabelContext);
  console.log(value, "senderValue");

  const weight = value.labelInfo?.weight;

  const createPackage = useSelector((state) => state?.createPackage);
  console.log(createPackage, "createPackage");

  const btnDisabled =
    weight.package_name?.length > 0 &&
    weight.included?.length > 0 &&
    weight.rate?.length > 0;
  // console.log(btnDisabled, "btnDisbaled");

    const onSubmit = (data1) => {
      console.log(data1, "checkdata");
      const formData = new FormData();
      formData.append("package_name", data1.package_name);
      formData.append("included", data1.included);
      formData.append("rate", data1.rate);
      formData.append("service_master_id", 1);
      formData.append("pet_service_id", 1);
      const data = {
        data: formData,
        method: "post",
        apiName: "createPetServicePackage",
      };
      console.log(data1, "checkdata");

      dispatch(actions.CREATEPACKAGE(data));
    };

  return (
    <form>
      <h4>Become a pet Service Provider</h4>
      <h5> What are the pet Services you are providing?</h5>

      <Grid>
        {/* <CustomForm
          AllEntries={ServiceDetailsEntries}
          textFieldChange={value.handleChange}
          onChangeRadioAction={value.handleOnChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultServiceDetailsValues}
        /> */}
        {ServiceDetailsEntries?.map((keyValue) => (
          <Grid item md={keyValue.breakpoint} sm={12} xs={12}>
            <Controller
              name={keyValue.name}
              rules={{
                required: keyValue?.validation?.required,
                pattern: keyValue.pattern,
                // validate: (value) => value === password,
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
              fontFamily: "Poppins_Medium",
            }}
            onClickHandle={handleSubmit(onSubmit)}
          />
        </Grid>
      </Grid>
      {/* <Grid className="btn_align_edit">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="text primary button group"
          style={{ marginTop: 15 }}
        >
          <Button
            disabled={!btnDisabled}
            onClick={() => value.nextPage()}
            // style={{ margin: 25 }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Grid> */}
    </form>
  );
};
export default ServiceDetails;
