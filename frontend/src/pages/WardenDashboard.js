// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaUserCheck, FaClock } from "react-icons/fa";


// // function WardenDashboard() {
// //   const [visitors, setVisitors] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!localStorage.getItem("token")) {
// //       navigate("/login");
// //     }
// //     fetchVisitors();
// //   }, [navigate]);

// //   const fetchVisitors = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/getvisitor", {
// //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //       });
// //       setVisitors(res.data);
// //     } catch (err) {
// //       console.error("Error fetching visitors:", err);
// //     }
// //   };

// //   const approveVisitor = async (id) => {
// //     try {
// //       await axios.put(
// //         `http://localhost:5000/approvevisitor/${id}`,
// //         {},
// //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// //       );
// //       fetchVisitors();
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error approving visitor");
// //     }
// //   };

// //   const logout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   // Counts
// //   const totalCount = visitors.length;
// //   const approvedCount = visitors.filter((v) => v.status === "approved").length;
// //   const pendingCount = visitors.filter((v) => v.status !== "approved").length;

// //   return (
// //     <div className="flex h-screen bg-gray-100">
// //       {/* Sidebar */}
// //       {/* <aside className="w-64 bg-purple-700 text-white flex flex-col p-6">
// //         <h1 className="text-2xl font-bold mb-10 flex items-center space-x-2">
// //           <span>🏠</span> <span>Warden</span>
// //         </h1>

// //         <nav className="flex flex-col space-y-4">
// //           <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
// //             <FaHome /> <span>Dashboard</span>
// //           </a>
// //           <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
// //             <FaUsers /> <span>Visitors</span>
// //           </a>
// //           <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
// //             <FaCog /> <span>Settings</span>
// //           </a>
// //         </nav>

// //         <button
// //           onClick={logout}
// //           className="mt-auto flex items-center space-x-3 text-red-300 hover:text-red-500"
// //         >
// //           <FaSignOutAlt /> <span>Logout</span>
// //         </button>
// //       </aside> */}
// //       {/* Sidebar */}
// // <aside className="w-64 bg-gradient-to-b from-purple-800 via-purple-700 to-purple-900 text-white flex flex-col p-6 shadow-lg">
// //   <h1 className="text-2xl font-bold mb-10 flex items-center space-x-2">
// //     <span className="bg-white text-purple-700 px-2 py-1 rounded-lg">🏠</span>
// //     <span>Warden</span>
// //   </h1>

// //   <nav className="flex flex-col space-y-4">
// //     <a
// //       href="#"
// //       className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-600 transition"
// //     >
// //       <FaHome /> <span>Dashboard</span>
// //     </a>
// //     <a
// //       href="#"
// //       className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-600 transition"
// //     >
// //       <FaUsers /> <span>Visitors</span>
// //     </a>
// //     <a
// //       href="#"
// //       className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-600 transition"
// //     >
// //       <FaCog /> <span>Settings</span>
// //     </a>
// //   </nav>

// //   <div className="mt-auto">
// //     <button
// //       onClick={logout}
// //       className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
// //     >
// //       <FaSignOutAlt /> <span>Logout</span>
// //     </button>
// //   </div>
// // </aside>


// //       {/* Main Content */}
// //       <main className="flex-1 p-6 overflow-y-auto">
// //         {/* Topbar */}
// //         <div className="flex justify-between items-center mb-6">
// //           <input
// //             type="text"
// //             placeholder="Search visitors..."
// //             className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
// //           />
// //           <div className="flex items-center space-x-3">
// //             <span className="font-semibold">Warden</span>
// //             <div className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-purple-700 bg-gray-200">
// //               WA
// //             </div>
// //           </div>
// //         </div>

// //         {/* Stats */}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
// //           <div className="bg-blue-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
// //             <FaUsers className="text-3xl" />
// //             <div>
// //               <p>Total Visitors</p>
// //               <p className="text-2xl font-bold">{totalCount}</p>
// //             </div>
// //           </div>
// //           <div className="bg-green-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
// //             <FaUserCheck className="text-3xl" />
// //             <div>
// //               <p>Approved</p>
// //               <p className="text-2xl font-bold">{approvedCount}</p>
// //             </div>
// //           </div>
// //           <div className="bg-yellow-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
// //             <FaClock className="text-3xl" />
// //             <div>
// //               <p>Pending</p>
// //               <p className="text-2xl font-bold">{pendingCount}</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Visitor List */}
// //         <h2 className="text-xl font-bold mb-4">Visitor List</h2>
// //         {visitors.length > 0 ? (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {visitors.map((v) => (
// //               <div
// //                 key={v.id}
// //                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
// //               >
// //                 {/* Avatar with initials */}
// //                 <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 mb-4">
// //                   {v.name
// //                     .split(" ")
// //                     .map((n) => n[0])
// //                     .join("")
// //                     .toUpperCase()}
// //                 </div>

