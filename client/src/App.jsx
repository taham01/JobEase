import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import RecruiterLogin from "./components/RecruiterLogin";
import { useClerk } from "@clerk/clerk-react";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";
import AddJob from "./pages/AddJob";
import "quill/dist/quill.snow.css";

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-job" element={<ManageJobs />} />
          <Route path="view-application" element={<ViewApplications />} />
          <Route
            path="view-application/:jobId"
            element={<ViewApplications />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
