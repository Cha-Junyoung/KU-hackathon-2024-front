import React from 'react';
import "../asset/style/main.css"
import TypingTextComponent from "../component/TypingTextComponent";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
// import {useTypingAnime} from "../component/TypingTextComponent";


const Main = () => {
  // const { animeFinishFlag : firstFlag, TypingTextDiv : FirstText } = useTypingAnime("First Line", 100)
  // const { animeFinishFlag : secondFlag, TypingTextDiv : SecondText } = useTypingAnime("Second Line", 100, firstFlag)
  // const { TypingTextDiv : ThirdText } = useTypingAnime("Third Line", 100, secondFlag)

  const navigate  = useNavigate();

  return (<>
    <div>
      {/*<FirstText />*/}
      {/*<SecondText />*/}
      {/*<ThirdText />*/}
      <div className="main-container">
        <div className="title">
          <TypingTextComponent text={'dummy data'} />
        </div>
        <div className="start-button">
          <Button color="default" variant="outlined" style={{width: "100px"}} onClick={() => navigate("/login")}>
            시작하기
          </Button>
        </div>
      </div>

    </div>
  </>)
}

export default Main;
