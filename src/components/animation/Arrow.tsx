import { memo, VFC } from 'react';
import arrow from '../../images/Arrow2.svg';

export const Arrow: VFC = memo(() => {
  return (
    <>
      <div className="mx-auto mt-14 w-10 h-10">
        <img src={arrow} className="animate-bounce w-full h-full" alt="下矢印の画像" />
      </div>
    </>
  );
});
