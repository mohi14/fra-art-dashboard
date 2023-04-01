import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SettingsSidebar from "../../partials/settings/SettingsSidebar";
import AccountPanel from "../../partials/settings/AccountPanel";

const ChangePassword = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Change Password ✨
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <SettingsSidebar />
                <div>
                  <div className="grow">
                    {/* Panel body */}
                    <div className="p-6 space-y-6">
                      {/* Business Profile */}
                      <section>
                        <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                          <div className="sm:w-1/3">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="name"
                            >
                              <span className="text-red-600">*</span> Old
                              Password
                            </label>
                            <input
                              id="name"
                              className="form-input w-full"
                              type="password"
                              required
                            />
                          </div>
                          <div className="sm:w-1/3">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="business-id"
                            >
                              <span className="text-red-600">*</span> New
                              Password
                            </label>
                            <input
                              id="business-id"
                              className="form-input w-full"
                              type="password"
                              required
                            />
                          </div>
                          <div className="sm:w-1/3">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="location"
                            >
                              <span className="text-red-600">*</span> confirm
                              Password
                            </label>
                            <input
                              id="location"
                              className="form-input w-full"
                              type="password"
                              required
                            />
                          </div>
                        </div>
                      </section>
                    </div>
                    {/* Panel footer */}
                    <footer>
                      <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                        <div className="flex self-end">
                          <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                            Close
                          </button>
                          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
                            Preservation
                          </button>
                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChangePassword;
