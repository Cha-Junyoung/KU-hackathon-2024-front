import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../page/Main";
import AxiosTest from "../page/AxiosTest";
import Diary from "../page/Diary";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/axios" element={<AxiosTest />} />
          {/*<Route path="about" element={<About />} />*/}
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
