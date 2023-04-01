import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SettingsSidebar from "../../partials/settings/SettingsSidebar";
import AccountPanel from "../../partials/settings/AccountPanel";
import SupportRecordTable from "./SupportRecordTable";
import axios from "../../utils/axios";

const SupportRecords = () => {
  const [categories, setCategories] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [supportRecords, setSupportRecords] = useState("");

  // const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const title = form.title.value;
    const chain = form.chain.value;
    const category = form.category.value;
    const walletAddress = form.walletAddress.value;
    const description = form.description.value;
    const attachedDocument = form.attachedDocument.value;

    const info = {
      email,
      title,
      chain,
      category,
      walletAddress,
      description,
      attachedDocument,
    };
    console.log(info, "info");
    axios.post("/api/content/support-record/create", info).then((res) => {
      if (res.status === 201) {
        getSupportRecords();
        form.reset();
      }
    });
  };

  const getSupportRecords = () => {
    axios
      .get("/api/content/support-record/list")
      .then((res) => setSupportRecords(res.data));
  };

  useEffect(() => {
    axios.get("/api/content/categories").then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    getSupportRecords();
  }, []);
  console.log(supportRecords);
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
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Support Records ✨
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <SettingsSidebar />
                <div className="grow">
                  {/* Panel body */}
                  <div className="p-6 space-y-6">
                    <h2 className="text-2xl text-slate-800 font-bold">
                      {" "}
                      Account support
                    </h2>
                    <p>If you need help with your account, we can help you</p>

                    {/* Business Profile */}
                    {/* <section>
                      <div className="sm:flex gap-2 sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <div>
                          <select className="w-full">
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                          </select>
                        </div>
                        <div>
                          <select className="w-full">
                            <option>Contact market support </option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                          </select>
                        </div>
                        <div>
                          <label className="mr-3">Title</label>
                          <input type="text" />
                        </div>
                        <div>
                          <label className="mr-3">Transfer ID (optional)</label>
                          <input type="text" />
                        </div>
                      </div>
                    </section> */}

                    {/* edited section */}
                    <form onSubmit={handleSubmit}>
                      <div className="sm:flex flex-wrap gap-8 sm:justify-between sm:items-center mb-8">
                        {/* Left: Title */}
                        <div>
                          <label className="mr-3">Title</label>
                          <input type="text" name="title" required />
                        </div>

                        <div>
                          <label className="mr-2" for="status">
                            Chain
                          </label>
                          <select
                            className="border"
                            name="chain"
                            id="status"
                            required
                          >
                            <option value="Ethereum">Ethereum</option>
                          </select>
                        </div>
                        {/* added section category */}
                        <div>
                          <label className="mr-2" for="status">
                            Category
                          </label>
                          <select
                            className="border"
                            name="category"
                            id="status"
                            required
                          >
                            {categories &&
                              categories.length > 0 &&
                              categories.map((category) => (
                                <option
                                  key={category?._id}
                                  value={category?.name}
                                >
                                  {category?.name}
                                </option>
                              ))}
                          </select>
                        </div>
                        {/* added section category */}
                        <div>
                          <label className="mr-2" for="status">
                            Wallet address
                          </label>
                          <input
                            className="border"
                            name="walletAddress"
                            type="text"
                            placeholder="please enter wallet address"
                            required
                          />
                        </div>
                        {/* new section email */}
                        <div>
                          <label className="mr-2" for="status">
                            Email
                          </label>
                          <input
                            className="border"
                            type="text"
                            placeholder="please enter email"
                            name="email"
                            required
                          />
                        </div>
                        {/* new section email */}

                        {/* new section description */}
                        <div>
                          <label className="mr-2" for="status">
                            Description
                          </label>
                          <input
                            className="border"
                            type="text"
                            placeholder="please enter description"
                            name="description"
                            required
                          />
                        </div>
                        {/* new section description */}

                        {/* new section attachtdocuments */}
                        <div>
                          <label className="mr-2" for="status">
                            Attached Documents
                          </label>
                          <input
                            className="border"
                            type="text"
                            placeholder="please enter documents"
                            name="attachedDocument"
                            required
                          />
                        </div>
                        {/* new section attachtdocuments */}
                        {/* <div>
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
                      <div className="text-right">
                        <button
                          type="submit"
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 "
                        >
                          Take Eliminate
                        </button>
                      </div>
                    </form>
                  </div>

                  <SupportRecordTable
                    supportRecords={supportRecords}
                    getSupportRecords={getSupportRecords}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupportRecords;
