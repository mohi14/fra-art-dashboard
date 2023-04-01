import React, { useState } from "react";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "../../utils/axios";

const SupportRecordTable = ({ supportRecords, getSupportRecords }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you really want to delete this?")) {
      axios.delete(`/api/content/support-record/delete/${id}`).then((res) => {
        if (res.status === 200) {
          getSupportRecords();
        }
      });
    }
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex flex-wrap gap-8 sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Support Record✨
                </h1>
              </div>

              {/* <div>
                <label className="mr-2" for="status">
                  Chain
                </label>
                <select className="border" name="status" id="status">
                  <option>Please select the main chain</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Wallet address
                </label>
                <input
                  className="border"
                  type="text"
                  placeholder="please enter wallet address"
                />
              </div>
              <div>
                <label className="mr-2" for="status">
                  Status
                </label>
                <select className="border" name="status" id="status">
                  <option>Please select a status</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div> */}
            </div>

            {/* Table */}
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full divide-y divide-slate-200">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Title</div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Wallet address
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Chain</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Describe</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Attached documents
                      </div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Operation</div>
                    </th>
                  </tr>
                </thead>

                {/* Table body */}
                <tbody className="text-sm">
                  {supportRecords &&
                    supportRecords.length > 0 &&
                    supportRecords.map((records) => (
                      <tr key={records._id}>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{records?.email}</div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{records?.title}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{records?.walletAddress}</div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{records?.chain}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{records?.description}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{records?.attachedDocument}</div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                          <div className="space-x-1">
                            <button
                              className="text-rose-500 hover:text-rose-600 rounded-full"
                              onClick={() => handleDelete(records?._id)}
                            >
                              <span className="sr-only">Delete</span>
                              <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                              >
                                <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                                <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {/* <div className="mt-8">
              <PaginationClassic
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
                allCategories={supportRecords}
              />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupportRecordTable;
