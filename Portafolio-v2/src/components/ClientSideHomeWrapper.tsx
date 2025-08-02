"use client";

import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";

export default function ClientSideHomeWrapper() {
  return (
    <Router>
      <Home />
    </Router>
  );
}