import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookmarksPage from "./Bookmarks.page";
import SearchPage from "../searchpage/Search.page";
import AdminPage from "../admin/Admin.page";
import AccoutPage from "../account/Account.page";
import Detail from "../detailpage/Detail.page";

const ContentsRouters = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail/:imageId" element={<Detail />} /> {/* "/detail:imageID" */}
      <Route path="/bookmarks" element={<BookmarksPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/account" element={<AccoutPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default ContentsRouters;
