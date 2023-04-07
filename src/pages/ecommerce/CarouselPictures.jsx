import React, { useEffect, useState } from "react";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const dataFormater = (data) => {
  const date = new Date(data).toDateString();
  return date;
};

const CarouselPictures = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [pictureName, setPictureName] = useState("");

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const [allCarousels, setAllCarousels] = useState("");

  const getAllCarousel = () => {
    axios
      .get(
        `/api/system-config//all-carousel-pictures?pictureName=${pictureName}`
      )
      .then((res) => setAllCarousels(res.data));
  };

  const handleStatus = (status, id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .put(`/api/system-config/carousel-pictures/status/${id}`, {
          status: status,
        })
        .then((res) => {
          if (res.status === 200) {
            getAllCarousel();
          }
        });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you really want to delete?")) {
      axios
        .delete(`/api/system-config/carousel-pictures/delete/${id}`)
        .then((res) => {
          if (res.status === 200) {
            getAllCarousel();
          }
        });
    }
  };

  useEffect(() => {
    getAllCarousel();
  }, [pictureName]);

  console.log(allCarousels);

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
                  Carousel Pictures ✨
                </h1>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Picture name
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter a picture name"
                  onChange={(e) => setPictureName(e.target.value)}
                />
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <Link
                  to="/system/add-carousel"
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
                      <div className="font-semibold text-left">
                        Picture name
                      </div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Background map
                      </div>
                    </th>
                    {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Content</div>
                    </th> */}
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Jump link</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Sort</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Status</div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold">Creation time</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Operation</div>
                    </th>
                  </tr>
                </thead>

                {/* Table body */}
                <tbody className="text-sm">
                  {allCarousels &&
                    allCarousels.length > 0 &&
                    allCarousels.map((carousel) => (
                      <tr key={carousel?._id}>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{carousel?.pictureName}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3">
                            <img
                              className="ml-1"
                              src={carousel?.backGroundImage}
                              width="200"
                              height="200"
                            />
                          </div>
                        </td>
                        {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3">
                            <img
                              className="ml-1"
                              src="https://avatars.githubusercontent.com/u/6250754?s=200&v=4"
                              width="50"
                              height="50"
                            />
                          </div>
                        </td> */}

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{carousel?.link}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div>{carousel?.sort}</div>
                        </td>
                        <td
                          className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-center cursor-pointer"
                          onClick={() =>
                            handleStatus(!carousel?.status, carousel?._id)
                          }
                        >
                          <div className="bg-blue-200 p-2 rounded-lg">
                            {carousel?.status === false ? "Disable" : "Enable"}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-center">
                          <div>{dataFormater(carousel?.createdAt)}</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                          <div className="space-x-1">
                            <Link to={`/system/edit-carousel/${carousel?._id}`}>
                              <button className="text-slate-400 hover:text-slate-500 rounded-full">
                                <span className="sr-only">Edit</span>
                                <svg
                                  className="w-8 h-8 fill-current"
                                  viewBox="0 0 32 32"
                                >
                                  <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                                </svg>
                              </button>
                            </Link>

                            <button
                              className="text-rose-500 hover:text-rose-600 rounded-full"
                              onClick={() => handleDelete(carousel?._id)}
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
              <PaginationClassic />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CarouselPictures;
