import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMailConfiguration = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const [getSingleConfiguration, setGetSingleConfiguration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const account = form.account.value;
    const password = form.password.value;
    const port = Number(form.port.value);
    const senderServer = form.senderServer.value;
    const receivingServer = form.receivingServer.value;
    const whetherTheDefault =
      form.whetherTheDefault.value === "false" ? false : true;
    const sender = form.sender.value;

    const info = {
      account,
      password,
      port,
      senderServer,
      receivingServer,
      whetherTheDefault,
      sender,
    };
    axios
      .put(`/api/system-config/edit-mail-configuration/${id}`, info)
      .then((res) => {
        if (res.status === 200) {
          navigate("/system/mail-configuration");
        }
      });
  };

  console.log(getSingleConfiguration);

  useEffect(() => {
    axios
      .get(`/api/system-config/mail-configuration/${id}`)
      .then((res) => setGetSingleConfiguration(res.data));
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
          <div className="lg:relative lg:flex">
            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              <div className="lg:max-w-[640px] lg:mx-auto">
                {/* Cart items */}
                <div className="mb-6 lg:mb-0">
                  <header className="mb-6">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                      Add mail configuration ✨
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
                              Account <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter your account number"
                              required
                              name="account"
                              Value={getSingleConfiguration?.account}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Password <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter your password"
                              required
                              name="password"
                              Value={getSingleConfiguration?.password}
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
                              Port <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="number"
                              placeholder="Please enter port"
                              required
                              min={0}
                              name="port"
                              Value={getSingleConfiguration?.port}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Sender server{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the sender server"
                              required
                              name="senderServer"
                              Value={getSingleConfiguration?.senderServer}
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
                              Receiving server{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter port"
                              required
                              name="receivingServer"
                              Value={getSingleConfiguration?.receivingServer}
                            />
                          </div>

                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Whether the default{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                              required
                              name="whetherTheDefault"
                            >
                              <option
                                selected={
                                  getSingleConfiguration?.whetherTheDefault ===
                                  false
                                }
                                value={false}
                              >
                                No
                              </option>
                              <option
                                selected={
                                  getSingleConfiguration?.whetherTheDefault ===
                                  true
                                }
                                value={true}
                              >
                                Yes
                              </option>
                            </select>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              The sender
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter the sender"
                              name="sender"
                              required
                              Value={getSingleConfiguration?.sender}
                            />
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

export default EditMailConfiguration;
