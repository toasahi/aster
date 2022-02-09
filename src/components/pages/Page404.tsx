import { memo, VFC } from 'react';
import { Main } from '../layout/Main';
import { Passing } from '../animation/Passing';

export const Page404: VFC = memo(() => {
  return (
    // <Main>
    <Passing children="Use Case" />
    //   <h1>404ページ</h1>
    // </Main>
  );
});
