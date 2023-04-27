// /* eslint-disable react-hooks/rules-of-hooks */
import { Box, Card, Dialog, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CustomTypography from "../../Components/Typography/Typography";
import "./ReqBookingStyle.css";
import { BoardingSpaceDetailList } from "../../Components/BoardingSpaceDetailsList/BoardingSPaceDetailsList";
import CustomForm from "../../Components/CustomForm/CustomForm";
import { CardContent } from "@material-ui/core";
import {
  DefaultRequestBookingValues,
  RequestBookingEntries,
} from "./RequestBookingEntries";
import CustomButton from "../../Components/Button/Button";
import BookingSubmitModal from "./BookingSubmitModal";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { adminUrl } from "../../Redux/Constants";
import axios from "axios";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
const RequestBooking = () => {
  const defaultValues = {};
  const [entry, setEntry] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [Modal, setModal] = React.useState(false);
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
  const dispatch = useDispatch();
  const user_type = localStorage.getItem("user_type");
  console.log(Modal, "Modalm");
  const loginAdmin = useSelector((state) => state?.login?.login);
  const login = localStorage.getItem("LoginChecker");

  const modalOpen = () => {
    setModal(true);
  };

  const onMoadalClose = () => {
    setModal(false);
    if (user_type === "0" || loginAdmin?.data?.data?.user_type == 0) {
      navigate("/petHowz/CustomerLayout/CustomerDashBoard");
    } else if (user_type === "1" || loginAdmin?.data?.data?.user_type === 1) {
      navigate("/petHowz/CustomerLayout/CustomerDashBoard");
    } else if (user_type === "2" || loginAdmin?.data?.data?.user_type === 2) {
      navigate("/petHowz/HostLayout/HostDashBoard");
    } else if (user_type === "3" || loginAdmin?.data?.data?.user_type === 3) {
      navigate("/petHowz/HostLayout/HostDashBoard");
    }
  };

  const AddYourPet = useSelector((state) => state?.PetSpaceBooking);
  console.log(AddYourPet, "AddYourPetbvfbg");
  // const dispatch = useDispatch();
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
      if (i.name === "pet_details_id") {
        return {
          ...i,
          DropdownData: tmpArr,
        };
      }
      return i;
    });
  };

  const { petCare } = useSelector((state) => state?.petCareService);
  console.log(petCare, "ServiceData");

  const { state } = useLocation();
  useEffect(() => {
    //     const PetSpaceid = petCare;
    // console.log(PetSpaceid,"PetSpaceid");
    const PetSpaceid = localStorage.getItem("pet_space_id");
    const data = {
      data: { id: PetSpaceid },
      method: "get",
      apiName: `getPetBoardingById/${PetSpaceid}`,
    };
    dispatch(actions.GET_PET_BOARDING_SPACE_BOOKING(data));
  }, [dispatch, state]);

  useEffect(() => {
    // const user_id = userGet?.registertopethowz?.data?.user_id;
    const user_id = localStorage.getItem("LoginChecker");
    console.log(userGet, "eswarUser");
    const dropdownData = {
      data: { user_id: user_id },
      method: "get",
      apiName: `getPetDetailsByUserId/${user_id}`,
    };
    dispatch(actions.GET_PET_SPACE_BOOKING(dropdownData));
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

  console.log(userGet, "userGetbbbb");
  const { registertopethowz } = useSelector(
    (state) => state?.registertopethowz
  );
  console.log(registertopethowz, "registertopethowz");

  const pet_details_id = useSelector(
    (state) => state?.AddYourPet?.AddYourPets?.data?.pet_details_id
  );
  const user_id = localStorage.getItem("LoginChecker");
  // const petId = localStorage.getItem("pet_details_id");
  const petSpaceId = localStorage.getItem("pet_space_id");
  // React.useEffect(() => {
  //   if (pet_details_id?.AddYourPet?.AddYourPets?.data?.pet_details_id) {
  //     localStorage.setItem(
  //       "pet_details_id",
  //       pet_details_id?.AddYourPet?.AddYourPets?.data?.pet_details_id
  //     );
  //   }
  // }, [localStorage]);

  function onReceiveData(data1) {
    // const user_id = userGet?.registertopethowz?.data?.user_id;

    console.log(pet_details_id, "pet_details_id");
    const data = {
      data: {
        ...data1,
        user_id: user_id,
        pet_space_id: petSpaceId,
        // pet_details_id: petId,
        customer_id: user_id,
      },
      method: "post",
      apiName: "createPetSpaceBooking",
    };
    console.log(data, "jack");
    dispatch(actions.PET_SPACE_BOOKING(data));
    // navigate("/BookingSubmitModal");
    // modalOpen();
    reset({
      booking_from_date: "",
      booking_from_time: "",
      booking_to_date: "",
      booking_to_time: "",
      specific_request: "",
      pet_details_id: "",
    });
    // setInterval(() => {
    //   if (Booking?.PetSpaceBooking?.data?.space_booking_details_id) {
    //     alert("kkk");
    //     modalOpen();
    //     alert("5");

    //     localStorage.setItem(
    //       "user_type",
    //       Booking?.PetSpaceBooking?.data?.user_type
    //     );
    //     if (Modal === true) {
    //       const data = {
    //         data: {},
    //         method: "post",
    //         apiName: "",
    //       };
    //       dispatch(actions.PET_SPACE_BOOKING(data));
    //     }
    //   }
    // }, 500);
    // setTimeout(() => {
    //   if (Booking?.PetSpaceBooking?.data?.space_booking_details_id) {
    //     alert("kkk");
    //     modalOpen();

    //     localStorage.setItem(
    //       "user_type",
    //       Booking?.PetSpaceBooking?.data?.user_type
    //     );
    //     const data = {
    //       data: {},
    //       method: "post",
    //       apiName: "",
    //     };
    //     dispatch(actions.PET_SPACE_BOOKING(data));
    //   } else {
    //     alert("failed");
    //   }
    // }, 50000);
  }
  React.useEffect(() => {
    if (Booking?.PetSpaceBooking?.data?.space_booking_details_id) {
      localStorage.setItem(
        "user_type",
        Booking?.PetSpaceBooking?.data?.user_type
      );
      modalOpen();

      if (Modal === true) {
        const data = {
          data: {},
          method: "get",
          apiName: "",
        };
        dispatch(actions.PET_SPACE_BOOKING(data));
      }
    }

    // setTimeout(() => {
    //   if (Booking?.PetSpaceBooking?.data?.space_booking_details_id) {
    //     alert("kkk");
    //     modalOpen();

    //     localStorage.setItem(
    //       "user_type",
    //       Booking?.PetSpaceBooking?.data?.user_type
    //     );
    //     if (Modal === true) {
    //       const data = {
    //         data: {},
    //         method: "post",
    //         apiName: "",
    //       };
    //       dispatch(actions.PET_SPACE_BOOKING(data));
    //     }
    //   } else {
    //     alert("failed");
    //   }
    // }, 50000);
  }, [Booking, Modal]);
  // React.useEffect(() => {
  //   if (Booking?.PetSpaceBooking?.data?.space_booking_details_id) {
  //     modalOpen();
  //     localStorage.setItem(
  //       "user_type",
  //       Booking?.PetSpaceBooking?.data?.user_type
  //     );
  //     modalOpen();
  //   }
  // }, []);

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
    navigate("/petHowz/AddYourPetLogin", { state: "/petHowz/RequestBooking" });
  }
  return (
    <Grid container item xs={12} className="BG">
      <ScrollToTop />
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
              <CustomForm
                // AllEntries={RequestBookingEntries}
                AllEntries={addDrpdownData(RequestBookingEntries)}
                defaultValues={DefaultRequestBookingValues}
                onAddClickHandle={onAssPet}
                // handleSelect={customHnadleSelect}
                // onSelectValue={selectChange}
                // onClickHandle={modalOpen}
                onReceiveData={onReceiveData}
              />
              {Modal ? (
                <BookingSubmitModal
                  onModalClose={onMoadalClose}
                  open={modalOpen}
                />
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
export default RequestBooking;
