/* eslint-disable no-unused-expressions */
import { Grid } from "@mui/material";
import customImages from "../../Utils/Images";
import CustomTypography from "../../Components/Typography/Typography";
import CustomIcons from "../../Utils/Icons/Index";
import CustomButton from "../../Components/Button/Button";
import CheckboxLabels from "../../Components/CheckBox/CheckBox";
import "./Term.css";


const Terms = (props) => {
 

  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={6} lg={6} sm={12} xs={12} className="textSec">
        <Grid className="">
          <Grid item md={12} lg={12} sm={12} xs={12} className="termsLogoImg">
            <img src={CustomIcons.Logo} alt="" />
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12} className="termsText">
            <CustomTypography
              type="head"
              text="Terms And Conditions"
              customClass=""
            />
          </Grid>
          <Grid className="paraSec">
            <CustomTypography
              type="head"
              text="Pethowz is an online marketplace which connects pet owners with pet hosts and pet service providers. The platforms enables the pet hosts and services providers to host pets and also list various pet services so that pet owners can search and book the required services. The terms and conditions of refund and cancelation of booking is this platform is regulated and formulated by Pethowz and can be changed any time and for any reason via and updated version of the cancelation policy. Pethowz Transaction Charges Pethowz deducts the service transaction charges of 5% of various pet services transaction in the platform. • Transactional fees- The transaction fees of every transaction made is not refundable under any circumstances. Dispute settlement- In case of any grievances, feud, claims and controversy between the pet owners and the services providers, Pethowz shall have final say in any dispute between them w.r.t cancellation policies, money to be refunded, termination, formation and definition of anything in the policy. • Cancellation platform- The cancellation policy obligates all the party to do booking cancellation via platform. If not, your cancellation of the booking would not be considered effective."
              customClass="termsPara"
            />
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          my={2}
          mx={2}
          sm={12}
          xs={12}
          className="checkboxRow"
        >
          {/* <CheckboxLabels
            data={checkBoxData}
            onChange={onChange}
            value={value}
            disabled={keyValue.disabled}
            labelText={label}
            // id={keyValue.id}
            forWidth={forWidth}
          /> */}
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12} className="termsButton">
          <CustomButton
            btnTitle="Submit"
            color="primary"
            variant="contained"
            btnStyles={{ color: "white", width: "400px" }}
          />
        </Grid>
      </Grid>
      <Grid item md={6} lg={6} sm={12} xs={12} className="termImg">
        <img src={customImages.Service} alt="" />
      </Grid>
    </Grid>
  );
};

export default Terms;
