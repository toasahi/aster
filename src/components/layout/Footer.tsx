import { memo, VFC } from 'react';
import Twitter from '../../images/Twitter.svg';
import Instagram from '../../images/Instagram.svg';
import Mail from '../../images/Mail.svg';

export const Footer: VFC = memo(() => {
  return (
    <footer className="mt-12 w-full lg:h-96 lg:mt-32 container border-t-2 mx-auto border-primary ">
      <div className="mt-16">
        <ul className="flex justify-center mx-auto w-4/5">
          <li className="p-5">
            <a href="https://twitter.com/">
              <img className="object-cover w-10 h-10" src={Twitter} alt="twitterのアイコン" />
            </a>
          </li>
          <li className="p-5">
            <a href="https://www.instagram.com/">
              <img className="object-cover w-10 h-10" src={Instagram} alt="instagramのアイコン" />
            </a>
          </li>
          <li className="p-5">
            <a href="https://www.google.co.jp/mail/help/intl/ja/about.html?vm=r">
              <img className="object-cover w-10 h-10" src={Mail} alt="mailのアイコン" />
            </a>
          </li>
        </ul>
        <ul className="w-4/5 flex justify-around mx-auto px-32 mt-6 text-title-color opacity-70">
          <li>運営会社</li>
          <li>プライバシーポリシー</li>
          <li>プロフィール</li>
          <li>FAQ</li>
          <li>利用規約</li>
          <li>お問い合わせ</li>
        </ul>
        <small className="text-title-color text-center block opacity-50 mt-12">&copy; 2022 AsteR</small>
      </div>
    </footer>
  );
});
