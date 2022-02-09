import { memo, useEffect, useState, VFC } from 'react';
import { Passing } from '../animation/Passing';

type Props = {
  animationPosition: number;
};

export const ScrollDesign: VFC<Props> = memo((props) => {
  const [showScroll, setShowScroll] = useState(false);
  const { animationPosition } = props;
  const scrollTop = (): number => {
    return Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
  };
  const checkScrollTop = () => {
    const position = scrollTop();
    if (position > animationPosition) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', checkScrollTop);
    return (): void => document.removeEventListener('scroll', checkScrollTop);
  });

  const scrollStyle = showScroll ? 'opacity-0 delay-75' : 'opacity-1';

  return <>{showScroll ? <Passing children="Use Case" /> : <></>}</>;
});
