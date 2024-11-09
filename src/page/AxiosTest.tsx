import React from 'react';
import '../asset/style/main.css';
import {API} from "../util/api";
import {useRecoilValue} from "recoil";
import placeAtom from "../recoil/place";
import {IPlace} from "../recoil/place/atom";

const AxiosTest = () => {

  const places: IPlace[] = useRecoilValue(placeAtom);
  const handleAxiosTest = async () => {
    const params = new URLSearchParams();
    params.append('message', 'helloWorld');
    const res = await API.get(`/profile/test-all?${params.toString()}`);
    console.log(res);
    alert(res.data);
  }

  const renderPlaceList = () => {
    return places.map((place, index) => (
        <div key={index} >{place.name}</div>
    ))
  }

  return (
      <>
        <div>
          Hello Axios Test
          <button onClick={() => handleAxiosTest()}>
            axios test
          </button>
        </div>
        <div>
          {renderPlaceList()}
        </div>
      </>
  );
};

export default AxiosTest;
