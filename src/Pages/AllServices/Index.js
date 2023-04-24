import React from "react";
import customImages from "../../Utils/Images";
import { Box, Grid } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions/index";
import CustomTypography from "../../Components/Typography/Typography";
import ImageCards from "../../Components/Cards/ImageCards";

export const AllServices = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ourService } = useSelector((state) => state?.ourService);
  console.log(ourService, "galleryImage");

  React.useEffect(() => {
    const data = {
      data: {
        limit: -1,
      },
      method: "post",
      apiName: "getAllServiceMaster",
    };
    dispatch(actions.OURSERVICE(data));
  }, [dispatch]);

  const [tmpIdArr, setTmpIdsArr] = React.useState();

  React.useEffect(() => {
    const tmpArr = [];
    const tmpIdsArr = [];
    console.log(tmpIdsArr, "tmpIdsArr");
    ourService?.data?.map((value, index) => {
      tmpIdsArr?.push(value.service_master_id);
      console.log();
      tmpArr?.push({
        sno: index,
      });
    });
    setTmpIdsArr(tmpIdsArr);
  }, [ourService]);

  const onHandleClick = (key, index) => {
    navigate("/petHowz/grooming", {
      state: tmpIdArr[key],
      // state: id_pass,
      // id_pass,
    });
  };

  const AllSevices = [
    {
      image: customImages.s1,
      service: "Pet Grooming",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
    {
      image: customImages.s2,
      service: "Pet Relocation",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s3,
      service: "Pet Walking",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s4,
      service: "Pet Sitting",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
    {
      image: customImages.s5,
      service: "Pet Taxi",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
    {
      image: customImages.s6,
      service: "Pet Breeding",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s7,
      service: "Pet Training",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s8,
      service: "Pet Photography",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
  ];

  return (
    <Grid
      container
      // sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      item
      xs={12}
      pt={"20px"}
    >
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="Pet Services Near You"
          type="heading3"
          colorType="text"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",

          justifyContent: { sm: "flex-start", xs: "center" },
          flexWrap: "wrap",
          gap: "30px",
          p: "20px",
        }}
      >
        {ourService?.data?.map((item, index) => {
          return (
            <Box>
              <ImageCards
                ImagePath={item.image}
                CardWidth={{
                  xl: "375",
                  lg: "325px",
                  md: "300px",
                  sm: "280px",
                  xs: "325px",
                }}
                CardHeight={"300px"}
                ImageWidth={{
                  xl: "375",
                  lg: "325px",
                  md: "300px",
                  sm: "280px",
                  xs: "325px",
                }}
                ImageHeight={"300px"}
                service={item.service_name}
                sub={item.sub}
                onHandleClick={() =>
                  onHandleClick(index, item?.service_master_id)
                }
              />
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};
