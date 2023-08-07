import { Routes, Route } from "react-router-dom";
import HomePage from "./Home.page";
import BookmarksPage from "./Bookmarks.page";
import SearchPage from "./Search.page";
import AdminPage from "../admin/Admin.page";
import AccoutPage from "../account/Account.page";

const ContentsRouters = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/account" element={<AccoutPage />} />
    </Routes>
  );
};

export default ContentsRouters;
