import React, {useState} from 'react';
import "../asset/style/login.css"
import {Button, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {API} from "../util/api";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

const LoginPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [nickName, setNickName] = useState<string>("")
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const requestBody = {
        email,
        password,
        "remember-me": true
      };
      await API.post("/login", requestBody,  {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      navigate("/diary");
    } catch (e) {
      alert(e);
    }

  }

  return (
      <>
        <div className="login-container">
          <div className="title">
            그대로
          </div>
          <div className="input-container">
            <span className="title">Email</span>
            <Input placeholder="Input Email" value={email} style={{width: "100%"}}
                   onChange={(e) => {
                     setEmail(e.target.value)
                   }}/>
          </div>
          <div className="input-container">
            <span className="title">Password</span>
            <Input.Password
                placeholder="Input Password"
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                value={password} onChange={(e) => {
              setPassword(e.target.value)
            }}/>

          </div>

          <div className="button-container">
            <Button type="text" style={{width: "100px", background: "#F67280", color: "white"}}
                    onClick={handleLogin}>로그인하기</Button>
            <Button type="text" style={{width: "100px"}}
                    onClick={() => navigate("/signup")}>회원가입</Button>
          </div>


        </div>
      </>)

}
export default LoginPage;
