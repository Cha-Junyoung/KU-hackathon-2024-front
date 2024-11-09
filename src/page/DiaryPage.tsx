import React, {useEffect, useState} from 'react';
import "../asset/style/main.css"
import DiaryInputPage from "./DiaryInputPage";
import dayjs from "dayjs";
import {API} from "../util/api";
import DiaryViewPage from "./DiaryViewPage";
import {replace, useNavigate} from "react-router-dom";

// import {useTypingAnime} from "../component/TypingTextComponent";

export interface IDateTime {
  year: string,
  month: string,
  day: string,

}

const DiaryPage = () => {
  const [mode, setMode] = useState<"input" | "view">("input");
  const [imageUrl, setImageUrl] = useState<string>("")
  const [text, setText] = useState<string>("")
  const navigate = useNavigate();

  useEffect(() => {
    handleGetTodayDiary();
  }, []);

  const handleGetTodayDiary = async () => {
    try {
      const now = dayjs();
      const params: IDateTime = {
        year: now.year().toString(),
        month: (now.month() + 1).toString(),
        day: now.date().toString(),
      }
      const res = await API.get("/statistics/day", {params});
      const {imageUrl, text} = res.data;
      setText(text)
      setImageUrl(imageUrl)
      setMode("view")

    } catch (e: any) {
      if(e?.response?.status === 404){
        setMode("input")
      }else{
        alert(e?.response?.data?.message);
        navigate("/login", {replace: true})
      }
    }
  }


  return (
      <>
        {mode === "input" ? <DiaryInputPage/>
            : <DiaryViewPage text={text} imageUrl={imageUrl}/>}
      </>
  )
}

export default DiaryPage;
