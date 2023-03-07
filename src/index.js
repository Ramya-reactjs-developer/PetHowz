import React from "react";
import ReactDOM from "react-dom/client";
import { LabelProvider } from "../src/Pages/JoinPetHost/petHost/labelDataContext";
import { LabelData } from "../src/Pages/PetService/LableData";
// import { LabelProvider } from "../src/Pages/JoinPetHost/petHost/labelDataContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LabelProvider>
    <LabelData>
      <App />
    </LabelData>
  </LabelProvider>
);
