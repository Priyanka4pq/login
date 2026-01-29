// import { useState } from "react";

// export default function Login() {
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
//     <div className="min-h-screen w-full flex items-center justify-center bg-slate-900">
      
//       {/* MAIN BOX */}
//       <div className="w-full max-w-5xl h-[520px] bg-slate-800 rounded-xl shadow-xl flex overflow-hidden">
        
//         {/* LEFT SIDE (background section) */}
//         <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700">
//         </div>

//         {/* RIGHT SIDE (form section) */}
//         <div className="w-full md:w-1/2 bg-slate-900 flex items-center">
          
//           <div className="w-full px-8">
            
//             <h2 className="text-2xl font-semibold text-white mb-1">
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
//                 className="w-full bg-slate-800 text-white border border-slate-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />

//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full bg-slate-800 text-white border border-slate-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

//               <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium">
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

export default function Login() {
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
      
      {/* IMAGE CONTAINER */}
      <div
        className="relative w-full max-w-5xl h-[520px] rounded-xl overflow-hidden shadow-xl
                   bg-[url('/login-bg.jpg')] bg-cover bg-center"
      >
        
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* FORM OVER IMAGE */}
        <div className="absolute inset-0 flex items-center justify-end md:pr-12">
          
          <div className="relative w-full max-w-sm bg-slate-900/90 backdrop-blur
                          p-8 rounded-xl text-white">
            
            <h2 className="text-2xl font-semibold mb-1">
              Welcome
            </h2>
            <p className="text-gray-400 mb-6">
              Please login to your account
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

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
