import { useEffect, useState } from "react";

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const getScrollPos = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", getScrollPos);

    return () => {
      window.removeEventListener("scroll", getScrollPos);
    };
  }, [scrollTop]);

  return scrollTop;
};

export default useScrollTop;
