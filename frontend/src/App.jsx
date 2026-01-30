import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Login1 from "./Login1.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path = "/login" element={<Login1 />}/>
    </Routes>
    </BrowserRouter>
  );
}