// //                 <h3 className="text-lg font-bold">{v.name}</h3>
// //                 <p className="text-sm text-gray-600">Ward: {v.ward}</p>
// //                 <p className="text-sm text-gray-600">Email: {v.email}</p>
// //                 <p className="text-sm text-gray-600">Purpose: {v.purpose}</p>
// //                 <p className="text-sm text-gray-600 mb-3">
// //                   Check-in: {v.checkintime}
// //                 </p>

// //                 {/* Status */}
// //                 <span
// //                   className={`px-3 py-1 text-xs font-semibold rounded-full ${
// //                     v.status === "approved"
// //                       ? "bg-green-100 text-green-700"
// //                       : "bg-yellow-100 text-yellow-700"
// //                   }`}
// //                 >
// //                   {v.status}
// //                 </span>

// //                 {v.status !== "approved" && (
// //                   <button
// //                     onClick={() => approveVisitor(v.id)}
// //                     className="mt-3 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
// //                   >
// //                     Approve
// //                   </button>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <p className="text-gray-500 italic">No visitors found</p>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }

// // export default WardenDashboard;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaUserCheck, FaClock } from "react-icons/fa";

// function WardenDashboard() {
//   const [visitors, setVisitors] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");  // ✅ state for search
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     }
//     fetchVisitors();
//   }, [navigate]);

//   const fetchVisitors = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/getvisitor", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setVisitors(res.data);
//     } catch (err) {
//       console.error("Error fetching visitors:", err);
//     }
//   };

//   const approveVisitor = async (id) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/approvevisitor/${id}`,
//         {},
//         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//       );
//       fetchVisitors();
//     } catch (err) {
//       alert(err.response?.data?.message || "Error approving visitor");
//     }
//   };

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   // Counts
//   const totalCount = visitors.length;
//   const approvedCount = visitors.filter((v) => v.status === "approved").length;
//   const pendingCount = visitors.filter((v) => v.status !== "approved").length;

//   // ✅ Filter visitors by search query
//   const filteredVisitors = visitors.filter((v) =>
//     v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     v.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     v.purpose.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gradient-to-b from-purple-700 to-indigo-800 text-white flex flex-col p-6 shadow-lg">
//         <h1 className="text-2xl font-bold mb-10 flex items-center space-x-2">
//           <span>🏠</span> <span>Warden</span>
//         </h1>

//         <nav className="flex flex-col space-y-4">
//           <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
//             <FaHome /> <span>Dashboard</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
//             <FaUsers /> <span>Visitors</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
//             <FaCog /> <span>Settings</span>
//           </a>
//         </nav>

//         <button
//           onClick={logout}
//           className="mt-auto flex items-center space-x-3 text-red-300 hover:text-red-500"
//         >
//           <FaSignOutAlt /> <span>Logout</span>
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         {/* Topbar */}
//         <div className="flex justify-between items-center mb-6">
//           <input
//             type="text"
//             placeholder="Search visitors..."
//             value={searchQuery}  // ✅ controlled input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <div className="flex items-center space-x-3">
//             <span className="font-semibold">Warden</span>
//             <div className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-purple-700 bg-gray-200">
//               WA
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//           <div className="bg-blue-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
//             <FaUsers className="text-3xl" />
//             <div>
//               <p>Total Visitors</p>
//               <p className="text-2xl font-bold">{totalCount}</p>
//             </div>
//           </div>
//           <div className="bg-green-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
//             <FaUserCheck className="text-3xl" />
//             <div>
//               <p>Approved</p>
//               <p className="text-2xl font-bold">{approvedCount}</p>
//             </div>
//           </div>
//           <div className="bg-yellow-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
//             <FaClock className="text-3xl" />
//             <div>
//               <p>Pending</p>
//               <p className="text-2xl font-bold">{pendingCount}</p>
//             </div>
//           </div>
//         </div>

