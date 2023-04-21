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
import PetService from "../Pages/PetService/PetService";
import { RegisterToPethowz } from "../Pages/CustomerRegistration/RegisterToPetHowz";
import { AddAddress } from "../Pages/CustomerRegistration/AddAddress";
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
import PetHomeBoardingAndService from "../Pages/JoinPetHost/BothBoardAndService/BothBoardAndService";
import BothBoardAndService from "../Pages/JoinPetHost/BothBoardAndService/BothBoardAndService";
import AddAnotherPet from "../Pages/CustomerDashBoard/MyPets/AddAnotherPet";
import Terms from "../Pages/Term/Term";
import AddYourPetLogin from "../Pages/AddYourPet/AddYourPet";
import { RequestBooking } from "../Pages/RequestBooking/RequestBooking";
import { BoardingResult } from "../Pages/Result/BoardingResult";
import { ServiceResult } from "../Pages/Result/ServiceResult";
import { AllPetBoarding } from "../Components/AllpetBoarding/AllPetBoarding";
import { ServiceIndividualResult } from "../Pages/Result/ServiceIndividualResult";
import PetHomeBoarding from "../Pages/JoinPetHost/PetHomeBoarding/PetHomeBoarding";
import { PetBoardingRegistration } from "../Pages/JoinPetHost/PetBoardingRegistration/PetBoardingRegistration";
import ProtectedLayout from "./ProtectedLayout";
import { RequestServiceBooking } from "../Pages/RequestBooking/RequestServiceBooking/RequestServiceBooking";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="Login" element={<Login />} />
      <Route path="AllServices" element={<AllServices />} />
      <Route path="Grooming" element={<Grooming />} />
      <Route path="GroomingService" element={<GroomingService />} />
      <Route path="BoardingResult" element={<BoardingResult />} />
      <Route path="ServiceResult" element={<ServiceResult />} />
      <Route
        path="ServiceIndividualResult"
        element={<ServiceIndividualResult />}
      />

      <Route path="BecomePetHostService" element={<BecomePetHostService />} />
      <Route path="PetCare" element={<PetCare />} />
      <Route path="PetHomeBoarding" element={<PetHomeBoarding />} />
      <Route path="BothBoardAndService" element={<BothBoardAndService />} />
      <Route path="Terms" element={<Terms />} />
      <Route path="AddAnotherPet" element={<AddAnotherPet />} />
      <Route path="AddYourPetLogin" element={<AddYourPetLogin />} />
      <Route path="AllPetBoarding" element={<AllPetBoarding />} />
      {/* <Route path="BookingSubmitModal" element={<BookingSubmitModal />} /> */}

      <Route
        path="PetHomeBoardingAndService"
        element={<PetHomeBoardingAndService />}
      />
      <Route path="PetHomeBoarding" element={<PetHomeBoarding />} />
      <Route path="/PetService" element={<PetService />} />
      <Route path="BothBoardAndService" element={<BothBoardAndService />} />
      <Route path="Terms" element={<Terms />} />
      <Route path="AddAnotherPet" element={<AddAnotherPet />} />
      <Route path="AddYourPetLogin" element={<AddYourPetLogin />} />
      <Route
        path="PetHomeBoardingAndService"
        element={<PetHomeBoardingAndService />}
      />
      <Route
        path="PetBoardingRegistration"
        element={<PetBoardingRegistration />}
      />
      <Route path="PetService" element={<PetService />} />
      {/* Register to PetHowz */}
      <Route path="RegisterToPethowz" element={<RegisterToPethowz />} />
      <Route path="AddAddress" element={<AddAddress />} />
      <Route path="RequestBooking" element={<RequestBooking />} />
      <Route path="RequestServiceBooking" element={<RequestServiceBooking />} />

      {/* customer layout */}
      <Route path="CustomerLayout" element={<CustomerLayout />}>
        <Route path="CustomerDashBoard" element={<CustomerDashBoard />} />
        <Route path="MyProfileCustomerDB" element={<MyProfileCustomerDB />} />
        <Route path="MyPetsCustomerDB" element={<MyPetsCustomerDB />} />
        <Route path="MyBookingsCustomerDB" element={<MyBookingsCustomerDB />} />
        <Route
          path="link"
          element={
            "https://accounts.google.com/v3/signin/identifier?dsh=S-435618783%3A1679050594426781&ifkv=AWnogHdcogBclojIsc_9xbHbnlYh3M2JPMohu8n83lV0HNIxQMGXq181ythzXg6RixF_YsKjOArDSw&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
          }
        />
        <Route
          path="MyEnquiriesCustomerDB"
          element={<MyEnquiriesCustomerDB />}
        />
      </Route>

      {/* Host layout */}
      <Route path="HostLayout" element={<HostLayout />}>
        <Route path="HostDashBoard" element={<HostDashBoard />} />
        <Route path="MyProfileHostDB" element={<MyProfileHostDB />} />
        <Route path="MyBookingsHostDB" index element={<MyBookingsHostDB />} />
        <Route path="MyBookingsHostDB" index element={<MyBookingsHostDB />} />

        <Route
          path="MyBoardingSpaceHostDB"
          element={<MyBoardingSpaceHostDB />}
        />
        <Route path="MyServicesHostDB" index element={<MyServicesHostDB />} />
        <Route
          path="BookingRequestsHostDB"
          element={<BookingRequestsHostDB />}
        />
      </Route>
    </Route>
  )
);
