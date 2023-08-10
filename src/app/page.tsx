"use client";

export default function Home() {
  const onShare = async () => {
    navigator.sh;
    try {
      if (typeof navigator.share === "undefined") {
        alert("지원 안함..");
        return;
      }

      await navigator.share({
        url: "",
      });
      console.log("공유 성공");
    } catch (e) {
      console.log("공유 실패");
    }
  };

  return <button onClick={onShare}>share</button>;
}
