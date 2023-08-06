import { Routes, Route } from "react-router-dom";
import HomePage from "./Home.page";
import BookmarksPage from "./Bookmarks.page";
import SearchPage from "./Search.page";
import Navigation from "../../components/Navigation/navigation.component";
import AdminPage from "../admin/Admin.page";
import AccoutPage from "../account/Account.page";


const UserRouter = () => {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/accout" element={<AccoutPage />} />
      </Routes>
    </>
  );
};

export default UserRouter;