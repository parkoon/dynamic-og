"use client";

export default function Home() {
  const onShare = async () => {
    try {
      if (typeof navigator.share === "undefined") {
        alert("지원 안함..");
        return;
      }

      await navigator.share({
        title: "타이틀입니다.",
        text: "공유합니다.",
        url: "https://dev.data.id/sadfasdfasdfasdf",
      });
      console.log("공유 성공");
    } catch (e) {
      console.log("공유 실패");
    }
  };

  return <button onClick={onShare}>share</button>;
}
