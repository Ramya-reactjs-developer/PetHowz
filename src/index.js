import React from "react";
import ReactDOM from "react-dom/client";
import { LabelProvider } from "../src/Pages/JoinPetHost/petHost/labelDataContext";
import { BothLabelProvider } from "./Pages/JoinPetHost/BothBoardAndService/BothlabelDataContext";

import { LabelData } from "../src/Pages/PetService/LableData";
// import { LabelProvider } from "../src/Pages/JoinPetHost/petHost/labelDataContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<LabelProvider><LabelData><BothLabelProvider><App /></BothLabelProvider></LabelData></LabelProvider>);
