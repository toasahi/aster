import { memo, VFC } from 'react';
import Aster from '../../images/Aster.svg';
import Menu from '../../images/Menu_Rounded.svg';
import { Link } from 'react-router-dom';

export const Header: VFC = memo(() => {
  return (
    <header className="p-5 h-20 w-full">
      <nav className="flex justify-between">
        <h1 className="ml-24">
          <Link to="/">
            <img src={Aster} className="w-32" alt="icon画像" />
          </Link>
        </h1>
        <div className="mr-32">
          <img src={Menu} className="w-8 h-8" alt="Menuの画像" />
        </div>
      </nav>
    </header>
  );
});
