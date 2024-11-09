import React, {useEffect, useState} from 'react';
import "../asset/style/diary_view.css"
import {DatePicker, DatePickerProps, Image} from "antd";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
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
  time: string, //date
  color: string,
  emotion: string,
}

const GalleryPage = () => {
  const [dateTime, setDateTime] = useState<dayjs.Dayjs>(dayjs());
  const [imageUrl, setImageUrl] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [hasData, setHasData] = useState<boolean>(false)
  const [diaryList, setDiaryList] = useState<IDiaryInfo[]>([])
  const [menu, setMenu] = useRecoilState(menuAtom);

  useEffect(() => {
    handleGetMonthlyDiary(dayjs());
  }, []);

  useEffect(() => {
    setMenu({id: "2"})
    handleGetDiary();
  }, [dateTime]);


  const convertResponseToDiaryInfoArray = (response: { colors: Array<IDiaryInfo | null> }): IDiaryInfo[] => {
    return response.colors
    .filter((item): item is IDiaryInfo => item !== null)
    .map((item) => ({
      ...item,
      time: item.time.split("T")[0].split("-")[2], // time에서 일자(DD) 부분만 추출
    }));
  };


  const handleGetDiary = async () => {
    if (!dateTime) return;
    try {
      setHasData(true);
      const params = new URLSearchParams();
      params.append("year", dateTime.year().toString());
      params.append("month", (dateTime.month() + 1).toString());
      params.append("day", dateTime.date().toString());

      const res = await API.get(`/statistics/day?${params.toString()}`)
      const {image, text} = res.data;
      setImageUrl(image)
      setText(text)
    } catch (e: any) {
      if (e?.response?.status === 404) {
        setHasData(false);
      }
    }


  }
  const handleGetMonthlyDiary = async (selectedDate: dayjs.Dayjs) => {
    if (!selectedDate) return;
    try {
      setHasData(true);
      const params = new URLSearchParams();
      params.append("year", selectedDate.year().toString());
      params.append("month", (selectedDate.month() + 1).toString());

      const res = await API.get(`/statistics?${params.toString()}`)
      const diaryInfoArray = convertResponseToDiaryInfoArray(res.data);
      console.log("diaryInfoArray", diaryInfoArray)
      setDiaryList(diaryInfoArray);
    } catch (e: any) {
      alert(e?.response?.data?.message)
    }


  }


  const changeDate = (newDate: number) => {
    const updatedDate = dateTime.set('date', newDate); // 날짜만 변경
    console.log(updatedDate);
    setDateTime(updatedDate); // 상태 업데이트
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDateTime(date);
    handleGetMonthlyDiary(date);
  };


  return (<>
    <div className="diary-view-container">
      <div className="date-picker">
        <DatePicker onChange={onChange} picker="month" value={dateTime} allowClear={false}/>
      </div>
      <div className="content">
        {hasData && <>
          <Image
              width={700}
              src={imageUrl}
          />
          <TextArea rows={10} value={text} readOnly={true} style={{fontSize: "20px"}}/>
        </>}

      </div>

      <GradientCalendarBar days={dateTime.daysInMonth()} diaryList={diaryList}
                           onClick={(index: number) => changeDate(index)}/>
    </div>
  </>)
}

export default GalleryPage;
