import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import ShopCards05 from "../../partials/ecommerce/ShopCards05";
import DoubleRecharts from "../../partials/ecommerce/DoubleRecharts";
import FintechCard03 from "../../partials/fintech/FintechCard03";
import FintechCard01 from "../../partials/fintech/FintechCard01";

const Home = () => {
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page content */}
            <div>
              {/* Cards 5 (Popular Categories) */}
              <div className="mt-8">
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">
                  Popular Categories
                </h2>
                <div className="grid grid-cols-12 gap-6">
                  <ShopCards05 />
                </div>
              </div>

           
                <div className="grid grid-cols-2 gap-6 my-12">
                  <FintechCard03/>
                  <FintechCard01/>
                </div>
                {/* <DoubleRecharts /> */}
             
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
