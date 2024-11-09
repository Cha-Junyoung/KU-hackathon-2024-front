import {useEffect, useState} from "react";

const LoadingEmoji = () => {
  const emojis = ["😩", "🤫", "🫷🥺🫸", "🥹", "😑"]; // 이모지 리스트
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);

  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setCurrentEmoji((prev) => {
        const currentIndex = emojis.indexOf(prev);
        const nextIndex = (currentIndex + 1) % emojis.length;
        return emojis[nextIndex];
      });
    }, 500); // 500ms 간격으로 이모지 변경

    return () => clearInterval(emojiInterval); // 컴포넌트가 unmount 될 때 clearInterval
  }, []);

  return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 검은 배경
        zIndex: 9999, // 다른 UI 위에 표시되도록 설정
      }}>
        <h3 style={styles.loadingText}>Loading...</h3>
        <div style={styles.emoji}>{currentEmoji}</div>
      </div>

  )
};

const styles = {
  loadingText: {
    color: "#fff",
    fontSize: "24px",
    marginBottom: "20px",
  },

  emoji: {
    fontSize: "48px", // 이모지 크기
  },
};
export default LoadingEmoji;
