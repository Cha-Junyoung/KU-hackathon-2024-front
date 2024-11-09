import React from 'react';
import "../asset/style/diary_view.css"
import {Image} from "antd";
import TextArea from "antd/es/input/TextArea";

// import {useTypingAnime} from "../component/TypingTextComponent";

export interface IDiaryViewPageProps {
  imageUrl: string;
  text: string;
}

const DiaryViewPage = (props: IDiaryViewPageProps) => {
  return (<>
    <div className="diary-view-container">
      <div className="content">
        <Image
            width={700}
            src={props.imageUrl || "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
        />
        <TextArea rows={10} value={props.text} readOnly={true} style={{fontSize: "20px"}}/>
      </div>
    </div>
  </>)
}

export default DiaryViewPage;