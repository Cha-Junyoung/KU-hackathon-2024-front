import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "../page/StartPage";
import AxiosTest from "../page/AxiosTest";
import MainPage from "../page/MainPage";
import LoginPage from "../page/LoginPage";
import SignUpPage from "../page/SignUpPage";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main/*" element={<MainPage />} />
          <Route path="/axios" element={<AxiosTest />} />
          {/*<Route path="about" element={<About />} />*/}
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
