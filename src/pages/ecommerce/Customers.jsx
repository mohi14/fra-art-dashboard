import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import DeleteButton from "../../partials/actions/DeleteButton";
import DateSelect from "../../components/DateSelect";
import FilterButton from "../../components/DropdownFilter";
import CustomersTable from "../../partials/customers/CustomersTable";
import PaginationClassic from "../../components/PaginationClassic";

function Customers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
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
            <div className="sm:flex flex-wrap gap-8 sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Product List ✨
                </h1>
              </div>

              <div>
                <label className="mr-2" for="status">
                  Chain
                </label>
                <select className="border-none" name="status" id="status">
                  <option>BSCTest</option>
                  <option>Japan</option>
                  <option>Bangla</option>
                </select>
              </div>

              <div>
                <label className="mr-2" for="status">
                  Name
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="Please enter a name"
                />
              </div>

              <div>
                <label className="mr-2" for="status">
                  Owner
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="Please enter owner"
                />
              </div>
              <div>
                <label className="mr-2" for="status">
                  Status
                </label>
                <select className="border-none" name="status" id="status">
                  <option>Please select a status</option>
                  <option>Japan</option>
                  <option>Bangla</option>
                </select>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Creation time
                </label>
                <input className="border-none" type="date" />
              </div>
            </div>

            {/* Table */}
            <CustomersTable selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customers;
