import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookmarksPage from "../bookmarks/Bookmarks.page";
import SearchPage from "../searchpage/Search.page";
import AdminPage from "../admin/Admin.page";
import AccoutPage from "../account/Account.page";
import Detail from "../detailpage/Detail.page";
import SearchResultPage from "../searchpage/SearchResult.page";
import Loading404 from "../../components/basics/NotFound.component";
import NotFound from "../../components/basics/NotFound.component";

const ContentsRouters = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail/:imageId" element={<Detail />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search-result" element={<SearchResultPage />} />
      <Route path="/account" element={<AccoutPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default ContentsRouters;
