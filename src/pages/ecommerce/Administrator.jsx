import React, { useEffect, useState } from "react";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const formateData = (date) => {
  const convertedDate = new Date(date);
  return convertedDate.toDateString();
};

const Administrator = () => {
  const [comments, setComments] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [allAdmins, setAllAdmins] = useState("");

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const getAllAdmins = () => {
    axios.get("/admin-api/getAdmins").then((res) => setAllAdmins(res.data));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are You really want to delete this person?")) {
      axios.delete(`/admin-api/admin/delete/${id}`).then((res) => {
        if (res.status === 200) {
          getAllAdmins();
        }
      });
    }
  };

  console.log(allAdmins, "admins");
  useEffect(() => {
    getAllAdmins();
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
            <div className="sm:flex flex-wrap gap-8 sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Administrator ✨
                </h1>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Name
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter user name"
                />
              </div>
              <div>
                <label className="mr-2" for="status">
                  Email
                </label>
                <input
                  className="border-none"
                  type="tel"
                  placeholder="please enter email"
                />
              </div>

              <div>
                <label className="mr-2" for="status">
                  Status
                </label>
                <select className="border-none" name="status" id="status">
                  <option>User Status</option>
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
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <Link to="/system/administrator/create-admin">
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg
                      className="w-4 h-4 fill-current opacity-50 shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Newly added</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Table */}
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full divide-y divide-slate-200">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select all</span>
                          <input className="form-checkbox" type="checkbox" />
                        </label>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">User number</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>

                    {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        User nickname
                      </div>
                    </th> */}
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Status</div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Creation time
                      </div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Operation</div>
                    </th>
                  </tr>
                </thead>

                {/* Table body */}
                <tbody className="text-sm">
                  {allAdmins &&
                    allAdmins.length > 0 &&
                    allAdmins.map((admin, index) => (
                      <tr key={admin?._id}>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                          <div className="flex items-center">
                            <label className="inline-flex">
                              <span className="sr-only">Select</span>
                              <input
                                className="form-checkbox"
                                type="checkbox"
                              />
                            </label>
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{index + 1}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{admin?.name}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{admin?.email}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="flex items-center ml-4">
                            {admin?.permission === 0 && "Disable"}
                            {admin?.permission === 1 && "Editable"}
                            {admin?.permission === 2 && "Super Admin"}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{formateData(admin?.createdAt)}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <Link
                            to={`/system/administrator/edit-admin/${admin?._id}`}
                          >
                            {" "}
                            <span className="text-blue-600 cursor-pointer">
                              Edit{" "}
                            </span>
                          </Link>
                          <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => handleDelete(admin?._id)}
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

            {/* Pagination */}
            {/* <div className="mt-8">
              <PaginationClassic
                setPageNumber={"setPageNumber"}
                pageNumber={"pageNumber"}
                allCategories={allAdmins}
              />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Administrator;
