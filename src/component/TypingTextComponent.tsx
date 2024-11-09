// import React, {useEffect, useRef, useState} from "react";
//
// const TypingTextComponent = ({
//                                text,
//                                frame,
//                                setAnimeFinished,
//                                animeFinishFlag,
//                                flag = true,
//                              }: {
//   text: string;
//   frame: number;
//   setAnimeFinished: () => void;
//   animeFinishFlag: boolean;
//   flag?: boolean;
// }) => {
//   const [typingText, setTypingText] = useState<string>("");
//   const textIndex = useRef<number>(0);
//   const lastTimeStamp = useRef<number | null>(null);
//
//   const animationCallback = (timeStamp: number) => {
//     if (lastTimeStamp.current === null) {
//       lastTimeStamp.current = timeStamp;
//     }
//
//     const elapsedTime = timeStamp - lastTimeStamp.current;
//
//     if (elapsedTime > frame) {
//       lastTimeStamp.current = timeStamp;
//       setTypingText((state) => {
//         console.log("textIndex.current", textIndex.current);
//         console.log("state", state);
//         const newState = state + text[textIndex.current];
//         textIndex.current += 1;
//         console.log("textIndex.current", textIndex.current);
//         console.log("newState", newState);
//         return newState;
//       });
//     }
//
//     if (textIndex.current >= text.length) {
//       setAnimeFinished();
//       console.log("finish!");
//       return;
//     }
//     requestAnimationFrame(animationCallback);
//   };
//
//   useEffect(() => {
//     let animeId: number;
//     if (animeFinishFlag) {
//       setTypingText(text);
//     } else if (flag) {
//       animeId = requestAnimationFrame(animationCallback);
//     }
//
//     return () => {
//       cancelAnimationFrame(animeId);
//     };
//   }, [flag]);
//   return <p>{typingText}</p>;
// };
//
// export const useTypingAnime = (text: string, frame: number, flag?: boolean) => {
//   const [animeFinishFlag, setFlageState] = useState<boolean>(false);
//   const setAnimeFinished = () => {
//     setFlageState(true);
//   };
//
//   const TypingTextDiv = () => {
//     return TypingTextComponent({text, frame, setAnimeFinished, animeFinishFlag, flag});
//   };
//
//   return {animeFinishFlag, TypingTextDiv};
// };

import React, { useEffect, useState } from 'react';

interface AnimationProps {
  text: string;
  interval?: number;
  pauseInterval?: number;
}

const TypingTextComponent = ({ text, interval, pauseInterval }: AnimationProps) => {
  const [sequence, setSequence] = useState<string>("");
  const [textCount, setTextCount] = useState<number>(0);
  const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTypingPaused) {
        clearInterval(typingInterval);
        if(!pauseInterval) return;
        setTimeout(() => {
          setIsTypingPaused(false);
          setTextCount(0);
          setSequence("");
        }, pauseInterval); //몇 초 일시정지할 것인지
        return;
      }

      if (textCount >= text?.length) { //text length 초과 시 undefind가 출력되는 것을 방지
        setIsTypingPaused(true);
        return;
      }

      const nextChar = text[textCount];
      setSequence((prevSequence) => prevSequence + nextChar);

      if (nextChar === '\n') {
        setTextCount((prevCount) => prevCount + 2);
      } else {
        setTextCount((prevCount) => prevCount + 1);
      }
    }, interval || 200); // 설정한 초만큼 일정한 간격마다 실행된다

    return () => clearInterval(typingInterval); //컴포넌트가 마운트 해제되거나, 재렌더링 될 때마다 setInterval를 정리하는 함수를 반환함.
  }, [text, textCount, isTypingPaused]); //해당 상태들이 변경될 때마다 useEffect가 다시 실행 됨

  return (
      <p className="landing-p whitespace-pre-line break-normal" style={{ fontSize: '30px', display: 'flex', justifyContent: 'center' }}>
        {sequence}
        <span className='inline-block align-top w-0.5 h-[1em] bg-white ml-1 blink'/>
      </p>
  );
};



export default TypingTextComponent;
