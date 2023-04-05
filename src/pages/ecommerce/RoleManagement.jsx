import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "../../utils/axios";

const formateData = (date) => {
  const convertedDate = new Date(date);
  return convertedDate.toDateString();
};

const RoleManagement = () => {
  const [comments, setComments] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [roles, setRoles] = useState();

  const [allAdmins, setAllAdmins] = useState("");

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const getRole = () => {
    axios.get("/api/get-role").then((res) => setRoles(res.data));
  };

  const handleChange = (event) => {
    if (window.confirm("Are you sure?")) {
      const data = JSON.parse(event.target.value);

      console.log(data);
      const info = {
        email: data?.email,
      };
      axios.put(`/api/assign-user/${data?.id}`, info).then((res) => {
        if (res.status === 200) {
          getRole();
        }
      });
    } else {
      event.target.value = 0;
    }

    console.log(event.target.value);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you really want to delete?")) {
      axios.delete(`/api/role/delete/${id}`).then((res) => {
        if (res.status === 200) {
          getRole();
        }
      });
    }
  };

  useEffect(() => {
    getRole();

    axios.get("/admin-api/getAdmins").then((res) => setAllAdmins(res.data));
  }, []);

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
            <div className="sm:flex flex-wrap sm:justify-between sm:items-center mb-8 gap-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Role Management ✨
                </h1>
              </div>

              {/* Right: Actions */}

              {/* <div>
                <label className="mr-2" for="status">
                  Role name
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter role name"
                />
              </div>
              <div>
                <label className="mr-2" for="status">
                  Permission character
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter role name"
                />
              </div>
              <div>
                <label className="mr-2" for="status">
                  Status
                </label>
                <select className="border-none" name="status" id="status">
                  <option>Role Status</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Creation time
                </label>
                <input
                  className="border-none"
                  type="date"
                  placeholder="please enter role name"
                />
              </div> */}

              <Link
                to="/system/add-role"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Newly added</span>
              </Link>
            </div>

            {/* Table */}
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full divide-y divide-slate-200">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
                  <tr>
                    {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select all</span>
                          <input className="form-checkbox" type="checkbox" />
                        </label>
                      </div>
                    </th> */}
                    {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Role number</div>
                    </th> */}
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Role Name</div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Permission</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">User</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Assign User</div>
                    </th>
                    {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Status</div>
                    </th> */}

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Creation time
                      </div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {roles?.map((rol, index) => (
                    <tr key={index}>
                      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select</span>
                          <input className="form-checkbox" type="checkbox" />
                        </label>
                      </div>
                    </td> */}

                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>{rol.role}</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>{rol.permission}</div>
                        {/* <div>{admin?.name}</div> */}
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>{rol.email ? rol.email : "Not Assigned"}</div>
                        {/* <div>{admin?.name}</div> */}
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap">
                        <select
                          className="w-full border-none"
                          name="permission"
                          onChange={handleChange}
                        >
                          <option selected disabled value={0}>
                            Select User
                          </option>
                          {allAdmins &&
                            allAdmins.length > 0 &&
                            allAdmins?.map((admin) => (
                              <option
                                selected={rol.email === admin.email}
                                key={admin?._id}
                                value={JSON.stringify({
                                  email: admin?.email,
                                  id: rol?._id,
                                })}
                              >
                                {admin?.name}
                              </option>
                            ))}
                        </select>
                        {/* <div>{admin?.email}</div> */}
                      </td>

                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        {/* <div>{formateData(admin?.createdAt)}</div> */}
                        <div>{formateData(rol.createdAt)}</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <Link to={`/system/edit-role/${rol?._id}`}>
                          {" "}
                          <span className="text-blue-600 cursor-pointer">
                            Edit{" "}
                          </span>
                        </Link>
                        <span
                          className="text-blue-600 cursor-pointer"
                          onClick={() => handleDelete(rol?._id)}
                        >
                          {" "}
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <button className="w-full border py-2 my-5">No data</button> */}

            {/* Pagination */}
            {/* <div className="mt-8">
              <PaginationClassic
                setPageNumber={"setPageNumber"}
                pageNumber={"pageNumber"}
                allCategories={"supports"}
              />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoleManagement;
