import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditRole = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const [singleRole, setSingleRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const role = form.role.value;
    const permission = form.permission.value;

    const info = {
      role,
      permission,
    };

    console.log(info);

    axios.put(`/api/edit-role/${id}`, info).then((res) => {
      if (res.status === 200) {
        navigate("/system/role-management");
      }
    });
  };

  useEffect(() => {
    axios.get(`/api//get-role/${id}`).then((res) => setSingleRole(res.data));
  }, []);
  console.log(singleRole);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="lg:relative lg:flex">
            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              <div className="lg:max-w-[640px] lg:mx-auto">
                {/* Cart items */}
                <div className="mb-6 lg:mb-0">
                  <header className="mb-6">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                      Edit role ✨
                    </h1>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Role name
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter role name"
                              name="role"
                              required
                              Value={singleRole?.role}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Permission character
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              className="w-full border-none"
                              name="permission"
                            >
                              <option
                                selected={singleRole?.permission === "edit"}
                                value="edit"
                              >
                                Edit
                              </option>
                              <option
                                selected={singleRole?.permission === "create"}
                                value="create"
                              >
                                Create
                              </option>
                              <option
                                selected={singleRole?.permission === "view"}
                                value="view"
                              >
                                View
                              </option>
                              <option
                                selected={singleRole?.permission === "delete"}
                                value="delete"
                              >
                                Delete
                              </option>
                            </select>
                          </div>
                        </div>
                        {/* 2nd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Role order
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="number"
                              placeholder="0"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Status
                              <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                id="age1"
                                name="age"
                                value="30"
                              />
                              <label for="age1">读写</label>

                              <input
                                type="radio"
                                id="age2"
                                name="age"
                                value="60"
                              />
                              <label for="age2">汉字</label>
                            </div>
                          </div>
                        </div> */}
                        {/* 2nd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Menu permissions
                              <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                id="age1"
                                name="age"
                                value="30"
                              />
                              <label for="age1">Open/Fold</label>

                              <input
                                type="checkbox"
                                id="age2"
                                name="age"
                                value="60"
                              />
                              <label for="age2">Select all/ None</label>
                              <input
                                type="checkbox"
                                id="age2"
                                name="age"
                                value="60"
                              />
                              <label for="age2">Parent-child linkage</label>
                            </div>
                          </div>
                        </div> */}
                        {/* 2nd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Remarks
                              <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                              className="w-full border-none"
                              name="comment"
                              form="usrform"
                            >
                              Enter text here...
                            </textarea>
                          </div>
                        </div> */}
                      </div>
                      <div className="flex justify-end gap-6 my-5">
                        <button
                          className="bg-blue-500 text-white rounded-lg p-2"
                          type=""
                        >
                          Indeed Set
                        </button>
                        <button
                          className="border  rounded-lg p-2"
                          type="submit"
                        >
                          Take Eliminate
                        </button>
                      </div>
                    </form>
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

export default EditRole;
