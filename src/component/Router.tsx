import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../page/Main";
import AxiosTest from "../page/AxiosTest";
import Diary from "../page/Diary";
import LoginPage from "../page/LoginPage";
import SignUpPage from "../page/SignUpPage";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/axios" element={<AxiosTest />} />
          {/*<Route path="about" element={<About />} />*/}
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
