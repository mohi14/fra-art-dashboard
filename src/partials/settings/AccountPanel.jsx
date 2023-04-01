import React, { useState } from "react";

import Image from "../../images/user-avatar-80.png";

function AccountPanel() {
  const [sync, setSync] = useState(false);

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 font-bold mb-5">
          Basic Information
        </h2>
        {/* Picture */}
        <section>
          <div className="flex items-center">
            <div className="mr-4">
              <img
                className="w-20 h-20 rounded-full"
                src={Image}
                width="80"
                height="80"
                alt="User upload"
              />
            </div>
            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
              Change
            </button>
          </div>
        </section>
        {/* Business Profile */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">
            Basic Information
          </h2>

          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                <span className="text-red-600">*</span> User Nickname
              </label>
              <input
                id="name"
                className="form-input w-full"
                type="text"
                required
              />
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                <span className="text-red-600">*</span> Phone number
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
                required
              />
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="location"
              >
                <span className="text-red-600">*</span> Email
              </label>
              <input
                id="location"
                className="form-input w-full"
                type="email"
                required
              />
            </div>
          </div>
        </section>
      </div>
      <div className="sm:w-1/3 mb-8 ml-8">
        <div className="flex items-center gap-4">
          <p className="font-bold">Gender</p>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Male</label>
          <br />
          <input type="radio" id="age2" name="age" value="60" />
          <label for="age2">Female</label>
        </div>
      </div>
      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
              Cancel
            </button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AccountPanel;
