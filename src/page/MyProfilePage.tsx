import React, {useEffect, useState} from 'react';
import "../asset/style/profile.css"
import {ColorPicker} from "antd";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import menuAtom from "../recoil/menu";


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

const dummy: IEmotion = {
  joy: "6cff03",
  angry: "ed0505",
  sad: "ed6605",
  afraid: "ed9805",
  admiration: "1cff03",
  surprise: "9eff03",
  interest: "ddff03",
  boring: "edbb05",
}

const MyProfilePage = () => {
  const navigate = useNavigate();
  const [joy, setJoy] = useState<string>("#6cff03");
  const [angry, setAngry] = useState<string>("#ed0505");
  const [sad, setSad] = useState<string>("#ed6605");
  const [afraid, setAfraid] = useState<string>("#ed9805");
  const [admiration, setAdmiration] = useState<string>("#1cff03");
  const [surprise, setSurprise] = useState<string>("#9eff03");
  const [interest, setInterest] = useState<string>("#ddff03");
  const [boring, setBoring] = useState<string>("#edbb05");

  const [menu, setMenu] = useRecoilState(menuAtom);

  useEffect(() => {
    setMenu({id:"3"})

    setJoy("#6cff03")
    setAngry("#ed0505")
    setSad("#ed6605")
    setAfraid("#ed9805")
    setAdmiration("#1cff03")
    setSurprise("#9eff03")
    setInterest("#ddff03")
    setBoring("#edbb05")
  }, []);

  return (
      <>
        <div className="profile-container">
          <div className="title">감정 선택</div>
          <div className="color-item">
            <div className="title">joy</div>
            <ColorPicker defaultValue={"#" + dummy.joy} value={joy} showText allowClear
                         disabledAlpha onChange={(e) => {setJoy(e.toHexString())}}/>
          </div>
          <div className="color-item">
            <span className="title">angry</span>
            <ColorPicker defaultValue={"#" + dummy.angry} value={angry} showText allowClear
                         disabledAlpha onChange={(e) => {setAngry(e.toHexString())}}/>
          </div>
          <div className="color-item">
            <span className="title">sad</span>
            <ColorPicker defaultValue={"#" + dummy.sad} value={sad} showText allowClear
                         disabledAlpha onChange={(e) => {setSad(e.toHexString())}}/>
          </div>
          <div className="color-item">
            <span className="title">afraid</span>
            <ColorPicker defaultValue={"#" + dummy.afraid} value={afraid} showText allowClear
                         disabledAlpha onChange={(e) => {setAfraid(e.toHexString())}}/>
          </div>
          <div className="color-item">
            <span className="title">admiration</span>
            <ColorPicker defaultValue={"#" + dummy.admiration} value={admiration} showText
                         allowClear disabledAlpha onChange={(e) => {setAdmiration(e.toHexString())}}/>
          </div>
          <div className="color-item">
            <span className="title">surprise</span>
            <ColorPicker defaultValue={"#" + dummy.surprise} value={surprise} showText allowClear
                         disabledAlpha onChange={(e) => {setSurprise(e.toHexString())}}/>
          </div>
          <div className="color-item">
            <span className="title">interest</span>
            <ColorPicker defaultValue={"#" + dummy.interest} value={interest} showText allowClear
                         disabledAlpha onChange={(e) => {setInterest(e.toHexString())}}/>
          </div>
          <div className="color-item">
            <span className="title">boring</span>
            <ColorPicker defaultValue={"#" + dummy.boring} value={boring} showText allowClear
                         disabledAlpha onChange={(e) => {setBoring(e.toHexString())}}/>
          </div>
        </div>


      </>)
}

export default MyProfilePage;
