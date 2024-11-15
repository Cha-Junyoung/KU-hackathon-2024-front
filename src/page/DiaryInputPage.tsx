import React, {CSSProperties, useEffect, useState} from 'react';
import "../asset/style/diary_input.css"
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons';
import TypingTextComponent from "../component/TypingTextComponent";
import TextArea from "antd/es/input/TextArea";
import {API} from "../util/api";
import LoadingEmoji from "../component/LoadingEmoji";
import {useRecoilState} from "recoil";
import menuAtom from "../recoil/menu";
// import {useTypingAnime} from "../component/TypingTextComponent";

const progressButtonStyle: CSSProperties = {minWidth: "15px", height: "15px", marginRight: "15px"}


interface IQuestionList {
  question1: string;
  question2: string;
  question3: string;

}

const DiaryInputPage = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0)
  const [question, setQuestion] = useState<string[]>([])
  // const [answer, setAnswer] = useState<string[]>(["", "", ""])
  const [answer1, setAnswer1] = useState<string>("")
  const [answer2, setAnswer2] = useState<string>("")
  const [answer3, setAnswer3] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [menu, setMenu] = useRecoilState(menuAtom);
  const navigate = useNavigate();


  useEffect(() => {
    getRandomQuestions();
  }, []);

  const getRandomQuestions = async () => {
    try {
      const res = await API.get("/question/get-random-questions");
      const {question1, question2, question3} = res.data;
      const tempQustion = [];
      tempQustion.push(question1);
      tempQustion.push(question2);
      tempQustion.push(question3);
      setQuestion(tempQustion);
    } catch (e: any) {
      console.log(e);
      if (e?.response?.status === 401) {
        navigate("/login", {replace: true});
      }
    }

  }

  const handleSubmit = async () => {
    try {
      if (answer1.length == 0){
        alert("첫 번째 질문을 채워주세요");
        return;
      }
      if (answer2.length == 0){
        alert("두 번째 질문을 채워주세요");
        return;
      }
      if (answer3.length == 0){
        alert("세 번째 질문을 채워주세요");
        return;
      }
      setIsLoading(true);
      const body = {
        question1: question[0],
        question2: question[1],
        question3: question[2],
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
      }
      await API.post("/question", body);
      navigate("/main/diary")
      setMenu({id: "1"})
      setIsLoading(false);
      // 현재 경로로 리디렉션하여 페이지를 리로드하는 효과
      navigate(0);
    } catch (e: any) {
      alert(e?.response?.data?.message);
      setIsLoading(false);
      // 현재 경로로 리디렉션하여 페이지를 리로드하는 효과
      navigate(0);
    }
  }


  return (<>
    <div className="diary-input-cotainer">
      <div className="content">
        <div className="move-arrow">
          {step !== 0 && <DoubleLeftOutlined style={{fontSize: "20px"}} onClick={() => {
            setStep((prevState) => {
              return prevState > 0 ? (prevState - 1) as 0 | 1 | 2 : prevState;
            })
          }}/>}
        </div>
        <div style={{width: "100%", marginTop: "70px", overflow: "visible", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className="question" style={{width: "100%", overflow: "visible", display: "flex", justifyContent: "center"}}>
            {/*<span>Q. 질문을 입니다.</span>*/}
            {question[step] &&
                <TypingTextComponent text={question[step]} interval={30} key={step}/>}
          </div>
          <div className="answer" style={{width: "600px"}}>
            {step === 0 && <TextArea rows={3} value={answer1} onChange={(e) => {
              setAnswer1(e.target.value);
            }} style={{fontSize: "20px", borderColor:"#C6E7FF", outline: "none", margin: "10px 0px 50px"}} key={step}
            />}
            {step === 1 && <TextArea rows={3} value={answer2} onChange={(e) => {
              setAnswer2(e.target.value);
            }} style={{fontSize: "20px", borderColor:"#C6E7FF", outline: "none", margin: "10px 0px 50px"}} key={step}
            />}
            {step === 2 && <TextArea rows={3} value={answer3} onChange={(e) => {
              setAnswer3(e.target.value);
            }} style={{fontSize: "20px", borderColor:"#C6E7FF", outline: "none", margin: "10px 0px 50px"}} key={step}
            />}
          </div>
        </div>
        <div className="move-arrow">
          {step !== 2 && <DoubleRightOutlined style={{fontSize: "20px"}} onClick={() => {
            setStep((prevState) => {
              return prevState < 2 ? (prevState + 1) as 0 | 1 | 2 : prevState;
            })
          }}/>}
        </div>

      </div>
      <div style={{marginTop: "25px"}}>
        <Button  type={"primary"} shape="circle"
                onClick={() => {
                  setStep(0)
                }}
                style={progressButtonStyle}/>
        <Button type={step > 0 ? "primary" : "default"} shape="circle"
                onClick={() => {
                  setStep(1)
                }}
                style={progressButtonStyle}/>
        <Button type={step > 1 ? "primary" : "default"} shape="circle"
                onClick={() => {
                  setStep(2)
                }}
                style={progressButtonStyle}/>
      </div>
      {step === 2 && <div>
        <Button type="text"
                variant="outlined"
                style={{width: "100px", fontSize: "20px", marginTop: "15px", marginRight: "15px"}}
                onClick={handleSubmit}>제출</Button>
      </div>}
      {isLoading &&
          <LoadingEmoji/>
      }
    </div>
  </>)
}

export default DiaryInputPage;
