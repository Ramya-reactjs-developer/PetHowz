// /* eslint-disable react-hooks/rules-of-hooks */
import { Box, Card, Dialog, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CustomTypography from "../../../Components/Typography/Typography";
// import "./ReqBookingStyle.css";
import { BoardingSpaceDetailList } from "../../../Components/BoardingSpaceDetailsList/BoardingSPaceDetailsList";
import CustomForm from "../../../Components/CustomForm/CustomForm";
import { CardContent } from "@material-ui/core";
import {
  DefaultRequestServiceBookingValues,
  RequestServiceBookingEntries,
  specificRequestEntries,
  RequestTaxiServiceBookingEntries
} from "./RequestServiceBookingEntries";
import { RequestPlace } from "./RequestServiceBookingEntries";
import { Controller, useForm } from "react-hook-form";
import actions from "../../../Redux/Actions";
import CustomTextField from "../../../Components/TextField/TextField";
import CustomRadioButton from "../../../Components/RadioButton/RadioButton";
import CustomSelect from "../../../Components/Select/Select";
import CustomCheckbox from "../../../Components/CheckBox/CheckBox";
import CustomButton from "../../../Components/Button/Button";
import BookingSubmitModal from "../BookingSubmitModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { adminUrl } from "../../../Redux/Constants";
import axios from "axios";
import CustomTimePicker from "../../../Components/TimePicker/TimePicker";
import CustomDatePicker from "../../../Components/DatePicker/DatePicker";
import "./RequestServiceBooking.css";
export const RequestServiceBooking = () => {
  const defaultValues = DefaultRequestServiceBookingValues;
  const [entry, setEntry] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [Modal, setModal] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState("1");
  const [resetValue, setResetValue] = React.useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });
  const userGet = useSelector((state) => state?.registertopethowz);
  const Booking = useSelector((state) => state?.PetSpaceBooking);
  console.log(
    Booking?.PetSpaceBooking?.data?.space_booking_details_id,
    "Booking"
  );
  const login = localStorage.getItem("LoginChecker");
  const modalOpen = () => {
    setModal(true);
  };
  const onMoadalClose = () => {
    setModal(false);
  };

  const AddYourPet = useSelector((state) => state?.PetSpaceBooking);
  console.log(AddYourPet, "AddYourPetbvfbg");
  const Dispatched = useDispatch();
  const addDrpdownData = (json) => {
    const tmpArr = [];
    console.log(tmpArr, "tmpArr");
    AddYourPet?.getPetSpaceBooking?.data?.map((item) => {
      tmpArr.push({
        id: item.pet_details_id,
        value: item.pet_name,
      });
    });
    return json.map((i) => {
      if (i.name === "pet_details") {
        return {
          ...i,
          DropdownData: tmpArr,
        };
      }
      return i;
    });
  };

  const Dispatch = useDispatch();
  useEffect(() => {
    // const user_id = userGet?.registertopethowz?.data?.user_id;
    const user_id = localStorage.getItem("LoginChecker");
    console.log(userGet, "eswarUser");
    const dropdownData = {
      data: { user_id: user_id },
      method: "get",
      apiName: `getPetDetailsByUserId/${user_id}`,
    };
    Dispatch(actions.GET_PET_SPACE_BOOKING(dropdownData));
    // console.log(dropdownData, "dropdownData");
  }, []);

  // const customHnadleSelect = (event, name) => {
  //   // console.log(event, name, "eventName");
  //   const id =
  //     userGet?.data?.find(
  //       (item) => item.pet_type === event.target.value
  //     )?.user_id || 0;
  //   if (id) {
  //     const dropdownData1 = {
  //       data: {},
  //       method: "get",
  //       apiName: `getPetDetailsByUserId/${id}`,
  //     };
  //     Dispatch(actions.GET_PET_SPACE_BOOKING(dropdownData1));
  //   }
  // };

  const dispatch = useDispatch();
  console.log(userGet, "userGetbbbb");
  const { registertopethowz } = useSelector(
    (state) => state?.registertopethowz
  );
  console.log(registertopethowz, "registertopethowz");

  const pet_details_id = useSelector(
    (state) => state?.AddYourPet?.AddYourPets?.data?.pet_details_id
  );
  const user_id = localStorage.getItem("LoginChecker");
  const petId = localStorage.getItem("pet_details_id");
  const petSpaceId = localStorage.getItem("pet_space_id");
  React.useEffect(() => {
    if (pet_details_id?.AddYourPet?.AddYourPets?.data?.pet_details_id) {
      localStorage.setItem(
        "pet_details_id",
        pet_details_id?.AddYourPet?.AddYourPets?.data?.pet_details_id
      );
    }
  }, [localStorage]);

  function onSubmit(data1) {
    // const user_id = userGet?.registertopethowz?.data?.user_id;

    console.log(pet_details_id, "pet_details_id");
    const data = {
      data: {
        ...data1,
        user_id: user_id,
        pet_space_id: petSpaceId,
        pet_details_id: petId,
        customer_id: user_id,
      },
      method: "post",
      apiName: "createPetSpaceBooking",
    };
    console.log(data, "jack");
    dispatch(actions.PET_SPACE_BOOKING(data));
    setResetValue(defaultValues);
    // navigate("/BookingSubmitModal");
    modalOpen();
    reset({
      booking_from_date: "",
      booking_from_time: "",
      booking_to_date: "",
      booking_to_time: "",
      specific_request: "",
    });
    setTimeout(() => {
      if (Booking?.PetSpaceBooking?.data?.space_booking_details_id) {
        localStorage.setItem(
          "user_type",
          Booking?.PetSpaceBooking?.data?.user_type
        );
        modalOpen();
      }
    }, 500);
  }

  const ListData = [
    {
      area: "1200 Sq.ft",
      size: "3 Bedrooms",
      type: "Villa",
      prefer: "Small Pets",
      capacity: "8-10 pets",
      petsAccepted: "Cats & Dogs",
      location: "Anna Nagar, Chennai",
      canProvide: "Oral Medication",
    },
  ];
  const navigate = useNavigate();
  function onAssPet() {
    navigate("/AddYourPetLogin");
  }

  const onChangeRadioAction = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Grid container item xs={12} className="BG">
      <Grid item p={"30px"} height={{ lg: "100vh" }} sm={6} xs={12}>
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Aadhi Pet Care"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold" }}
          />
        </Box>

        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Boarding Space Details"
            type="heading3"
            colorType={"text"}
          />
        </Box>
        <Box sx={{ pt: "20px" }}>
          <BoardingSpaceDetailList Data={ListData} />
        </Box>
      </Grid>
      <Grid item textAlign={"center"} sm={6} xs={12}>
        <Grid item>
          <Card sx={{ mt: "60px" }}>
            <CardContent>
              {/* <CustomForm
                // AllEntries={RequestBookingEntries}
                AllEntries={addDrpdownData(RequestServiceBookingEntries)}
                defaultValues={DefaultRequestServiceBookingValues}
                onAddClickHandle={onAssPet}
                // handleSelect={customHnadleSelect}
                // onSelectValue={selectChange}
                // onClickHandle={modalOpen}
                onReceiveData={onReceiveData}
              /> */}
              <Grid container md={12} lg={12}>
                {RequestTaxiServiceBookingEntries?.map((keyValue) => (
                  <Grid item md={keyValue.breakpoint} sm={6} xs={12}>
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
                              my={1.5}
                              p={1}

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
                          {keyValue?.isDropdown && (
                            <Grid item md={12} my={2} p={1.5} sm={12} xs={12}>
                              <CustomSelect
                                label={keyValue?.label}
                                labelText={keyValue.labelText}
                                handleChange={onChange}
                                value={value}
                                data={keyValue.DropdownData}
                                requiredField={keyValue.requiredField}
                                // placeholder={keyValue.placeholder}
                              />
                            </Grid>
                          )}
                          {keyValue?.isCustomTypography && (
                            <Grid item md={12} sm={12} xs={12}>
                              <CustomTypography
                                type="header"
                                text={keyValue.text}
                                customClass={keyValue.customClass}
                                colorType={keyValue.colorType}
                              />
                              <CustomTypography
                                type="title"
                                colorType={keyValue.colorType1}
                                text={keyValue.text2}
                                customClass={keyValue.customClass1}
                              />
                            </Grid>
                          )}
                          {keyValue?.isRadioAction && (
                            <Grid
                              item
                              textAlign={"left"}
                              md={12}
                              sm={12}
                              xs={12}
                              my={2}
                              mx={2}
                              p={1.5}
                            >
                              <CustomTypography
                                type="header"
                                text={keyValue.text}
                                customClass={keyValue.customClass}
                                colorType={keyValue.colorType}
                              />
                              <CustomRadioButton
                                labelText={keyValue.label}
                                onChange={(e) => {
                                  onChange(e);
                                  onChangeRadioAction(e, keyValue.name);
                                }}
                                value={value}
                                data={keyValue.radioButtonData}
                                requiredField={keyValue.requiredField}
                                defaultValue
                                customClass={keyValue.customClass}
                              />
                            </Grid>
                          )}

                          {keyValue?.isCheckBoxAction && (
                            <Grid
                              item
                              md={12}
                              my={2}
                              mx={2}
                              sm={12}
                              xs={12}
                              className="checkboxRow"
                            >
                              <CustomCheckbox
                                data={keyValue?.checkBoxData}
                                onChange={onChange}
                                value={value}
                                disabled={keyValue.disabled}
                                labelText={keyValue.label}
                                requiredField={keyValue.requiredField}
                                id={keyValue.id}
                                forWidth={keyValue.forWidth}
                              />
                            </Grid>
                          )}
                          {keyValue?.isAddButton && (
                            <Grid item md={12} sm={12} xs={12} mx={2} p={1}>
                              <CustomButton
                                btnTitle={keyValue.buttonTitle}
                                variant="contained"
                                color="primary"
                                customClass={keyValue.customClass}
                                btnStyles={{
                                  color: "#fff",
                                  // background: "#F8BD22",
                                  marginTop: "45px",
                                }}
                                onClickHandle={onAssPet}
                              />
                            </Grid>
                          )}
                          {keyValue?.isBirthdayPicker && (
                            <Grid
                              item
                              md={12}
                              my={1.5}
                              p={1}
                              // mx={1}
                              sm={12}
                              xs={12}
                              className="dateEditChange"
                            >
                              <CustomDatePicker
                                labelText={keyValue.label}
                                onHandleChange={onChange}
                                value={keyValue.value}
                                dateStyle="dateIconEdit"
                                date={value}
                                requiredField={keyValue.requiredField}
                                placeholder={keyValue.placeholder}
                                defaultValue={keyValue.defaultValue}
                                resetValue={resetValue}
                                maxDate={keyValue.maxDate}
                              />
                            </Grid>
                          )}
                          {keyValue?.isDateTimePicker && (
                            <Grid
                              item
                              md={12}
                              lg={12}
                              my={2}
                              p={1}
                              // mx={5}
                              sm={12}
                              xs={12}
                              className="RequestTimeEditChange"
                            >
                              <CustomTimePicker
                                labelText={keyValue.label}
                                onHandleChange={onChange}
                                value={keyValue.value}
                                timeStyle={keyValue.timeStyle}
                                time={value}
                                requiredField={keyValue.requiredField}
                                customClass="RequesttimeIconThis"
                                // maxTime="03/02/2023"
                                // minTime="03/11/2022"
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
                {paymentMethod === "My Place" &&
                  RequestPlace?.map((keyValue) => (
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
                            {keyValue?.isCheckBoxAction && (
                              <Grid
                                item
                                md={12}
                                my={2}
                                mx={2}
                                sm={12}
                                xs={12}
                                className="checkboxRow"
                              >
                                <CustomCheckbox
                                  data={keyValue?.checkBoxData}
                                  onChange={onChange}
                                  value={value}
                                  disabled={keyValue.disabled}
                                  labelText={keyValue.label}
                                  requiredField={keyValue.requiredField}
                                  id={keyValue.id}
                                  forWidth={keyValue.forWidth}
                                />
                              </Grid>
                            )}
                          </>
                        )}
                      />
                      {errors &&
                        errors[keyValue?.name]?.type === "required" && (
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

                {specificRequestEntries?.map((keyValue) => (
                  <Grid item md={keyValue.breakpoint} sm={6} xs={12}>
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
                              className="RequestTextInputWidth"
                              item
                              md={12}
                              sm={12}
                              xs={12}
                              // my={2}
                              // mx={2}
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
                justifyContent="center"
                pt={"60px"}
              >
                {/* <Grid item xs={5}></Grid> */}
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
              {Modal ? (
                <BookingSubmitModal open={open} onModalClose={onMoadalClose} />
              ) : (
                ""
              )}
              {/* <CustomButton
                btnTitle="Booking Request Submitting"
                color={"primary"}
                onClickHandle={modalOpen}
              /> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
