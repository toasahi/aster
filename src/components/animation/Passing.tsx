import { memo, VFC } from 'react';

type Props = {
  children: string;
};

export const Passing: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div className="passing move">
      <div className="passing-box block">
        <div className="passing-bar relative transform-gpu p-5 inline-block before:inline-block before:w-0 before:h-full before:absolute before:left-0 before:top-0 before:z-10 before:bg-white before:rounded before:animate-passingBar">
          <div className="passing-txt text-5xl font-semibold opacity-70 transform-gpu animate-passingText">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});
