import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axiosIntance from "../../utils/axios";
import axios from "../../utils/axios";

const EditInformation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const {id}= useParams()

  const navigate = useNavigate()

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const [category, setCategory]= useState("")

  const [language, setLanguage]= useState(category?.language)
  const [name, setName]= useState(category?.name)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const info = {
      language: language ? language : category?.language,
      name: name? name:category?.name,
      id
    }
    console.log(info)
    axios.post("/api/content/category/update",info)
    .then(res=>{
      if(res.status===200){
        alert("Category Edited Successfully")
        navigate("/content/information-type")
      }
   
    })
  }

  useEffect(()=>{
    axiosIntance.get(`/api/content/category/${id}`)
    .then(res=>{
        setCategory(res.data)
        setLanguage(res.data?.language)
        setName(res.data?.name)
    })
  },[])
  console.log(category, "catedgggjg")
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
                    Edit information type
                  </h2>

                 <form onSubmit={handleSubmit}>
                 <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                    <div >
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        <span className="text-red-600">*</span> Languages
                      </label>
                      <select className="border-none" required onChange={(e)=>setLanguage(e.target.value)}>
                        <option value="ja" selected={category?.language ==="ja"}>Japanese</option>
                        <option value="en" selected={category?.language==="en"}>English</option>
                        {/* <option>C</option>
                        <option>D</option> */}
                      </select>
                    </div>
                    <div >
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="business-id"
                      >
                        <span className="text-red-600">*</span> Name
                      </label>
                      <input
                        className="form-input w-full"
                        type="text"
                        placeholder="Please enter information category name"
                        required
                        Value={category?.name}
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="location"
                      >
                        <span className="text-red-600">*</span> Superior
                        consultation
                      </label>
                      <select className="w-full border-none">
                        <option>Please select superior consultation</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                      </select>
                    </div>
                    
                  </div>
                  <footer>
                    <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                      <div className="flex self-end">
                        <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                          <Link to="/content/information-type">IndeedSet</Link>
                        </button>
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" disabled={!language || !name} >
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

export default EditInformation;
