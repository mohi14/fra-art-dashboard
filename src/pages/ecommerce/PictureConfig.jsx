import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "../../utils/axios";

const PictureConfig = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [allImages, setAllimages] = useState("");

  const [isLoading, setIsloading] = useState(false);

  // images hostinging
  const imageHostKey = import.meta.env.VITE_imgBB_key;

  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

  // image1 preview start
  const [file1, setFile1] = useState();
  const imageRef1 = useRef();

  const handleChange1 = (e) => {
    if (allImages.length > 0) {
      const image = e.target.files[0];
      const fromData = new FormData();
      fromData.append("image", image);

      fetch(url, {
        method: "POST",
        body: fromData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const info = {
              projectLogo: imgData.data.url,
            };

            axios
              .put(
                `/api/system-config/picture-configuration/update/project-logo/${allImages[0]?._id}`,
                info
              )
              .then((res) => {
                if (res.status === 200) {
                  alert("Project Logo Updated Successfully");
                  getImages();
                }
              });
          }
        });
    } else {
      setFile1(URL.createObjectURL(e.target.files[0]));
    }
  };

  const imageHandler1 = () => {
    imageRef1.current.click();
  };
  // image1 preview end

  // ---------------------------------

  // image2 preview start
  const [file2, setFile2] = useState();
  const imageRef2 = useRef();

  const handleChange2 = (e) => {
    if (allImages.length > 0) {
      const image = e.target.files[0];
      const fromData = new FormData();
      fromData.append("image", image);

      fetch(url, {
        method: "POST",
        body: fromData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const info = {
              currenciesIcon: imgData.data.url,
            };

            axios
              .put(
                `/api/system-config/picture-configuration/update/currencies-icon/${allImages[0]?._id}`,
                info
              )
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  alert("Currencies Icon Updated Successfully");
                  getImages();
                }
              });
          }
        });
    } else {
      setFile2(URL.createObjectURL(e.target.files[0]));
    }
  };

  const imageHandler2 = () => {
    imageRef2.current.click();
  };
  // image2 preview end

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    // image 1
    const image1 = form.img.files[0];

    const fromData1 = new FormData();
    fromData1.append("image", image1);

    // image 2
    const image2 = form.img2.files[0];

    const fromData2 = new FormData();
    fromData2.append("image", image2);

    // const images = [fromData1, fromData2];

    // const imageUploaded = images.map(async (fromData) => {
    //   const responses = await fetch(url, {
    //     method: "POST",
    //     body: fromData,
    //   });
    //   const imgData = await responses.json();

    //   console.log(imgData.data.url);

    //   return imgData.data.url;
    // });

    // console.log("links", imageUploaded);
    let imageUploaded = {};

    setIsloading(true);

    fetch(url, {
      method: "POST",
      body: fromData1,
    })
      .then((res) => res.json())
      .then((imgData1) => {
        if (imgData1.success) {
          imageUploaded.projectLogo = imgData1.data.url;
          fetch(url, {
            method: "POST",
            body: fromData2,
          })
            .then((res) => res.json())
            .then((imgData2) => {
              if (imgData2.success) {
                imageUploaded.currenciesIcon = imgData2.data.url;
                axios
                  .post(
                    "/api/system-config/add-picture-configuration",
                    imageUploaded
                  )
                  .then((res) => {
                    if (res.status === 200) {
                      alert("Picturs Updated Successfully");
                      getImages();
                    }
                  });
              }
            });
        }
      });
  };

  // geting hosted images from server

  const getImages = () => {
    axios
      .get("/api/system-config/all-picture-configuration")
      .then((res) => setAllimages(res.data));
  };

  console.log(allImages);

  useEffect(() => {
    getImages();
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
                      Picture Configuration ✨
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
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Project logo
                            </label>

                            <div
                              className="w-full border-dotted border-2 p-16"
                              onClick={imageHandler1}
                            >
                              <img
                                src={
                                  file1
                                    ? file1
                                    : allImages.length > 0
                                    ? allImages[0]?.projectLogo
                                    : "https://image.pngaaa.com/781/4773781-middle.png"
                                }
                                alt=""
                              />
                              <input
                                style={{ display: "none" }}
                                ref={imageRef1}
                                accept="image/*"
                                onChange={handleChange1}
                                type="file"
                                name="img"
                                required
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

                            <div
                              className=" border-dotted border-2 p-16"
                              onClick={imageHandler2}
                            >
                              <img
                                src={
                                  file2
                                    ? file2
                                    : allImages.length > 0
                                    ? allImages[0]?.currenciesIcon
                                    : "https://image.pngaaa.com/781/4773781-middle.png"
                                }
                                alt=""
                              />
                              <input
                                style={{ display: "none" }}
                                ref={imageRef2}
                                accept="image/*"
                                onChange={handleChange2}
                                type="file"
                                name="img2"
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
                      {allImages.length > 0 ? (
                        ""
                      ) : (
                        <div className="flex justify-end gap-6 my-5">
                          <button
                            className="bg-blue-500 text-white rounded-lg p-2"
                            type="submit"
                            disabled={isLoading}
                          >
                            Confirm
                          </button>
                          <button className="border  rounded-lg p-2" type="">
                            Cancel
                          </button>
                        </div>
                      )}
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
