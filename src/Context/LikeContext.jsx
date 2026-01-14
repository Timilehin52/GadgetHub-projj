import { createContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export const LikeContext = createContext();

const getLikesFromStorage = () => {
  const storedLikes = localStorage.getItem("likes");
  return storedLikes ? JSON.parse(storedLikes) : [];
};

export default function LikeProvider({ children }) {
  const [likes, setLikes] = useState(getLikesFromStorage);
  const likesRef = useRef(likes);
  const lastToastRef = useRef(0);

  useEffect(() => {
    likesRef.current = likes;
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const showOnce = (message, type = "info", windowMs = 700) => {
    const now = Date.now();
    if (now - lastToastRef.current < windowMs) return;
    lastToastRef.current = now;
    toast[type]?.(message);
  };

  const addToLikes = (item) => {
    const already = likesRef.current.some((i) => i.id === item.id);

    setLikes((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });

    if (already) {
      showOnce(`${item.name ?? "Item"} is already in your likes`, "info");
    } else {
      showOnce(`${item.name ?? "Item"} added to likes`, "success");
    }
  };

  const isLiked = (id) => likes.some((item) => item.id === id);

  const removeFromLikes = (id) => {
    const removed = likesRef.current.find((i) => i.id === id);
    setLikes((prev) => prev.filter((item) => item.id !== id));
    if (removed) showOnce(`${removed.name ?? "Item"} removed from likes`, "warn");
  };

  const clearLikes = () => {
    if (likesRef.current.length === 0) {
      showOnce("No liked items to clear", "info");
      return;
    }
    setLikes([]);
    showOnce("All likes cleared", "warn");
  };

  const getLikesCount = () => likes.length;

  return (
    <LikeContext.Provider
      value={{
        likes,
        addToLikes,
        removeFromLikes,
        clearLikes,
        getLikesCount,
        isLiked,
      }}
    >
      {children}
    </LikeContext.Provider>
  );
}