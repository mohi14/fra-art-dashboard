import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import axios from "../../utils/axios";

const EditAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const [admin, setAdmin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const permission = form.permission.value;

    const info = {
      name,
      email,
      password,
      permission: Number(permission),
      id,
    };

    axios.post(`/admin-api/edit-admin/${id}`, info).then((res) => {
      if (res.status === 200) {
        navigate("/system/administrator");
      }
    });
  };

  useEffect(() => {
    axios.get(`/admin-api/getAdmin/${id}`).then((res) => setAdmin(res.data));
  }, []);
  console.log(admin);
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
                    Add information type
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="business-id"
                        >
                          <span className="text-red-600">*</span> Name
                        </label>
                        <input
                          className="form-input w-full"
                          type="text"
                          placeholder="Please enter name"
                          name="name"
                          required
                          // onChange={(e) => setName(e.target.value)}
                          Value={admin?.name}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="business-id"
                        >
                          <span className="text-red-600">*</span> Email
                        </label>
                        <input
                          className="form-input w-full"
                          name="email"
                          type="email"
                          placeholder="Please enter email"
                          required
                          Value={admin?.email}
                          // onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="business-id"
                        >
                          <span className="text-red-600">*</span> Password
                        </label>
                        <input
                          className="form-input w-full"
                          type="password"
                          placeholder="Please enter password"
                          name="password"

                          // onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="location"
                        >
                          <span className="text-red-600">*</span> Permission
                        </label>
                        <select
                          className="w-full border-none"
                          name="permission"
                        >
                          <option selected={admin?.permission === 0} value={0}>
                            Disable
                          </option>
                          <option selected={admin?.permission === 1} value={1}>
                            Editable
                          </option>
                          <option selected={admin?.permission === 2} value={2}>
                            Supper Admin
                          </option>
                        </select>
                      </div>
                    </div>
                    <footer>
                      <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                        <div className="flex self-end">
                          <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                            <Link to="/content/information-type">
                              IndeedSet
                            </Link>
                          </button>
                          <button
                            className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                            //   disabled={!language || !name}
                          >
                            TakeEliminate
                          </button>
                        </div>
                      </div>
                    </footer>
                  </form>
                  {/* Panel footer */}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditAdmin;
