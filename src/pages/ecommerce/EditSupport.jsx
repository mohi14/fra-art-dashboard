import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "../../utils/axios";

const EditSupport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [supprt, setSupprt] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      language: language ? language : supprt?.language,
      title: title ? title : supprt?.title,
      id,
    };
    axios.post("/api/content/updateSupport", info).then((res) => {
      if (res.status) {
        navigate("/content/support-type");
      }
    });
  };

  console.log(supprt, "jkjk");

  useEffect(() => {
    axios
      .get(`/api/content/support/list/${id}`)
      .then((res) => setSupprt(res.data));
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <section>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                    Add Support type
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
                        <select onChange={(e) => setLanguage(e.target.value)}>
                          <option
                            selected={supprt?.language === "en"}
                            value="en"
                          >
                            English
                          </option>
                          <option
                            selected={supprt?.language === "ja"}
                            value="ja"
                          >
                            Japanese
                          </option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="business-id"
                        >
                          <span className="text-red-600">*</span> Title
                        </label>
                        <input
                          className="form-input w-full"
                          type="text"
                          placeholder="Please enter a title"
                          required
                          Value={supprt?.title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Panel footer */}
                    <footer>
                      <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                        <div className="flex self-end">
                          <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                            <Link to="/content/support-type"> Indeed Set</Link>
                          </button>
                          <button
                            type="submit"
                            className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                            disabled={!title}
                          >
                            Take Eliminate
                          </button>
                        </div>
                      </div>
                    </footer>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditSupport;
