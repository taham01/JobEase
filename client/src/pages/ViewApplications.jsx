import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div className="p-8">
      <div className="bg-white rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User name
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Title
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resume
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={applicant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        src={applicant.imgSrc}
                        alt={applicant.name}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {applicant.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {applicant.jobTitle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {applicant.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-sm text-blue-600 hover:text-blue-900 flex items-center gap-2">
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="download"
                      className="w-4 h-4"
                    />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap relative">
                  <div className="group">
                    <button className="text-gray-400 text-xl">...</button>
                    <div className="hidden group-hover:block absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg border border-gray-100">
                      <div className="flex flex-col">
                        <button className="w-full px-4 py-2 text-sm text-blue-600 hover:bg-gray-50 text-left border-b border-gray-100">
                          Accept
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-50 text-left">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
