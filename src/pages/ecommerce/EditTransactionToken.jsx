import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "../../utils/axios";

const EditTransactionToken = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [accuracys, setAccuracy] = useState(0);
  const [sorts, setSort] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleAccurecyDecrease = () => {
    if (accuracys !== 0) {
      setAccuracy((prev) => prev - 1);
    }
  };

  const [transaction, setTransaction] = useState("");

  const handleSortDecrease = () => {
    if (sorts !== 0) {
      setSort((prev) => prev - 1);
    }
  };
  const [file, setFile] = useState("");
  const imageRef = useRef();

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const imageHandler = () => {
    imageRef.current.click();
  };

  const imageHostKey = process.env.REACT_APP_imgBB_key;

  console.log(imageHostKey, "djfsjfk");

  const getTransaction = () => {
    axios.get(`/api/system-config/transaction-currency/${id}`).then((res) => {
      setTransaction(res.data);
      setAccuracy(res.data.accuracy);
      setSort(res.data.sort);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const chainName = form.chainName.value;
    const token = form.token.value;
    const tokenType = form.tokenType.value;
    const contractAddress = form.contractAddress.value;
    const accuracy = accuracys;
    const sort = sorts;
    const usdChangeRate = Number(form.usdChangeRate.value);

    // const data = {
    //   chainName,
    //   token,
    //   tokenType,
    //   contractAddress,
    //   accuracy,
    //   sort,
    //   usdChangeRate,
    // };

    if (file) {
      const image = form.img.files[0];

      const fromData = new FormData();
      fromData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=7378254be2fef904c69a0c05769ced22`;

      fetch(url, {
        method: "POST",
        body: fromData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const info = {
              chainName,
              icon: imgData.data.url,
              token,
              tokenType,
              contractAddress,
              accuracy,
              sort,
              usdChangeRate,
            };

            axios
              .put(`/api/system-config/edit-transaction-currency/${id}`, info)
              .then((res) => {
                if (res.status === 200) {
                  navigate("/system/transaction-currency");
                }
              });
          }
        });
    } else {
      const newInfo = {
        chainName,
        icon: transaction?.icon,
        token,
        tokenType,
        contractAddress,
        accuracy,
        sort,
        usdChangeRate,
      };

      axios
        .put(`/api/system-config/edit-transaction-currency/${id}`, newInfo)
        .then((res) => {
          if (res.status === 200) {
            navigate("/system/transaction-currency");
          }
        });
    }
  };

  console.log(transaction);

  useEffect(() => {
    getTransaction();
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
                      Add Transaction Token ✨
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
                              Chain <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              name="chainName"
                              required
                              Value={transaction?.chainName}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Icon
                            </label>

                            <div
                              onClick={imageHandler}
                              className="border-dotted border-2 p-16"
                            >
                              <img
                                width={200}
                                src={file ? file : transaction?.icon}
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
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Token Type{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              name="tokenType"
                              required
                              Value={transaction?.tokenType}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Token <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              name="token"
                              required
                              Value={transaction?.token}
                            />
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Contract address
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              name="contractAddress"
                              required
                              Value={transaction?.contractAddress}
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Accuracy <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center">
                              <span
                                className="bg-gray-200 px-3 py-1 border"
                                onClick={handleAccurecyDecrease}
                              >
                                -
                              </span>

                              <input
                                id="card-address"
                                className="form-input w-full"
                                type="number"
                                placeholder="Please enter"
                                readOnly
                                value={accuracys}
                                min={0}
                              />
                              <span
                                className="bg-gray-200 px-3 py-1 border"
                                onClick={() => setAccuracy((prev) => prev + 1)}
                              >
                                +
                              </span>
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

                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              USD tex change rate
                              <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="number"
                              name="usdChangeRate"
                              required
                              Value={transaction?.usdChangeRate}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-6 my-5">
                        <Link to="/system/transaction-currency">
                          <button
                            className="bg-blue-500 text-white rounded-lg p-2"
                            type=""
                          >
                            Indeed Set
                          </button>
                        </Link>
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

export default EditTransactionToken;
