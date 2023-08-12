import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/Login.page";

import Others from "./routes/memepages/OtherRouters";
import KakaoLoginPage from "./routes/social/KakaoLogin.page";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/social/kakao" element={<KakaoLoginPage />} />
        <Route path="/*" element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
