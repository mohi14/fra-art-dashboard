import React, { useState } from "react";

function NotificationsPanel() {
  const [comments, setComments] = useState(true);
  const [messages, setMessages] = useState(true);
  const [mentions, setMentions] = useState(false);

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        {/* Page header */}
        <div className="sm:flex flex-wrap gap-8 sm:justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
              Notification switch ✨
            </h1>
          </div>
          <div>
            <label className="mr-2" for="status">
              Chain
            </label>
            <select name="status" id="status">
              <option>please select main chain</option>
              <option>English</option>
              <option>Japan</option>
              <option>Bangla</option>
            </select>
          </div>
          <div>
            <label className="mr-2" for="status">
              Notice title
            </label>
            <select name="status" id="status">
              <option>Notice title</option>
              <option>English</option>
              <option>Japan</option>
              <option>Bangla</option>
            </select>
          </div>

          <div>
            <label className="mr-2" for="status">
              Address
            </label>
            <input type="text" placeholder="please enter the address" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-slate-200">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Chain</div>
                </th>

                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">User</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Notice title</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Address</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>

                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Creation time</div>
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="text-sm">
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div>BSCTest</div>
                </td>

                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div>Scky</div>
                </td>

                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div>Expiration of sale</div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div>0xhjg...jkhjh</div>
                </td>

                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="flex items-center ml-4">
                    <div className="text-sm text-slate-400 italic mr-2">
                      {comments ? "On" : "Off"}
                    </div>
                    <div className="form-switch">
                      <input
                        type="checkbox"
                        id="comments"
                        className="sr-only"
                        checked={comments}
                        onChange={() => setComments(!comments)}
                      />
                      <label className="bg-slate-400" htmlFor="comments">
                        <span
                          className="bg-white shadow-sm"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Enable smart sync</span>
                      </label>
                    </div>
                  </div>
                </td>

                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div>2022-01-25</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* General */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
            General
          </h3>
          <ul>
            <li className="flex justify-between items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div>
                <div className="text-slate-800 font-semibold">
                  Comments and replies
                </div>
                <div className="text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 italic mr-2">
                  {comments ? "On" : "Off"}
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="comments"
                    className="sr-only"
                    checked={comments}
                    onChange={() => setComments(!comments)}
                  />
                  <label className="bg-slate-400" htmlFor="comments">
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div>
                <div className="text-slate-800 font-semibold">Messages</div>
                <div className="text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 italic mr-2">
                  {messages ? "On" : "Off"}
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="messages"
                    className="sr-only"
                    checked={messages}
                    onChange={() => setMessages(!messages)}
                  />
                  <label className="bg-slate-400" htmlFor="messages">
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div>
                <div className="text-slate-800 font-semibold">Mentions</div>
                <div className="text-sm">
                  Excepteur sint occaecat cupidatat non in culpa qui officia
                  deserunt mollit.
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 italic mr-2">
                  {mentions ? "On" : "Off"}
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="mentions"
                    className="sr-only"
                    checked={mentions}
                    onChange={() => setMentions(!mentions)}
                  />
                  <label className="bg-slate-400" htmlFor="mentions">
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Shares */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
            Shares
          </h3>
          <ul>
            <li className="flex justify-between items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div>
                <div className="text-slate-800 font-semibold">
                  Shares of my content
                </div>
                <div className="text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm">
                  Manage
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div>
                <div className="text-slate-800 font-semibold">Team invites</div>
                <div className="text-sm">
                  Excepteur sint occaecat cupidatat non in culpa qui officia
                  deserunt mollit.
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm">
                  Manage
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div>
                <div className="text-slate-800 font-semibold">
                  Smart connection
                </div>
                <div className="text-sm">
                  Excepteur sint occaecat cupidatat non in culpa qui officia
                  deserunt mollit.
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 italic mr-2 hidden md:block">
                  Active
                </div>
                <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm text-rose-500">
                  Disable
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
              Cancel
            </button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NotificationsPanel;
