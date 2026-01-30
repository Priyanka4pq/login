// import { useState } from "react";

// export default function Login1() {
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//     remember: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 px-4">
      
//       <div
//         className="relative w-full max-w-5xl h-[520px] rounded-xl overflow-hidden shadow-xl
//                    bg-[url('/login-bg.jpg')] bg-cover bg-center"
//       >
        
//        {/* dark */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="absolute inset-0 flex items-center justify-end md:pr-12">
          
//           <div className="relative w-full max-w-sm bg-slate-900/90 backdrop-blur
//                           p-8 rounded-xl text-white">
            
//             <h2 className="text-2xl font-semibold mb-1">
//               Welcome
//             </h2>
//             <p className="text-gray-400 mb-6">
//               Please login to your account
//             </p>

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={form.username}
//                 onChange={handleChange}
//                 className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-2
//                            focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />

//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-2
//                            focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />

//               <div className="flex items-center justify-between text-sm">
//                 <label className="flex items-center gap-2 text-gray-300">
//                   <input
//                     type="checkbox"
//                     name="remember"
//                     checked={form.remember}
//                     onChange={handleChange}
//                     className="accent-indigo-500"
//                   />
//                   Remember me
//                 </label>

//                 <button className="text-indigo-400 hover:underline">
//                   Forgot Password?
//                 </button>
//               </div>

//               <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md font-medium">
//                 Login
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";

export default function Login1() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 px-4">
      
      {/* MAIN CONTAINER */}
      <div
        className="relative w-full max-w-5xl h-[520px] rounded-xl overflow-hidden shadow-xl
                   bg-[url('/login-bg.jpg')] bg-cover bg-center"
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* RIGHT LOGIN SECTION */}
        <div className="absolute inset-0 flex items-center justify-end md:pr-12">
          
          <div
            className="relative w-full max-w-sm bg-slate-900/90 backdrop-blur
                       p-8 rounded-xl text-white"
          >
            
            {/* HEADING */}
            <h2 className="text-2xl font-semibold mb-1">
              Welcome
            </h2>
            <p className="text-gray-400 mb-6">
              Please login to your account
            </p>

            {/* FORM */}
            <div className="space-y-4">
              
              {/* USERNAME */}
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* PASSWORD */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* OPTIONS */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-300">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="accent-indigo-500"
                  />
                  Remember me
                </label>

                <button className="text-indigo-400 hover:underline">
                  Forgot Password?
                </button>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md font-medium">
                Login
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
