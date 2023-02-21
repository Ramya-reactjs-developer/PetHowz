import React from "react";
import { Table } from "../../Components/Table/Table";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import CardsSection from "../../Components/Cards/Cards";
import ImageCards from "../../Components/Cards/ImageCards";
import PetHomeCard from "../../Components/Cards/PetHomeCard";
import ServicePackagesCards from "../../Components/Cards/ServicePackagesCard";
import StarRating from "../../Components/StarRatings/StarRatings";
import MealCard from "../../Components/Cards/MealCard";

function HomePage() {
  return (
    <div>
      <Table />
      <br></br>
      <ImageUploader />
      <br></br>
      <CardsSection />
      <br></br>
      <ImageCards />
      <br></br>
      <PetHomeCard />
      <br></br>
      <ServicePackagesCards />
      <br></br>
      <StarRating />
      <br></br> <br></br>
      <MealCard />
    </div>
  );
}

export default HomePage;
