import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "../../utils/axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState("");

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [recommended, setRecommended] = useState(false);
  const [sort, setSort] = useState(1);
  const [content, setContent] = useState("");

  const handleMinus = () => {
    if (sort > 1) {
      setSort((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    setSort((prev) => prev + 1);
  };

  const handleTexteditorChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const info = {
      language: language ? language : article.language,
      category: category ? category : article.category,
      title: title ? title : article.title,
      recommended: recommended
        ? recommended === "false"
          ? false
          : true
        : article.recommended,
      sort: sort ? sort : article.sort,
      content: value,
      id,
    };
    console.log(info);
    axios.post("/api/content/article/update", info).then((res) => {
      if (res.status) {
        alert("Article Updated Successfully");
        navigate("/content/article-management");
      }
    });
  };

  useEffect(() => {
    axios.get("/api/content/categories").then((res) => setCategories(res.data));

    axios.get(`/api/content/article/${id}`).then((res) => {
      setArticle(res.data);
      setSort(res.data.sort);
      setValue(res.data.content);
    });
  }, []);

  console.log(categories);
  console.log(article, "article");

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
                      Add Article ✨
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
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Languages <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                              onChange={(e) => setLanguage(e.target.value)}
                              required
                            >
                              <option
                                selected={article?.language === "en"}
                                value="en"
                              >
                                English
                              </option>
                              <option
                                selected={article?.language === "ja"}
                                value="ja"
                              >
                                Japanese
                              </option>
                            </select>
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Information type{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                              onChange={(e) => setCategory(e.target.value)}
                              required
                            >
                              {categories &&
                                categories.length > 0 &&
                                categories.map((category) => (
                                  <option
                                    selected={
                                      category.name === article?.category
                                    }
                                    key={category?._id}
                                    value={category?.name}
                                  >
                                    {category?.name}
                                  </option>
                                ))}
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
                              Title <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              required
                              type="text"
                              Value={article?.title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Recommended{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                              onChange={(e) => setRecommended(e.target.value)}
                              required
                            >
                              <option
                                selected={article?.recommended === true}
                                value={true}
                              >
                                Yes
                              </option>
                              <option
                                selected={article?.recommended === false}
                                value={false}
                              >
                                No
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
                              Sort <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center">
                              <span
                                className="bg-gray-200 px-3 py-1 border btn"
                                onClick={handleMinus}
                              >
                                -
                              </span>

                              <input
                                id="card-address"
                                className="form-input w-full"
                                type="number"
                                placeholder="Please enter"
                                min={1}
                                required
                                Value={sort}
                                readOnly
                                onChange={(e) =>
                                  setSort(Number(e.target.value))
                                }
                              />
                              <span
                                className="bg-gray-200 px-3 py-1 border btn"
                                onClick={handlePlus}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <ReactQuill
                              style={{ height: "250px" }}
                              theme="snow"
                              value={value}
                              onChange={setValue}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-6 my-12">
                        <button
                          className="bg-blue-500 text-white rounded-lg p-2"
                          type=""
                        >
                          <Link to="/content/article-management">
                            Indeed Set
                          </Link>
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

export default EditArticle;
