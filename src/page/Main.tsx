import React from 'react';
import '../asset/style/main.css';
import {useNavigate} from "react-router-dom";

const Main = () => {
  const naviation = useNavigate();
  return (
      <>
        <div id="main">
          Hello Main Page
          <button onClick={() => naviation("/axios")}>
            move to axios page
          </button>
        </div>
      </>
  );
};

export default Main;
