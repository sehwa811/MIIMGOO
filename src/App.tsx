import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/Login.page";

import Others from "./routes/memepages/OtherRouters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
