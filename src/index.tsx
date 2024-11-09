import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from "recoil";
import background from "./asset/image/start_page_background.jpeg";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
      <RecoilRoot>
        <div className="full-page" style={{
          // backgroundImage: `url(${background})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundColor: 'rgba(0, 0, 0, 0.5)', // 색상 + 투명도 적용
          // opacity: 0.5,
        }}>
          <App/>
        </div>
      </RecoilRoot>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
