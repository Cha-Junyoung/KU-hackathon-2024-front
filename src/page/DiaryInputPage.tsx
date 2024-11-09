import React, {CSSProperties, useEffect, useState} from 'react';
import "../asset/style/diary_input.css"
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons';
import TypingTextComponent from "../component/TypingTextComponent";
import TextArea from "antd/es/input/TextArea";
import {API} from "../util/api";
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
  const [answer, setAnswer] = useState<string[]>(["", "", ""])
  const navigate = useNavigate();

  useEffect(() => {
    getRandomQuestions();
  }, []);

  const getRandomQuestions = async () => {

    try {
      // const res: IQuestionList = await API.get("/test/test-user?message=asdfads");
      // const res: IQuestionList = await API.get("/question/get-random-questions");
      // const {question1, question2, question3} = res;
      // const tempQustion = [];
      // tempQustion.push(question1);
      // tempQustion.push(question2);
      // tempQustion.push(question3);
      // setQuestion(tempQustion);
    } catch (e: any) {
      console.log(e);
      if (e?.response?.status === 401) {
        // navigate("/login", {replace: true});
      }
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
        <div style={{width: "600px"}}>
          <div className="question">
            {/*<span>Q. 질문을 입니다.</span>*/}
            {question[step] && <TypingTextComponent text={question[step]} interval={30} key={step}/>}
          </div>
          <div className="answer">
            <TextArea rows={10} value={answer[step]} onChange={(e) => {
              setAnswer((prevState) => {
                prevState[step] = e.target.value;
                return prevState;
              })
            }}
                      style={{fontSize: "20px"}}
            />
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
      <div>
        <Button type={"primary"} shape="circle"
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

        {/*<Steps*/}
        {/*    progressDot*/}
        {/*    current={step}*/}
        {/*    items={[*/}
        {/*      {*/}
        {/*        onClick: () => {*/}
        {/*          setStep(0)*/}
        {/*        }*/}
        {/*      },*/}
        {/*      {*/}
        {/*        onClick: () => {*/}
        {/*          setStep(1)*/}
        {/*        }*/}
        {/*      },*/}
        {/*      {*/}
        {/*        onClick: () => {*/}
        {/*          setStep(2)*/}
        {/*        }*/}
        {/*      },*/}
        {/*    ]}*/}
        {/*/>*/}
      </div>
    </div>
  </>)
}

export default DiaryInputPage;
