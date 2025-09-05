// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client"; 



// function StaffDashboard() {
//   const [visitors, setVisitors] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     } else {
//       fetchVisitors();
//     }
//   }, []);

//   const fetchVisitors = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/getvisitor", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setVisitors(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const addVisitor = async (e) => {
//     e.preventDefault();
//     const formData = {
//       name: e.target.name.value,
//       wardname: e.target.wardname.value,
//       visitpurpose: e.target.visitpurpose.value,
//       email: e.target.email.value,
//       security: e.target.security.value,
//     };
//     try {
//       await axios.post("http://localhost:5000/addvisitor", formData, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       alert("Visitor added successfully ✅");
//       e.target.reset();
//       fetchVisitors();
//     } catch (err) {
//       alert(err.response?.data?.message || "Error adding visitor ❌");
//     }
//   };

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   // Stats
//   const pendingCount = visitors.filter((v) => v.status === "pending").length;
//   const approvedCount = visitors.filter((v) => v.status === "approved").length;
//   const rejectedCount = visitors.filter((v) => v.status === "rejected").length;

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white flex flex-col p-6 shadow-lg">
//         <h2 className="text-3xl font-bold mb-10 tracking-wide">Staff Panel</h2>
//         <nav className="flex flex-col gap-6">
//           <div className="bg-blue-800 p-5 rounded-xl shadow hover:bg-blue-700 transition">
//             <p className="text-sm text-blue-200">Pending</p>
//             <p className="text-2xl font-bold">{pendingCount}</p>
//           </div>
//           <div className="bg-blue-800 p-5 rounded-xl shadow hover:bg-blue-700 transition">
//             <p className="text-sm text-blue-200">Approved</p>
//             <p className="text-2xl font-bold">{approvedCount}</p>
//           </div>
//           <div className="bg-blue-800 p-5 rounded-xl shadow hover:bg-blue-700 transition">
//             <p className="text-sm text-blue-200">Rejected</p>
//             <p className="text-2xl font-bold">{rejectedCount}</p>
//           </div>
//         </nav>
//         <button
//           onClick={logout}
//           className="mt-auto bg-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10">
//         {/* Add Visitor Form */}
//         <div className="bg-white p-8 rounded-2xl shadow-md mb-10 border border-gray-200">
//           <h3 className="text-2xl font-semibold mb-6 text-gray-800">
//             Add Visitor
//           </h3>
//           <form onSubmit={addVisitor} className="grid grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               name="wardname"
//               placeholder="Ward Name"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               name="visitpurpose"
//               placeholder="Purpose"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               name="security"
//               placeholder="Security Name"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               className="col-span-2 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
//             >
//               ➕ Add Visitor
//             </button>
//           </form>
//         </div>

//         {/* Visitors List */}
//         <h3 className="text-3xl font-bold mb-6 text-gray-700">Visitors</h3>
//         <div className="grid grid-cols-3 gap-8">
//           {/* Pending */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3 text-yellow-600">
//               Pending
//             </h4>
//             <div className="space-y-4">
//               {visitors.filter((v) => v.status === "pending").map((v) => (
//                 <div
//                   key={v.id || v._id}
//                   className="bg-white p-5 rounded-xl shadow border-l-4 border-yellow-400"
//                 >
//                   <p className="font-semibold text-gray-800">{v.name}</p>
//                   <p className="text-sm text-gray-500">
//                     Ward: {v.wardname || v.ward}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Purpose: {v.visitpurpose || v.purpose}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Approved */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3 text-green-600">
//               Approved
//             </h4>
//             <div className="space-y-4">
//               {visitors.filter((v) => v.status === "approved").map((v) => (
//                 <div
//                   key={v.id || v._id}
//                   className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500"
//                 >
//                   <p className="font-semibold text-gray-800">{v.name}</p>
//                   <p className="text-sm text-gray-500">
//                     Ward: {v.wardname || v.ward}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Purpose: {v.visitpurpose || v.purpose}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Rejected */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3 text-red-600">Rejected</h4>
//             <div className="space-y-4">
//               {visitors.filter((v) => v.status === "rejected").map((v) => (
//                 <div
//                   key={v.id || v._id}
//                   className="bg-white p-5 rounded-xl shadow border-l-4 border-red-500"
//                 >
//                   <p className="font-semibold text-gray-800">{v.name}</p>
//                   <p className="text-sm text-gray-500">
//                     Ward: {v.wardname || v.ward}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Purpose: {v.visitpurpose || v.purpose}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );

