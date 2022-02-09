import { memo, ReactNode, VFC } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
  children: ReactNode;
};

export const Main: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div className="animate-openShutter">
      <Header></Header>
      <main className="w-full p-5 mx-auto">{children}</main>
      <Footer></Footer>
    </div>
  );
});
