import React, { useRef, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";

const AddSupportWallet = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [sorts, setSort] = useState(0);

  const navigate = useNavigate();

  const handleSortDecrease = () => {
    if (sorts !== 0) {
      setSort((prev) => prev - 1);
    }
  };

  const [file, setFile] = useState();
  const imageRef = useRef();

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const imageHandler = () => {
    imageRef.current.click();
  };

  const imageHostKey = import.meta.env.VITE_imgBB_key;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const walletName = form.walletName.value;
    const isSupported = form.isSupported.value === "false" ? false : true;
    const IOSJumpLink = form.IOSJumpLink.value;
    const IOSDownloadLink = form.IOSDownloadLink.value;
    const androidJumpLink = form.androidJumpLink.value;
    const androidDownloadLink = form.androidDownloadLink.value;
    const canIWakeUp = form.canIWakeUp.value === "false" ? false : true;
    const sort = sorts;

    const image = form.img.files[0];
    const fromData = new FormData();
    fromData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const info = {
            walletName,
            walletIcon: imgData.data.url,
            isSupported,
            IOSDownloadLink,
            IOSJumpLink,
            androidDownloadLink,
            androidJumpLink,
            canIWakeUp,
            sort,
          };

          axios
            .post("/api/system-config/add-supported-wallet", info)
            .then((res) => {
              if (res.status === 200) {
                navigate("/system/support-wallet");
              }
            });
        }
      });
  };

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
                      Add supported wallet ✨
                    </h1>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Wallet Icon
                            </label>

                            <div
                              className="border-dotted border-2 p-16"
                              onClick={imageHandler}
                            >
                              <img
                                width={200}
                                src={
                                  file
                                    ? file
                                    : "https://image.pngaaa.com/781/4773781-middle.png"
                                }
                                alt=""
                              />
                              <input
                                style={{ display: "none" }}
                                ref={imageRef}
                                accept="image/*"
                                onChange={handleChange}
                                type="file"
                                name="img"
                                required
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Is it supported PC{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                              name="isSupported"
                            >
                              <option value={true}>Yes</option>
                              <option value={false}>No</option>
                            </select>
                          </div>
                        </div>
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Wallet Name
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter wallet name"
                              name="walletName"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Can i wake up directly
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                              name="canIWakeUp"
                            >
                              <option value={true}>Yes</option>
                              <option value={false}>No</option>
                            </select>
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              IOS Jump link{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter IOS jump link"
                              name="IOSJumpLink"
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
                              IOS Download link{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter IOS download link"
                              name="IOSDownloadLink"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Android jump link{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the android jump link"
                              name="androidJumpLink"
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
                              Android download link
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the android download link"
                              name="androidDownloadLink"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Sort <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center">
                              <span
                                className="bg-gray-200 px-3 py-1 border"
                                onClick={handleSortDecrease}
                              >
                                -
                              </span>

                              <input
                                id="card-address"
                                className="form-input w-full"
                                type="text"
                                placeholder="Please enter"
                                value={sorts}
                                readOnly
                              />
                              <span
                                className="bg-gray-200 px-3 py-1 border"
                                onClick={() => setSort((prev) => prev + 1)}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-6 my-5">
                        <button
                          className="bg-blue-500 text-white rounded-lg p-2"
                          type="submit"
                          disabled={!file && true}
                        >
                          Determine
                        </button>
                        <Link to="/system/support-wallet">
                          <button className="border  rounded-lg p-2" type="">
                            Cancel
                          </button>
                        </Link>
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

export default AddSupportWallet;
