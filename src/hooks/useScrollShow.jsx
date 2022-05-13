import { useRef, useEffect, useState } from "react";

const useScrollShow = () => {
  const refScroll = useRef();
  const [elementIsVisible, setElementIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("entry", entry);
      setElementIsVisible(entry.isIntersecting);
    });

    observer.observe(refScroll.current);
  }, []);
  return { refScroll, elementIsVisible };
};

export default useScrollShow;
