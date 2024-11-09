import React, {useState} from 'react';
import "../asset/style/login.css"
import {Button, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {API} from "../util/api";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';


const SignUpPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [nickname, setNickname] = useState<string>("")
  const navigate = useNavigate();

  const handleSignUpPage = async () => {
    try {
      const requestBody = {
        nickname,
        email,
        password,
      };
      const res = await API.post("/profile/join", requestBody)
      alert(res.data);
      navigate("/login");
    } catch (e: any) {
      alert(e?.response?.data?.message);
    }

  }

  return (
      <>
        <div className="login-container">
          <div className="title">
            회원가입
          </div>
          <div className="input-container">
            <span className="title">별칭</span>
            <Input placeholder="Input Nicname" value={nickname} style={{width: "100%"}}
                   onChange={(e) => {
                     setNickname(e.target.value)
                   }}/>
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
                onPressEnter={handleSignUpPage}/>

          </div>

          <div className="button-container">
            <Button type="text" style={{width: "100px", background: "#F67280", color: "white"}}
                    onClick={handleSignUpPage}>회원가입하기</Button>
          </div>


        </div>
      </>)

}
export default SignUpPage;
