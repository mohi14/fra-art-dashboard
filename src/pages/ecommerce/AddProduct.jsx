import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { AiOutlineLock } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";

const AddProduct = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [comments, setComments] = useState(true);
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
                      Create an official product✨
                    </h1>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form>
                      <div className="space-y-4">
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Preview <br />
                              <span className="text-sm">
                                The maximum preview file size can not exceed 2
                                MB
                              </span>
                            </label>

                            <div className="border-dotted border-2 w-1/2 p-16">
                              <img
                                width={200}
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Create a new item <br />
                              <span className="text-sm">
                                Image, video , audio <br />
                                Supported file types: JPG, PNG, GIF, SVG, MP4,
                                WEBM, MP3,WAV, Maximum: 40MB
                              </span>
                            </label>

                            <div className="border-dotted border-2  p-16">
                              <img
                                className="mx-auto"
                                width={200}
                                src="https://image.pngaaa.com/781/4773781-middle.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Name
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="trade name"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              External URL <br />
                              <span className="text-sm">
                                The market will include a link page to this URL
                                in the details of the product so that users can
                                click to learn more. You are welcome to link to
                                own web page for more details.
                              </span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="External URL"
                            />
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Product description <br />
                              <span>
                                The description will be included below the image
                                on the details page of the project
                              </span>
                            </label>
                            <textarea className="border-none w-full"></textarea>
                          </div>

                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Category{" "}
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                            >
                              <option>Art</option>
                              <option>Music</option>
                            </select>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Label
                            </label>
                            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                              <svg
                                className="w-4 h-4 fill-current opacity-50 shrink-0"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                              </svg>
                              <span className="hidden xs:block ml-2">
                                New label
                              </span>
                            </button>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4 border p-3 rounded-lg bg-white">
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div className="flex items-center gap-6">
                                <AiOutlineLock />
                                <div>
                                  <p>Unlocked content</p>
                                  <p>
                                    Include unlocked content that can only be
                                    displayed by the item owner
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center ml-4">
                                <div className="text-sm text-slate-400 italic mr-2">
                                  {comments ? "On" : "Off"}
                                </div>
                                <div className="form-switch">
                                  <input
                                    type="checkbox"
                                    id="comments"
                                    className="sr-only"
                                    checked={comments}
                                    onChange={() => setComments(!comments)}
                                  />
                                  <label
                                    className="bg-slate-400"
                                    htmlFor="comments"
                                  >
                                    <span
                                      className="bg-white shadow-sm"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">
                                      Enable smart sync
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex  md:space-y-0 md:space-x-4 border p-3 rounded-lg">
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div className="flex items-center gap-6">
                                <BsFillExclamationCircleFill />
                                <div>
                                  <p>Clear and sensitive content</p>
                                  <p>Make this explicit and sensitive</p>
                                </div>
                              </div>
                              <div className="flex items-center ml-4">
                                <div className="text-sm text-slate-400 italic mr-2">
                                  {comments ? "On" : "Off"}
                                </div>
                                <div className="form-switch">
                                  <input
                                    type="checkbox"
                                    id="comments"
                                    className="sr-only"
                                    checked={comments}
                                    onChange={() => setComments(!comments)}
                                  />
                                  <label
                                    className="bg-slate-400"
                                    htmlFor="comments"
                                  >
                                    <span
                                      className="bg-white shadow-sm"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">
                                      Enable smart sync
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Chain{" "}
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                            >
                              <option>BSCTest</option>
                              <option>Music</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-6 my-5">
                        <button className="flex items-center gap-2 border  rounded-lg p-2" type="">
                          <RiEditLine/> Establish
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

export default AddProduct;
