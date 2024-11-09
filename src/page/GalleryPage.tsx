import React, {useEffect, useState} from 'react';
import "../asset/style/diary_view.css"
import {DatePicker, DatePickerProps, Image} from "antd";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import GradientBar from "../component/GradientBar";
import {API} from "../util/api";
import GradientCalendarBar from "../component/GradientCalendarBar";
import {useRecoilState} from "recoil";
import menuAtom from "../recoil/menu"; // dayjs를 import

// import {useTypingAnime} from "../component/TypingTextComponent";

export interface IDateTime {
  year: string,
  month: string,
  day: string,
}
export interface IDiaryInfo {
  time: string,
  color: string,
  emotion: string,
}

const dummyData : IDiaryInfo[] = [
  {
    time: "1",
    color: "fccf03",
    emotion: "string",
  },
  {
    time: "2",
    color: "fc0303",
    emotion: "string",
  },{
    time: "3",
    color: `0330fc`,
    emotion: "string",
  },{
    time: "4",
    color: `6df754`,
    emotion: "string",
  },{
    time: "8",
    color: `0330fc`,
    emotion: "string",
  },{
    time: "22",
    color: `57a8e6`,
    emotion: "string",
  },{
    time: "29",
    color: `b649ba`,
    emotion: "string",
  }
]

const GalleryPage = () => {
  const [dateTime, setDateTime] = useState<dayjs.Dayjs>(dayjs());
  const [imageUrl, setImageUrl] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [menu, setMenu] = useRecoilState(menuAtom);

  useEffect(() => {
    setMenu({id:"2"})
    handleGetDiary();
  }, [dateTime]);


  const handleGetDiary = async () => {
    if (!dateTime) return;
    const params = new URLSearchParams();
    params.append("year", dateTime.year().toString());
    params.append("month",(dateTime.month() + 1).toString());
    params.append("day", dateTime.date().toString());

    const res = await API.get(`/statistics/day?${params.toString()}`)
    const {image, text} = res.data;
    setImageUrl(image)
    setText(text)

  }


  const changeDate = (newDate: number) => {
    const updatedDate = dateTime.set('date', newDate); // 날짜만 변경
    console.log(updatedDate);
    setDateTime(updatedDate); // 상태 업데이트
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDateTime(date);
  };


  return (<>
    <div className="diary-view-container">
      <div className="date-picker">
        <DatePicker onChange={onChange} picker="month" value={dateTime}/>
      </div>
      <div className="content">
        <Image
            width={700}
            src={imageUrl}
        />
        <TextArea rows={10} value={text} readOnly={true} style={{fontSize: "20px"}}/>
      </div>

      <GradientCalendarBar  days={dateTime.daysInMonth()} diaryList={dummyData} onClick={(index:number) => changeDate(index)}/>
    </div>
  </>)
}

export default GalleryPage;
