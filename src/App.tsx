import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/Login.page";

import UserRouter from "./routes/memepages/UserRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
