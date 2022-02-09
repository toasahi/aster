import { memo, useState, VFC } from 'react';

export const ScrollArrow: VFC = memo(() => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollX <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <button onClick={scrollTop}>topへ</button>
    </>
  );
});
