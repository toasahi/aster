import { memo, ReactNode, VFC } from 'react';
import Aster from '../../images/Aster.svg';

type Props = {
  children: ReactNode;
};

export const Shutter: VFC = memo(() => {
  return (
    <>
      <div className="shutter w-full h-full fixed top-1/2 left-1/2 -translate-x-24 -translate-y-12 m-auto z-50 animate-byeShutter">
        <img
          src={Aster}
          alt="ロゴ"
          className="logo absolute w-72 top-0 left-0 bottom-0 right-0 margin: auto animate-logo"
        />
      </div>
      <div className="img"></div>
    </>
  );
});