// }
// export default StaffDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// function StaffDashboard() {
//   const [visitors, setVisitors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     } else {
//       fetchVisitors();
//     }
//   }, []);

//   const fetchVisitors = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/getvisitor", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setVisitors(res.data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch visitors");
//     }
//   };

//   const addVisitor = async (e) => {
//     e.preventDefault();
//     const formData = {
//       name: e.target.name.value,
//       wardname: e.target.wardname.value,
//       visitpurpose: e.target.visitpurpose.value,
//       email: e.target.email.value,
//       security: e.target.security.value,
//     };

//     try {
//       setLoading(true);
//       await axios.post("http://localhost:5000/addvisitor", formData, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       toast.success(`Visitor ${formData.name} added successfully ✅`);
//       e.target.reset();
//       fetchVisitors();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Error adding visitor ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   // Stats
//   const pendingCount = visitors.filter((v) => v.status === "pending").length;
//   const approvedCount = visitors.filter((v) => v.status === "approved").length;
//   const rejectedCount = visitors.filter((v) => v.status === "rejected").length;

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white flex flex-col p-6 shadow-lg">
//         <h2 className="text-3xl font-bold mb-10 tracking-wide">Staff Panel</h2>
//         <nav className="flex flex-col gap-6">
//           <div className="bg-blue-800 p-5 rounded-xl shadow hover:bg-blue-700 transition">
//             <p className="text-sm text-blue-200">Pending</p>
//             <p className="text-2xl font-bold">{pendingCount}</p>
//           </div>
//           <div className="bg-blue-800 p-5 rounded-xl shadow hover:bg-blue-700 transition">
//             <p className="text-sm text-blue-200">Approved</p>
//             <p className="text-2xl font-bold">{approvedCount}</p>
//           </div>
//           <div className="bg-blue-800 p-5 rounded-xl shadow hover:bg-blue-700 transition">
//             <p className="text-sm text-blue-200">Rejected</p>
//             <p className="text-2xl font-bold">{rejectedCount}</p>
//           </div>
//         </nav>
//         <button
//           onClick={logout}
//           className="mt-auto bg-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10">
//         {/* Add Visitor Form */}
//         <div className="bg-white p-8 rounded-2xl shadow-md mb-10 border border-gray-200">
//           <h3 className="text-2xl font-semibold mb-6 text-gray-800">
//             Add Visitor
//           </h3>
//           <form onSubmit={addVisitor} className="grid grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               name="wardname"
//               placeholder="Ward Name"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               name="visitpurpose"
//               placeholder="Purpose"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               name="security"
//               placeholder="Security Name"
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className={`col-span-2 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Adding Visitor..." : "➕ Add Visitor"}
//             </button>
//           </form>
//         </div>

//         {/* Visitors List */}
//         <h3 className="text-3xl font-bold mb-6 text-gray-700">Visitors</h3>
//         <div className="grid grid-cols-3 gap-8">
//           {["pending", "approved", "rejected"].map((status) => (
//             <div key={status}>
//               <h4
//                 className={`text-lg font-semibold mb-3 ${
//                   status === "pending"
//                     ? "text-yellow-600"
//                     : status === "approved"
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {status.charAt(0).toUpperCase() + status.slice(1)}
//               </h4>
//               <div className="space-y-4">
//                 {visitors
//                   .filter((v) => v.status === status)
//                   .map((v) => (
//                     <div
//                       key={v.id || v._id}
//                       className={`bg-white p-5 rounded-xl shadow border-l-4 ${
//                         status === "pending"
//                           ? "border-yellow-400"
//                           : status === "approved"
//                           ? "border-green-500"
//                           : "border-red-500"
//                       }`}
//                     >
//                       <p className="font-semibold text-gray-800">{v.name}</p>
//                       <p className="text-sm text-gray-500">
//                         Ward: {v.wardname || v.ward}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         Purpose: {v.visitpurpose || v.purpose}
//                       </p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default StaffDashboard;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function StaffDashboard() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      fetchVisitors();
    }
  }, []);

  const fetchVisitors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getvisitor", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setVisitors(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch visitors");
    }
  };

  const addVisitor = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      wardname: e.target.wardname.value,
      visitpurpose: e.target.visitpurpose.value,
      email: e.target.email.value,
      security: e.target.security.value,
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/addvisitor", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      toast.success(`Visitor ${formData.name} added successfully ✅`);
      e.target.reset();
      fetchVisitors();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error adding visitor ❌");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Stats
  const pendingCount = visitors.filter((v) => v.status === "pending").length;
  const approvedCount = visitors.filter((v) => v.status === "approved").length;
  const rejectedCount = visitors.filter((v) => v.status === "rejected").length;

  const statusColors = {
    pending: "yellow-400",
    approved: "green-500",
    rejected: "red-500",
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-800 to-indigo-900 text-white flex flex-col p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-10 tracking-wide">Staff Panel</h2>
        <nav className="flex flex-col gap-6">
          <div className="bg-white/10 p-5 rounded-xl shadow hover:bg-white/20 transition flex justify-between items-center">
            <span>Pending</span>
            <span className="font-bold text-xl">{pendingCount}</span>
          </div>
          <div className="bg-white/10 p-5 rounded-xl shadow hover:bg-white/20 transition flex justify-between items-center">
            <span>Approved</span>
            <span className="font-bold text-xl">{approvedCount}</span>
          </div>
          <div className="bg-white/10 p-5 rounded-xl shadow hover:bg-white/20 transition flex justify-between items-center">
            <span>Rejected</span>
            <span className="font-bold text-xl">{rejectedCount}</span>
          </div>
        </nav>
        <button
          onClick={logout}
          className="mt-auto bg-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Add Visitor Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-10 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Add Visitor</h3>
          <form onSubmit={addVisitor} className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="wardname"
              placeholder="Ward Name"
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="visitpurpose"
              placeholder="Purpose"
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="security"
              placeholder="Security Name"
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={loading}
              className={`col-span-2 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Adding Visitor..." : "➕ Add Visitor"}
            </button>
          </form>
        </div>

        {/* Visitors List */}
        <h3 className="text-3xl font-bold mb-6 text-gray-700">Visitors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["pending", "approved", "rejected"].map((status) => (
            <div key={status} className="bg-gray-100 p-6 rounded-2xl shadow">
              <h4 className={`text-xl font-semibold mb-4 text-${statusColors[status]}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </h4>
              <div className="space-y-4">
                {visitors
                  .filter((v) => v.status === status)
                  .map((v) => (
                    <div
                      key={v.id || v._id}
                      className={`bg-white p-5 rounded-xl shadow border-l-4 border-${statusColors[status]} hover:scale-105 transform transition`}
                    >
                      <p className="font-semibold text-gray-800">{v.name}</p>
                      <p className="text-sm text-gray-500">Ward: {v.wardname || v.ward}</p>
                      <p className="text-sm text-gray-500">Purpose: {v.visitpurpose || v.purpose}</p>
                      <p className="text-xs text-gray-400 mt-1">{v.email}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default StaffDashboard;
