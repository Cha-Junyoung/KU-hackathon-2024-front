import React from 'react';
import "../asset/style/main.css"
import TypingTextComponent from "../component/TypingTextComponent";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {API} from "../util/api";
// import {useTypingAnime} from "../component/TypingTextComponent";


const GalleryPage = () => {
  // const { animeFinishFlag : firstFlag, TypingTextDiv : FirstText } = useTypingAnime("First Line", 100)
  // const { animeFinishFlag : secondFlag, TypingTextDiv : SecondText } = useTypingAnime("Second Line", 100, firstFlag)
  // const { TypingTextDiv : ThirdText } = useTypingAnime("Third Line", 100, secondFlag)

  const navigate  = useNavigate();

  const handleStart = async () => {
    try{
      const params = new URLSearchParams();
      params.append('message', 'test login');
      await API.post(`/test/test-user?${params.toString()}`)
      navigate("/diary");
    }catch (e) {
      navigate("/login");
    }
  }

  return (<>
    <div>
      {/*<FirstText />*/}
      {/*<SecondText />*/}
      {/*<ThirdText />*/}
      <div className="main-container">
        <div className="title">
          <TypingTextComponent text={'gallery Page'} />
        </div>
        <div className="start-button">
          <Button color="default" variant="outlined" style={{width: "100px"}} onClick={handleStart}>
            시작하기
          </Button>
        </div>
      </div>

    </div>
  </>)
}

export default GalleryPage;
