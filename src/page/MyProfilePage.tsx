import React, {useEffect, useState} from 'react';
import "../asset/style/profile.css"
import {Button, ColorPicker} from "antd";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import menuAtom from "../recoil/menu";
import {API} from "../util/api";


interface IEmotion {
  joy: string;
  angry: string;
  sad: string;
  afraid: string;
  admiration: string;
  surprise: string;
  interest: string;
  boring: string;
}


const MyProfilePage = () => {
  const navigate = useNavigate();
  const [joy, setJoy] = useState<string>();
  const [angry, setAngry] = useState<string>();
  const [sad, setSad] = useState<string>();
  const [afraid, setAfraid] = useState<string>();
  const [admiration, setAdmiration] = useState<string>();
  const [surprise, setSurprise] = useState<string>();
  const [interest, setInterest] = useState<string>();
  const [boring, setBoring] = useState<string>();

  const [menu, setMenu] = useRecoilState(menuAtom);

  useEffect(() => {
    setMenu({id: "3"})
    getColorList()
  }, []);

  const getColorList = async () => {
    const res = await API.get("/profile/get-color");
    const {joy, angry, sad, afraid, admiration, surprise, interest, boring} = res.data;
    setJoy("#" + joy);
    setAngry("#" + angry);
    setSad("#" + sad);
    setAfraid("#" + afraid);
    setAdmiration("#" + admiration);
    setSurprise("#" + surprise);
    setInterest("#" + interest);
    setBoring("#" + boring);
  }

  const saveColorList = async () => {
    try{
      const body = {
        joy: joy?.replace("#", ""),
        angry: angry?.replace("#", ""),
        sad: sad?.replace("#", ""),
        afraid: afraid?.replace("#", ""),
        admiration: admiration?.replace("#", ""),
        surprise: surprise?.replace("#", ""),
        interest: interest?.replace("#", ""),
        boring: boring?.replace("#", ""),
      }
      await API.post("/profile/update-color", body)
      alert("색상이 저장되었습니다.")
    } catch (e:any) {
      alert(e?.response?.data?.message);
    }

  }


  return (
      <>
        <div className="profile-container">
          <div className="title">감정 선택</div>
          <div className="color-item">
            <div className="title">기쁨</div>
            {joy && <ColorPicker value={joy} showText allowClear
                                 disabledAlpha onChange={(e) => {
              setJoy(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <span className="title">화남</span>
            {angry && <ColorPicker value={angry} showText allowClear
                                   disabledAlpha onChange={(e) => {
              setAngry(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <span className="title">슬픔</span>
            {sad && <ColorPicker value={sad} showText allowClear
                                 disabledAlpha onChange={(e) => {
              setSad(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <span className="title">두려움</span>
            {afraid && <ColorPicker value={afraid} showText allowClear
                                    disabledAlpha onChange={(e) => {
              setAfraid(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <span className="title">감탄</span>
            {admiration && <ColorPicker value={admiration} showText
                                        allowClear disabledAlpha onChange={(e) => {
              setAdmiration(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <span className="title">놀람</span>
            {surprise && <ColorPicker value={surprise} showText allowClear
                                      disabledAlpha onChange={(e) => {
              setSurprise(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <span className="title">호기심</span>
            {interest && <ColorPicker value={interest} showText allowClear
                                      disabledAlpha onChange={(e) => {
              setInterest(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <span className="title">따분함</span>
            {boring && <ColorPicker value={boring} showText allowClear
                                    disabledAlpha onChange={(e) => {
              setBoring(e.toHexString())
            }}/>}
          </div>
          <div className="color-item">
            <Button type={"primary"}
                    style={{width: "100px", fontSize: "15px", marginTop: "30px", marginRight: "10px"}}
                    onClick={saveColorList}>저장</Button>
          </div>

        </div>


      </>)
}

export default MyProfilePage;
