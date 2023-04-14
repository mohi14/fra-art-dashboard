import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "../../utils/axios";

const SupportType = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [supports, setSupports] = useState("");

  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const getSupportType = () => {
    axios
      .get(
        `/api/content/support/list?language=${language}&title=${title}&pageNumber=${pageNumber}`
      )
      .then((res) => setSupports(res.data));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you really want to delete this article?")) {
      axios.delete(`/api/content/delete/Support/${id}`).then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          getSupportType();
        } else {
          alert(res.data.message);
        }
      });
    }
  };

  console.log(supports, "kjkj");

  useEffect(() => {
    getSupportType();
  }, [pageNumber, title, language]);
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
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Types of support ✨
                </h1>
              </div>

              <div>
                <label className="mr-2" for="status">
                  Languages
                </label>
                <select
                  className="border-none"
                  name="status"
                  id="status"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="en">English</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>

              <div>
                <label className="mr-2" for="status">
                  Title
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter a title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <Link
                  to="/content/add-support"
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
            </div>

            {/* Table */}
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full divide-y divide-slate-200">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Language</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Title</div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Operation</div>
                    </th>
                  </tr>
                </thead>

                {/* Table body */}
                <tbody className="text-sm">
                  {supports &&
                    supports.length > 0 &&
                    supports?.map((support) => (
                      <tr>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>
                            {support?.language === "en"
                              ? "English"
                              : "Japanese"}
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{support?.title}</div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <span className="text-blue-600">
                            <Link to={`/content/edit-support/${support?._id}`}>
                              Edit{" "}
                            </Link>{" "}
                          </span>
                          <span
                            className="text-blue-600"
                            onClick={() => handleDelete(support?._id)}
                          >
                            {" "}
                            Delete
                          </span>
                        </td>
                      </tr>
                    ))}

                  {/* <tr>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>English</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>Account setting</div>
                    </td>

                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <span className="text-blue-600">Edit </span>
                      <span className="text-blue-600" onClick={handleDelete}>
                        {" "}
                        Delete
                      </span>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
                allCategories={supports}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupportType;
