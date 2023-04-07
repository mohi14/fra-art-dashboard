import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

const PictureConfig = () => {
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
          <div className="lg:relative lg:flex">
            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              <div className="lg:max-w-[640px] lg:mx-auto">
                {/* Cart items */}
                <div className="mb-6 lg:mb-0">
                  <header className="mb-6">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                      Picture Configuration ✨
                    </h1>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form>
                      <div className="space-y-4">
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Project logo
                            </label>

                            <div className="w-full border-dotted border-2 p-16">
                              <img
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                            <p className="text-sm">
                              Please upload size no more than{" "}
                              <span className="text-red-600">5MB</span> Format
                              is{" "}
                              <span className="text-red-600">
                                png/jpg/jpeg/svg
                              </span>
                              file
                            </p>
                          </div>
                          {/* <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Help center banner
                            </label>

                            <div className="border-dotted border-2 p-16">
                              <img
                                width={200}
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                            <p>
                              Please upload size no more than{" "}
                              <span className="text-red-600">5MB</span> Format
                              is{" "}
                              <span className="text-red-600">
                                png/jpg/jpeg/svg
                              </span>
                              file
                            </p>
                          </div> */}
                        </div>
                        {/* 3rd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              User avatar
                            </label>

                            <div className="border-dotted border-2 p-16">
                              <img
                                width={200}
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                            <p className="text-sm">
                              Please upload size no more than{" "}
                              <span className="text-red-600">5MB</span> Format
                              is{" "}
                              <span className="text-red-600">
                                png/jpg/jpeg/svg
                              </span>
                              file
                            </p>
                          </div>
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              User banner
                            </label>

                            <div className="border-dotted border-2 p-16">
                              <img
                                width={200}
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                            <p>
                              Please upload size no more than{" "}
                              <span className="text-red-600">5MB</span> Format
                              is{" "}
                              <span className="text-red-600">
                                png/jpg/jpeg/svg
                              </span>
                              file
                            </p>
                          </div>
                        </div> */}
                        {/* 3rd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Group avatar
                            </label>

                            <div className="border-dotted border-2 p-16">
                              <img
                                width={200}
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                            <p className="text-sm">
                              Please upload size no more than{" "}
                              <span className="text-red-600">5MB</span> Format
                              is{" "}
                              <span className="text-red-600">
                                png/jpg/jpeg/svg
                              </span>
                              file
                            </p>
                          </div>
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Grouping banner
                            </label>

                            <div className="border-dotted border-2 p-16">
                              <img
                                width={200}
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                            <p>
                              Please upload size no more than{" "}
                              <span className="text-red-600">5MB</span> Format
                              is{" "}
                              <span className="text-red-600">
                                png/jpg/jpeg/svg
                              </span>
                              file
                            </p>
                          </div>
                        </div> */}
                        {/* 3rd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              All currencies icon
                            </label>

                            <div className=" border-dotted border-2 p-16">
                              <img
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <p>
                              Please upload size no more than{" "}
                              <span className="text-red-600">5MB</span> Format
                              is{" "}
                              <span className="text-red-600">
                                png/jpg/jpeg/svg
                              </span>
                              file
                            </p>
                          </div>
                        </div>

                        {/* 2nd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Default service
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the default service"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Default protocol
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the default protocol"
                            />
                          </div>
                        </div> */}

                        {/* 2nd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Default help center
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the default service"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Default selling duration (days)
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the default protocol"
                            />
                          </div>
                        </div> */}
                        {/* 2nd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Corporate name
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the default protocol"
                            />
                          </div>
                        </div> */}
                      </div>
                      <div className="flex justify-end gap-6 my-5">
                        <button
                          className="bg-blue-500 text-white rounded-lg p-2"
                          type=""
                        >
                          Confirm
                        </button>
                        <button className="border  rounded-lg p-2" type="">
                          Cancel
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

export default PictureConfig;
