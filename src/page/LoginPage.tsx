import React, {useState} from 'react';
import "../asset/style/login.css"
import {Button, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {API} from "../util/api";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

const LoginPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const requestBody = {
        email,
        password,
        "remember-me": true
      };
      const res = await API.post("/login", requestBody, {
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
      })
      const {accessToken, refreshToken} = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/main/diary");
    } catch (e: any) {
      alert(e?.response?.data?.message);
    }

  }

  return (
      <>
        <div className="login-container">
          <div className="title">
            아:경
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
            }}
                onPressEnter={handleLogin}/>

          </div>

          <div className="button-container">
            <Button type="text" style={{width: "100px"}} color={"primary"} variant={"outlined"}
                    onClick={handleLogin}>로그인</Button>
            <Button type="text" style={{width: "100px"}} variant={"outlined"} color={"default"}
                    onClick={() => navigate("/signup")}>회원가입</Button>
          </div>


        </div>
      </>)

}
export default LoginPage;
