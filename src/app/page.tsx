"use client";

export default function Home() {
  const onShare = async (fallback?: () => void) => {
    try {
      if (typeof navigator.share === "undefined") {
        fallback?.();
        return;
      }

      await navigator.share({
        url: "",
      });
    } catch (e) {}
  };

  return <button onClick={() => onShare()}>share</button>;
}
