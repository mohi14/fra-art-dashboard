import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "../../utils/axios";

const EditCarousel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [sorts, setSort] = useState(0);

  const navigate = useNavigate();

  const handleSortDecrease = () => {
    if (sorts !== 0) {
      setSort((prev) => prev - 1);
    }
  };

  const { id } = useParams();

  const [singleCarousel, setSingleCarousel] = useState("");

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

    const pictureName = form.pictureName.value;
    const link = form.link.value;
    const sort = sorts;

    if (file) {
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
              pictureName,
              backGroundImage: imgData.data.url,
              link,
              sort,
            };

            axios
              .put(`/api/system-config//edit-carousel-pictures/${id}`, info)
              .then((res) => {
                if (res.status === 200) {
                  navigate("/system/carousel-pictures");
                }
              });
          }
        });
    } else {
      const newInfo = {
        pictureName,
        backGroundImage: singleCarousel?.backGroundImage,
        link,
        sort,
      };
      axios
        .put(`/api/system-config//edit-carousel-pictures/${id}`, newInfo)
        .then((res) => {
          if (res.status === 200) {
            navigate("/system/carousel-pictures");
          }
        });
    }
  };

  const getSingleCarousel = () => {
    axios.get(`/api/system-config/carousel-pictures/${id}`).then((res) => {
      setSingleCarousel(res.data);
      setSort(res.data.sort);
    });
  };

  console.log(singleCarousel);
  useEffect(() => {
    getSingleCarousel();
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
                      Edit Carousel Picture ✨
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
                              Picture name{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Please enter a picture name"
                              name="pictureName"
                              Value={singleCarousel?.pictureName}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Jump link <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="lease enter a jump link"
                              name="link"
                              Value={singleCarousel?.link}
                            />
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Background map
                            </label>

                            <div
                              className="border-dotted border-2 p-16"
                              onClick={imageHandler}
                            >
                              <img
                                className="w-full"
                                src={
                                  file ? file : singleCarousel?.backGroundImage
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
                              />
                            </div>
                          </div>

                          {/* <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Content
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
                        >
                          Determine
                        </button>
                        <Link to="/system/carousel-pictures">
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

export default EditCarousel;
