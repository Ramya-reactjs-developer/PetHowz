import { useEffect } from "react";

function scrollToTop() {
  window.scrollTo(0, 0);
}

export default function ScrollToTop() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return null;
}
