import Job from "../models/Job.js";
//if visibile is false we will not get the data at the api

// Get All Jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ visible: true }).populate({
      path: "companyId",
      select: "-password",
    });
    res.json({ success: true, jobs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get Single Job Using JobID
export const getJobById = async (req, res) => {
  console.log(req.params.id);
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate({
      path: "companyId",
      select: "-password",
    });
    if (!job) {
      return res.json({
        success: false,
        message: "Job not found",
      });
    }
    res.json({
      success: true,
      job,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
