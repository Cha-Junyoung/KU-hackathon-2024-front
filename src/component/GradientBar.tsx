import React, {useState} from 'react';
import dayjs from 'dayjs';
import {IDiaryInfo} from "../page/GalleryPage";


const emotionColors = [
  "#fccf03", // Joy
  "#fc0303", // Angry
  "#0330fc", // Sad
  "#035711", // Afraid
  "#6df754", // Admiration
  "#57a8e6", // Surprise
  "#ffa114", // Interest
  "#b649ba", // Boring
];

// 현재 월의 일 수 계산
const getDaysInMonth = (year: number, month: number): number => {
  return dayjs(`${year}-${month}-01`).daysInMonth();
};

const generateColorGradientByDiaryInfo = (days: number, diaryList: IDiaryInfo[]) => {
  return Array.from({length: days}, (_, index) => {
    const day = index + 1;
    const diaryEntry = diaryList.find(entry => entry.time === day.toString());
    return diaryEntry ? "#" + diaryEntry.color : '#ffffff'; // 흰색 기본값
  });
};

// 그라데이션 색상 배열 생성 (한 달의 각 날짜에 대해 색상을 생성)
const generateColorGradient = (days: number) => {
  return Array.from({length: days}, () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  });
};

const generateEmotionGradient = (days: any) => {
  return Array.from({length: days}, () => {
    const randomIndex = Math.floor(Math.random() * emotionColors.length);
    return emotionColors[randomIndex];
  });
};

// const GradientBar = ({ year, month }:any) => {
//   const daysInMonth = getDaysInMonth(year, month);
//   // const colors = generateColorGradient(daysInMonth);
//   const colors = generateEmotionGradient(daysInMonth);
//
//   // colors 배열을 "색상1, 색상2, 색상3..." 형식의 문자열로 변환하여 그라데이션 생성
//   const gradientStyle = {
//     background: `linear-gradient(to right, ${colors.join(', ')})`,
//     height: '30px',
//     // borderRadius: '8px',
//   };
//
//   return <div style={gradientStyle} />;
// };

interface IGradientBar {
  year: number;
  month: number;
  day: IDiaryInfo[];
  onClick: (index: number) => void;
}

const GradientBar = ({year, month, day, onClick}: IGradientBar) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(year, month);
  // const colors = generateColorGradient(daysInMonth);
  // const colors = generateEmotionGradient(daysInMonth);
  const colors = generateColorGradientByDiaryInfo(daysInMonth, day);
  const gradientStyle = {
    background: `linear-gradient(to right, ${colors.join(', ')})`,
    height: '30px',
    width: "100%",
  };


  return (
        <div style={gradientStyle} />

      // <div style={{display: 'flex', width: '100%', height: '30px', margin: '20px 0'}}>
      //   {/*{colors.map((color, index) => (*/}
      //   {/*    <div*/}
      //   {/*        key={index}*/}
      //   {/*        style={{*/}
      //   {/*          backgroundColor: color,*/}
      //   {/*          flex: 1, // 모든 일수가 동일한 너비를 가지도록*/}
      //   {/*        }}*/}
      //   {/*    />*/}
      //   {/*))}*/}
      //   {colors.map((color, index) => (
      //       <div
      //           key={index}
      //           style={gradientStyle}
      //           onMouseEnter={() => setHoveredIndex(index)} // 마우스가 올라갔을 때 인덱스 업데이트
      //           onMouseLeave={() => setHoveredIndex(null)} // 마우스가 떠날 때 인덱스 초기화
      //           onClick={() => onClick(index + 1)}
      //       >
      //         {hoveredIndex === index && (
      //             <div
      //                 style={{
      //                   position: "absolute",
      //                   top: "50%", // 수직 중앙 정렬
      //                   left: "50%", // 수평 중앙 정렬
      //                   transform: "translate(-50%, -50%)", // 정확한 중앙 정렬
      //                   color: "#fff",
      //                   fontSize: "18px",
      //                   fontWeight: "bold",
      //                 }}
      //             >
      //               {index + 1} {/* index + 1을 표시 */}
      //             </div>
      //         )}
      //       </div>
      //   ))}
      // </div>
  );
};

export default GradientBar;
