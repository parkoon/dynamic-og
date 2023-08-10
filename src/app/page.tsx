"use client";

export default function Home() {
  const onShare = async (fallback?: () => void) => {
    try {
      if (navigator.canShare() && typeof navigator.share === "undefined") {
        fallback;
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

  return <button onClick={() => onShare()}>share</button>;
}
