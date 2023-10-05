import React from "react";
import ReactDOMClient from "react-dom/client";
import { ConnectPage } from "./screens/ConnectPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ConnectPage />);
