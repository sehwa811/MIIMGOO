import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage/Login.page";

import KakaoLoginPage from "./routes/LoginPage/KakaoLogin.page";
import ScrollToTop from "./ScrollTop";
import Navigation from "./components/Navigation/navigation.component";
import HomePage from "./routes/Homepage/Home.page";
import Detail from "./routes/DetailPage/Detail.page";
import BookmarksPage from "./routes/BookmarkPage/Bookmarks.page";
import SearchPage from "./routes/Searchpage/Search.page";
import SearchResultPage from "./routes/Searchpage/SearchResult.page";
import AccoutPage from "./routes/AccountPage/Account.page";
import AdminPage from "./routes/admin/Admin.page";
import NotFound from "./components/basics/NotFound.component";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/social/kakao" element={<KakaoLoginPage />} />

        <Route element={<Navigation />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:imageId" element={<Detail />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/account" element={<AccoutPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
