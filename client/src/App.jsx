import React from "react";
import { Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import RecruiterLogin from "./components/RecruiterLogin";
import { useClerk } from "@clerk/clerk-react";
import { AppContext } from "./context/AppContext";
const App = () => {
  const { showRecruiterLogin } = useClerk(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/application" element={<Applications />} />
      </Routes>
    </div>
  );
};

export default App;
