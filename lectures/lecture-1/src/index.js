import React  from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

const element = document.getElementById("app");
const context = createRoot(element);

context.render(<App />);