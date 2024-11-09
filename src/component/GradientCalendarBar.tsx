import React, {useEffect, useState} from "react";
import {IDiaryInfo} from "../page/GalleryPage";


// 주어진 diaryList의 색상으로 매일의 색상 배열을 생성
const generateDailyColors = (days: number, diaryList: IDiaryInfo[]) => {
  console.log(days)
  return Array.from({length: days}, (_, index) => {
    const day = index + 1;
    const diaryEntry = diaryList.find(entry => Number(entry.time) === day);
    // return diaryEntry ? "#"+diaryEntry.color : "#ffffff"; // 일치하는 날짜가 없으면 기본 흰색 사용
    return diaryEntry ? "#" + diaryEntry.color : "#f5f5f5"; // 일치하는 날짜가 없으면 기본 흰색 사용
  });
};

// 색상 배열을 그라데이션 CSS로 변환
const createGradient = (colors: string[]) => {
  return `linear-gradient(90deg, ${colors
  .map((color, index) => `${color} ${((index+0.5) / colors.length) * 100}%`)
  .join(", ")})`;
};

const GradientCalendarBar = ({days, diaryList, onClick}: {
  days: number;
  diaryList: IDiaryInfo[],
  onClick: (index: number) => void
}) => {
  const [colors, setColors] = useState<string[]>([]);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  useEffect(() => {
    console.log(diaryList)
    const generatedColors = generateDailyColors(days, diaryList);
    setColors(generatedColors);
  }, [days, diaryList]);

  return (
      <div style={{ position: "relative", width: "100%" }}>
        {/* 색상 그라데이션 바 */}
        <div
            style={{
              width: "100%",
              height: "30px", // 바의 높이
              background: createGradient(colors), // 그라데이션 적용
              display: "flex",
            }}
        >
          {Array.from({ length: days }).map((_, index) => (
              <div
                  key={index}
                  style={{
                    flex: 1, // 모든 일수가 동일한 너비
                    height: "100%",
                    position: "relative",
                  }}
                  onMouseEnter={() => setHoveredDay(index + 1)} // 마우스 진입 시 날짜 설정
                  onMouseLeave={() => setHoveredDay(null)} // 마우스 나가면 초기화
                  onClick={() => onClick(index + 1)}
              >
                {hoveredDay === index + 1 && (
                    <div
                        style={{
                          position: "absolute",
                          top: "-30px", // 바 위쪽에 날짜 표시
                          left: "50%",
                          transform: "translateX(-50%)",
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          color: "#fff",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          opacity: 1,
                          transition: "opacity 0.2s",
                        }}
                    >
                      {`Day ${index + 1}`}
                    </div>
                )}
              </div>
          ))}
        </div>

        {/* 날짜 눈금 표시 */}
        <div
            style={{
              display: "flex",
              fontSize: "12px",
              color: "#333",
            }}
        >

          {Array.from({ length: days }).map((_, index) => (
              <div style={{flexDirection: "column",     flex: "1 1 0%"}}>
                <div key={index} style={{position: "relative", textAlign: "center", height:"10px"}}>

                  <div style={{
                    height: "10px",
                    width: "10px",
                    borderLeft: "solid",
                    borderLeftWidth: "1px",
                    position: "absolute",
                    bottom: "10px",
                  }}/>
                  {index + 1} {/* 날짜 표시 */}
                </div>
              </div>

          ))}
        </div>
      </div>
  );
};

export default GradientCalendarBar;
