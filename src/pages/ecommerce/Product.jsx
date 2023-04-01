import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

import ProductImage from "../../images/product-image.jpg";
import User03 from "../../images/user-32-03.jpg";
import User04 from "../../images/user-32-04.jpg";
import User05 from "../../images/user-32-05.jpg";
import User07 from "../../images/user-32-07.jpg";
import Related01 from "../../images/related-product-01.jpg";
import Related02 from "../../images/related-product-02.jpg";
import Related03 from "../../images/related-product-03.jpg";

function Product() {
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* newwwwwww */}
            <div className="max-w-5xl mx-auto">
              <div className="mb-5">
                <p>Preview</p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu0ClgqOojjQiBh6zqnkaH7B4SumOaLymUQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="mb-5">
                <p>Item</p>
                <img
                  className="w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu0ClgqOojjQiBh6zqnkaH7B4SumOaLymUQ&usqp=CAU"
                  alt=""
                />
              </div>
              <p className="text-3xl mb-4">Product parameters</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 ">
                <div>
                  <div className="flex justify-between mb-3">
                    <p>Category</p>
                    <p>Art</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p>Has it been chained</p>
                    <p>Not chained</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p>tokenId</p>
                    <p>13</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p>Contract6 currency</p>
                    <p>CTK</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p>Chain</p>
                    <p>BSCTest</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <p>Commodity status</p>
                    <p>Not on</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p>Is it officially released</p>
                    <p>No</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p>Group ID</p>
                    <p>14</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p>Token standard</p>
                    <p>ERC721</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-3xl mb-4">Product details</p>

                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                    External URL
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="text"
                    placeholder="External URL not added"
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                    Product description
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="text"
                    placeholder="No description"
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                    Owner
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="text"
                    placeholder="No owner"
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                  Creator
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="text"
                    placeholder="No creator"
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                  Contract address
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="text"
                    placeholder="0xhdfhg"
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                 Creation time
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="time"
                   
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                 Update time
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="time"
                   
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                 Trading time
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="time"
                   
                  />
                </div>
                <div className=" mb-3">
                  <label
                    className="block text-xl font-medium mb-1"
                    htmlFor="name"
                  >
                 Sales time
                  </label>
                  <input
                    id="name"
                    className="form-input w-full"
                    type="time"
                   
                  />
                </div>
              </div>
            </div>

          
          </div>
        </main>
      </div>
    </div>
  );
}

export default Product;
