import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/Login.page";

import Others from "./routes/memepages/OtherRouters";
import NaverLoginPage from "./routes/social/NaverLogin.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/social/naver" element={<NaverLoginPage />} />
        <Route path="/*" element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
