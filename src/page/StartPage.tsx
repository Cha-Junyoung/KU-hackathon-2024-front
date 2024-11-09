import React, {useEffect, useState} from 'react';
import "../asset/style/main.css"
import TypingTextComponent from "../component/TypingTextComponent";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {API} from "../util/api";


const intro: string[] = [
  "예술은 감정과 가치관을 공유하는 매개이다.",
  "예술은 인간의 내면을 비추고 연결하는 창이다.",
  "예술은 현실 너머의 상상을 통해 삶을 풍요롭게 한다."
]

const StartPage = () => {
  const [introMessage, setIntroMessage] = useState<string>("")

  const navigate = useNavigate();

  useEffect(() => {
    setIntroMessage(getRandomIntro())
  }, []);

  const getRandomIntro = (): string => {
    const randomIndex = Math.floor(Math.random() * intro.length);
    return intro[randomIndex];
  }

  const handleStart = async () => {
    try {
      const params = new URLSearchParams();
      params.append('message', 'test login');
      await API.post(`/test/test-user?${params.toString()}`)
      navigate("/main/diary");
    } catch (e) {
      navigate("/login");
    }
  }

  return (<>
    <div>
      <div className="main-container">
        <div className="title">
          <TypingTextComponent text={introMessage} pauseInterval={5000} interval={100}/>
        </div>
        <div className="start-button">
          <Button color="default" variant="outlined"  style={{width: "200px", height: "50px", fontWeight:"bold", fontSize:"18px"}} onClick={handleStart}>
            시작하기
          </Button>
        </div>
      </div>

    </div>
  </>)
}

export default StartPage;
