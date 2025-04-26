import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
import { toast } from "react-toastify";
import { useAuth, useUser } from "@clerk/clerk-react";

export const AppContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const { user } = useUser()
// const { getToken } = useAuth()

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    tittle: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  const [companyToken, setCompanyToken] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  // const [userData, setUserData] = useState(null);
  // const [userApplications, setUserApplications] = useState([]);
  // Function to fetch jobs
  const fetchJobs = async () => {
    setJobs(jobsData);
  };
  useEffect(() => {
    fetchJobs();
  });
  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
    companyToken,
    setCompanyToken,
    companyData,
    setCompanyData,
    backendUrl,
    // userData,
    // setUserData,
    // userApplications,
    // setUserApplications,
    // fetchUserData,
    // fetchUserApplications,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
