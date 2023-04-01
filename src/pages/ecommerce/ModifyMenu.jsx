import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

const ModifyMenu = () => {
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
                      Modify Menu ✨
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
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Superior menu
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                            >
                              <option>0 (unknown)</option>
                              <option>USA</option>
                              <option>United Kingdom</option>
                            </select>
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Menu Type
                              <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                id="age1"
                                name="age"
                                value="30"
                              />
                              <label for="age1">Catalogue</label>

                              <input
                                type="radio"
                                id="age2"
                                name="age"
                                value="60"
                              />
                              <label for="age2">Menu</label>
                              <input
                                type="radio"
                                id="age2"
                                name="age"
                                value="60"
                              />
                              <label for="age2">Button</label>
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
                              Menu icon
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="product"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Menu name
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="读写汉字"
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
                              Display sort
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="number"
                              placeholder="1"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              External chain
                              <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                id="age1"
                                name="age"
                                value="30"
                              />
                              <label for="age1">Yes</label>

                              <input
                                type="radio"
                                id="age2"
                                name="age"
                                value="60"
                              />
                              <label for="age2">No</label>
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
                           Routing Address
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="market"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Display status
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
                              <label for="age2">中文</label>
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
                              Menu status
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
                              <label for="age2">中文</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-6 my-5">
                        <button
                          className="bg-blue-500 text-white rounded-lg p-2"
                          type=""
                        >
                          Indeed Set
                        </button>
                        <button className="border  rounded-lg p-2" type="">
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

export default ModifyMenu;