//         {/* Visitor List */}
//         <h2 className="text-xl font-bold mb-4">Visitor List</h2>
//         {filteredVisitors.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredVisitors.map((v) => (
//               <div
//                 key={v.id}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//               >
//                 {/* Avatar with initials */}
//                 <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 mb-4">
//                   {v.name
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")
//                     .toUpperCase()}
//                 </div>

//                 <h3 className="text-lg font-bold">{v.name}</h3>
//                 <p className="text-sm text-gray-600">Ward: {v.ward}</p>
//                 <p className="text-sm text-gray-600">Email: {v.email}</p>
//                 <p className="text-sm text-gray-600">Purpose: {v.purpose}</p>
//                 <p className="text-sm text-gray-600 mb-3">
//                   Check-in: {v.checkintime}
//                 </p>

//                 {/* Status */}
//                 <span
//                   className={`px-3 py-1 text-xs font-semibold rounded-full ${
//                     v.status === "approved"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-yellow-100 text-yellow-700"
//                   }`}
//                 >
//                   {v.status}
//                 </span>

//                 {v.status !== "approved" && (
//                   <button
//                     onClick={() => approveVisitor(v.id)}
//                     className="mt-3 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//                   >
//                     Approve
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 italic">No visitors found</p>
//         )}
//       </main>
//     </div>
//   );
// }

// export default WardenDashboard;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaUserCheck, FaClock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function WardenDashboard() {
  const [visitors, setVisitors] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // ✅ loading state for approve button
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
    fetchVisitors();
  }, [navigate]);

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

  const approveVisitor = async (id) => {
    setLoadingId(id); // start loading
    try {
      await axios.put(
        `http://localhost:5000/approvevisitor/${id}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      toast.success("Visitor approved ✅");
      fetchVisitors();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error approving visitor ❌");
    } finally {
      setLoadingId(null); // end loading
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Counts
  const totalCount = visitors.length;
  const approvedCount = visitors.filter((v) => v.status === "approved").length;
  const pendingCount = visitors.filter((v) => v.status !== "approved").length;

  // Filtered visitors
  const filteredVisitors = visitors.filter(
    (v) =>
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-700 to-indigo-800 text-white flex flex-col p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-10 flex items-center space-x-2">
          <span>🏠</span> <span>Warden</span>
        </h1>

        <nav className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
            <FaHome /> <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
            <FaUsers /> <span>Visitors</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:text-gray-200">
            <FaCog /> <span>Settings</span>
          </a>
        </nav>

        <button
          onClick={logout}
          className="mt-auto flex items-center space-x-3 text-red-300 hover:text-red-500"
        >
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search visitors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex items-center space-x-3">
            <span className="font-semibold">Warden</span>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-purple-700 bg-gray-200">
              WA
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
            <FaUsers className="text-3xl" />
            <div>
              <p>Total Visitors</p>
              <p className="text-2xl font-bold">{totalCount}</p>
            </div>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
            <FaUserCheck className="text-3xl" />
            <div>
              <p>Approved</p>
              <p className="text-2xl font-bold">{approvedCount}</p>
            </div>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
            <FaClock className="text-3xl" />
            <div>
              <p>Pending</p>
              <p className="text-2xl font-bold">{pendingCount}</p>
            </div>
          </div>
        </div>

        {/* Visitor List */}
        <h2 className="text-xl font-bold mb-4">Visitor List</h2>
        {filteredVisitors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVisitors.map((v) => (
              <div
                key={v.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 mb-4">
                  {v.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                </div>

                <h3 className="text-lg font-bold">{v.name}</h3>
                <p className="text-sm text-gray-600">Ward: {v.ward}</p>
                <p className="text-sm text-gray-600">Email: {v.email}</p>
                <p className="text-sm text-gray-600">Purpose: {v.purpose}</p>
                <p className="text-sm text-gray-600 mb-3">Check-in: {v.checkintime}</p>

                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    v.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {v.status}
                </span>

                {v.status !== "approved" && (
                  <button
                    onClick={() => approveVisitor(v.id)}
                    disabled={loadingId === v.id}
                    className={`mt-3 w-full py-2 rounded-lg text-white ${
                      loadingId === v.id
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700"
                    } transition`}
                  >
                    {loadingId === v.id ? "Approving..." : "Approve"}
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No visitors found</p>
        )}
      </main>
    </div>
  );
}

export default WardenDashboard;
