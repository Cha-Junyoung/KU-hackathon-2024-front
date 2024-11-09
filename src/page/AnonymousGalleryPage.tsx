import React, {useEffect, useState} from 'react';
import "../asset/style/diary_view.css"
import {DatePicker, Image} from "antd";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import {API} from "../util/api";
import {useRecoilState} from "recoil";
import menuAtom from "../recoil/menu";
import {useParams} from "react-router-dom"; // dayjs를 import

// import {useTypingAnime} from "../component/TypingTextComponent";

export interface IDateTime {
  year: string,
  month: string,
  day: string,
}

export interface IDiaryInfo {
  time: string, //date
  color: string,
  emotion: string,
}

const AnonymousGalleryPage = () => {
  const [dateTime, setDateTime] = useState<dayjs.Dayjs>(dayjs());
  const [imageUrl, setImageUrl] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [hasData, setHasData] = useState<boolean>(false)
  const [menu, setMenu] = useRecoilState(menuAtom);
  const {diaryId} = useParams();


  useEffect(() => {
    setMenu({id: "2"})

    if (!diaryId) return;
    handleGetDiaryInfo(diaryId);
  }, []);


  const handleGetDiaryInfo = async (diaryId: string) => {
    try {
      const params = new URLSearchParams();
      params.append("id", diaryId);

      const res = await API.get(`/share/view?${params.toString()}`)
      const {image, text, created_at} = res.data;
      const date = dayjs(created_at);
      setImageUrl(image);
      setText(text);
      setDateTime(date);
      setHasData(true);
    } catch (e: any) {
      setHasData(false);
      alert(e?.response?.data?.message);
    }


  }


  const replaceSpecialChars = (input: string) => {
    // Replace CRLF with \n and DOUBLE_QUOTE with \"
    return input.replace(/CRLF/g, '\n').replace(/DOUBLE_QUOTE/g, '\\"');
  }


  return (<>
    <div className="diary-view-container">
      <div className="header">
        <div className="date-picker">
          <DatePicker value={dateTime} allowClear={false} disabled/>
        </div>
      </div>

      <div className="content">
        {hasData && <>
          <Image
              width={700}
              src={imageUrl}
          />
          <TextArea rows={10} value={replaceSpecialChars(text)} readOnly={true}
                    style={{fontSize: "20px"}}/>
        </>}

      </div>
    </div>
  </>)
}

export default AnonymousGalleryPage;
