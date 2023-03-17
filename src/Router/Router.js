import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../Layouts/Index";
import { HomePage } from "../Pages/Home/Index";
import Login from "../Pages/Login/Login";
import { AllServices } from "../Pages/AllServices/Index";
import { Grooming } from "../Pages/Grooming/Grooming";
import GroomingService from "../Pages/GroomingService/GroomingService";
import { BecomePetHostService } from "../Pages/JoinPetHost/BecomePetHostService";
import PetCare from "../Pages/PetCare/PetCare";
import PetSpace from "../Pages/JoinPetHost/petHost/PetHomeBoarding";
import PetService from "../Pages/PetService/PetService";
import { RegisterToPethowz } from "../Pages/CustomerRegistration/RegisterToPetHowz";
import { AddAddress } from "../Pages/CustomerRegistration/AddAddress";
import { RequestBooking } from "../Pages/RequestBooking/RequestBooking";
import { CustomerLayout } from "../Layouts/CustomerLayout";
import { CustomerDashBoard } from "../Pages/CustomerDashBoard/Index";
import { MyProfileCustomerDB } from "../Pages/CustomerDashBoard/MyProfile/MyProfileCustomerDB";
import { MyPetsCustomerDB } from "../Pages/CustomerDashBoard/MyPets/MyPetsCustomerDB";
import { MyBookingsCustomerDB } from "../Pages/CustomerDashBoard/MyBookings/MyBookingsCustomerDb";
import { MyEnquiriesCustomerDB } from "../Pages/CustomerDashBoard/MyEnquiries/MyEnquiries";
import { HostLayout } from "../Layouts/HostLayout";
import { HostDashBoard } from "../Pages/HostDashBoard/Index";
import { MyProfileHostDB } from "../Pages/HostDashBoard/MyProfile/MyProfileHostDB";
import { MyBookingsHostDB } from "../Pages/HostDashBoard/MyBookings/MyBookingsHostDB";
import { MyBoardingSpaceHostDB } from "../Pages/HostDashBoard/MyBoardingSpace/MyBoardingSpaceHostDB";
import { MyServicesHostDB } from "../Pages/HostDashBoard/MyServices/MyServicesHostDB";
import { BookingRequestsHostDB } from "../Pages/HostDashBoard/MyBookingRequest/BookingRequestsHostDb";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" index element={<HomePage />} />
      <Route path="Login" element={<Login />} />
      <Route path="AllServices" element={<AllServices />} />
      <Route path="Grooming" element={<Grooming />} />
      <Route path="GroomingService" element={<GroomingService />} />
      <Route path="BecomePetHostService" element={<BecomePetHostService />} />
      <Route path="PetCare" element={<PetCare />} />
      <Route path="PetSpace" element={<PetSpace />} />
      <Route path="PetService" element={<PetService />} />

      {/* Register to PetHowz */}
      <Route path="RegisterToPethowz" element={<RegisterToPethowz />} />
      <Route path="AddAddress" element={<AddAddress />} />

      {/* Request Booking */}
      <Route path="RequestBooking" element={<RequestBooking />} />

      {/* CustomerDashBoard */}
      <Route path="CustomerLayout" element={<CustomerLayout />}>
        <Route path="CustomerDashBoard" element={<CustomerDashBoard />} />
        <Route path="MyProfileCustomerDB" element={<MyProfileCustomerDB />} />
        <Route path="MyPetsCustomerDB" element={<MyPetsCustomerDB />} />
        <Route path="MyBookingsCustomerDB" element={<MyBookingsCustomerDB />} />
        <Route
          path="MyEnquiriesCustomerDB"
          element={<MyEnquiriesCustomerDB />}
        />
      </Route>

      {/* HostDashBoard */}
      <Route path="HostLayout" element={<HostLayout />}>
        <Route path="HostDashBoard" element={<HostDashBoard />} />
        <Route path="MyProfileHostDB" element={<MyProfileHostDB />} />
        <Route path="MyBookingsHostDB" index element={<MyBookingsHostDB />} />
        <Route
          path="MyBoardingSpaceHostDB"
          index
          element={<MyBoardingSpaceHostDB />}
        />
        <Route path="MyServicesHostDB" index element={<MyServicesHostDB />} />
        <Route
          path="BookingRequestsHostDB"
          index
          element={<BookingRequestsHostDB />}
        />
      </Route>
    </Route>
  )
);
