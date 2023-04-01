import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "../../utils/axios";

const AddInformation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      language,
      name,
    };
    console.log(info);
    axios.post("/api/content/category/create", info).then((res) => {
      console.log(res, "jkjkjk");
      if (res.status === 201) {
        alert(res.data.message);
        navigate("/content/information-type");
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <section>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                    Add information type
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="name"
                        >
                          <span className="text-red-600">*</span> Languages
                        </label>
                        <select
                          className="border-none"
                          required
                          onChange={(e) => setLanguage(e.target.value)}
                        >
                          <option>Please select a language</option>
                          <option value="ja">Japanese</option>
                          <option value="en">English</option>
                          {/* <option>C</option>
                        <option>D</option> */}
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="business-id"
                        >
                          <span className="text-red-600">*</span> Name
                        </label>
                        <input
                          className="form-input w-full"
                          type="text"
                          placeholder="Please enter information category name"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="location"
                        >
                          <span className="text-red-600">*</span> Superior
                          consultation
                        </label>
                        <select className="w-full border-none">
                          <option>Please select superior consultation</option>
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                          <option>D</option>
                        </select>
                      </div>
                    </div>
                    <footer>
                      <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                        <div className="flex self-end">
                          <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                            <Link to="/content/information-type">
                              IndeedSet
                            </Link>
                          </button>
                          <button
                            className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                            disabled={!language || !name}
                          >
                            TakeEliminate
                          </button>
                        </div>
                      </div>
                    </footer>
                  </form>
                  {/* Panel footer */}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddInformation;
