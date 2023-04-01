import React from "react";

const StartAuction = () => {
  return (
    <div className="w-1/3 mx-auto my-24">
      <form>
        <div className="space-y-4">
          {/* <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div> */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="country">
              Pledge token <span className="text-rose-500">*</span>
            </label>
            <select id="country" className="form-select w-full">
              <option>Please select pledge token</option>
              <option>USA</option>
              <option>Italy</option>
              <option>United Kingdom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Opening bid <span className="text-rose-500">*</span>
            </label>
            <input
              className="form-input w-full"
              type="text"
              placeholder="Please enter the starting price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              End time<span className="text-rose-500">*</span>
            </label>
            <input className="form-input w-full" type="time" />
          </div>
        </div>
        <div className="flex gap-3 justify-end mt-6">
          {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Send Reset Link</button> */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
            Determine
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartAuction;
