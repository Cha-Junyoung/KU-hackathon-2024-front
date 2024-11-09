import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../page/Main";
import AxiosTest from "../page/AxiosTest";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/axios" element={<AxiosTest />} />
          {/*<Route path="about" element={<About />} />*/}
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
