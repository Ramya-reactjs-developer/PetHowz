import React from "react";
import ReactDOM from "react-dom/client";
import { LabelProvider } from "../src/Pages/JoinPetHost/petHost/labelDataContext";
import { BothLabelProvider } from "./Pages/JoinPetHost/BothBoardAndService/BothlabelDataContext";

import { LabelData } from "../src/Pages/PetService/LableData";
// import { LabelProvider } from "../src/Pages/JoinPetHost/petHost/labelDataContext";
import App from "./App";
import { PetHomeBoardingProvider } from "./Pages/JoinPetHost/PetHomeBoarding/PetHomeBoardingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LabelProvider>
    <LabelData>
      <BothLabelProvider>
        <PetHomeBoardingProvider>
          <App />
        </PetHomeBoardingProvider>
      </BothLabelProvider>
    </LabelData>
  </LabelProvider>
);
