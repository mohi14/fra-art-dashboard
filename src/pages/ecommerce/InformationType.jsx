import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "../../utils/axios";

const dataFormater = (data)=>{
const date = new Date(data).toDateString()
return date
}

const InformationType = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [pageNumber, setPageNumber]= useState(1)
  const [language,setLanguage]= useState("")
  const [name, setName]= useState("")

  const navigate = useNavigate()

  const [allCategories, setAllcategories]= useState("")

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  // get all categories
const getContentCategories = ()=>{
    axios.get(`/api/content/categories?pageNumber=${pageNumber}&language=${language}&name=${name}`)
    // axios.get(`/api/content/categories`)
    .then(res=>setAllcategories(res.data))
  }

  // delete a category
  const handleDelete=(id)=>{
if(window.confirm("Are you really want to delete this category?")){
  axios.delete(`/api/content/category/delete/${id}`)
  .then(res=>{if(res.status===200){
    alert(res.data.message)
    getContentCategories()
  }})
}
  }

  // filtering
  const handleLanguageChange =(event)=>{
    setLanguage(event.target.value)
    setPageNumber(1)
  }

  const handleNameChange = (event)=>{
    setName(event.target.value)
    setPageNumber(1)
  }

  console.log(allCategories)
  useEffect(()=>{
    getContentCategories()
  },[language, name, pageNumber])
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
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Types of information ✨
                </h1>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Languages
                </label>
                <select className="border-none" name="status" id="status" onChange={ handleLanguageChange}>
                <option value=''  >All</option>
                  <option value="en">English</option>
                  <option value="ja">Japanese</option>
                  
                </select>
              </div>

              <div>
                <label className="mr-2" for="status">
                  Information category
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter information type"
                  onChange={handleNameChange}
                />
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <Link to="/content/add-info" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Newly added</span>
                </Link>
              </div>
            </div>

            {/* Table */}
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full divide-y divide-slate-200">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Languages</div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Information category name
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Superior consultation
                      </div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Creation time
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Operation</div>
                    </th>
                  </tr>
                </thead>

                {/* Table body */}
                <tbody className="text-sm">
                {allCategories && allCategories.length>0 && allCategories.map(categories=>  <tr>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>{categories?.language === "ja"?"Japanese":"English"}</div>
                    </td>

                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>{categories?.name}</div>
                    </td>

                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div></div>
                    </td>

                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>{categories?.createdAt}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="space-x-1">
                        <button className="text-slate-400 hover:text-slate-500 rounded-full">
                         <Link to={`/content/edit-info/${categories?._id}`}> 
                         <span className="sr-only">Edit</span>
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                          >
                            <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                          </svg>
                          </Link>
                        </button>

                        <button className="text-rose-500 hover:text-rose-600 rounded-full" onClick={()=>handleDelete(categories?._id)}>
                          <span className="sr-only">Delete</span>
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                          >
                            <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                            <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>)}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic setPageNumber={setPageNumber}pageNumber={pageNumber} allCategories={allCategories}/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InformationType;
