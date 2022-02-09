import { memo, VFC } from 'react';
import title from '../../images/title.svg';
import appStore from '../../images/appstore.png';
import googleStore from '../../images/google-store.png';
import help from '../../images/help.png';
import family from '../../images/family.png';
import { Header } from '../layout/Header';
import { Arrow } from '../animation/Arrow';
import { Shutter } from '../layout/Shutter';
import { Footer } from '../layout/Footer';

export const Home: VFC = memo(() => {
  return (
    <>
      <Shutter />
      <div className="animate-openShutter">
        <Header></Header>
        <main className="container mt-2 px-32 mx-auto ">
          <section className="flex">
            <div className="bg-egg bg-cover lg:w-62 lg:h-80 lg:my-32 lg:ml-16">
              <div className="ml-16">
                <h2 className="w-60">
                  <img src={title} className="bg-cover" alt="title画像"/>
                </h2>
                <p className="text-title-color mt-2 whitespace-pre-wrap leading-loose font-bold">
                  {`災害時にARを活用して\n避難経路を案内してくれる\nサポートアプリ`}
                </p>
                <p className="rounded-full w-full h-7 bg-orange-400 text-white px-1 pt-0.5">
                  2022年2月,Android版を開発
                </p>
                <div className="flex">
                  <img src={appStore} className="p-3" alt="app-storeの画像" />
                  <img src={googleStore} className="p-3" alt="google-storeの画像" />
                </div>
              </div>
            </div>
            <div className="ml-14 lg:w-128 h-128 bg-electron bg-cover bg-center"></div>
          </section>
          <Arrow />
          <section className="text-center mt-16">
            <ul className="">
              <li className="flex w-4/5 mt-12 mx-auto relative">
                <div className="mt-12">
                  <h2 className="text-title-color font-bold text-3xl text-left tracking-wide whitespace-pre-wrap leading-10">
                    {'ARを利用して\n災害時に避難誘導する'}
                  </h2>
                  <p className="text-title-color opacity-70 font-light text-xl text-left leading-9 tracking-wide mt-3 whitespace-pre-wrap">
                    {'災害時に避難経路を把握していない場合や\n新しい土地で避難場所を知らない人など\n安全に誘導する'}
                  </p>
                </div>
                <div className="bg-ellipse bg-cover w-80 h-80 bg-top absolute -z-10 left-12"></div>
                <img src={help} className="w-52 h-72 ml-12 mt-5" alt="避難画像" />
              </li>
              <li className="flex w-4/5 mt-24 mx-auto relative">
                <div className="bg-ellipse bg-cover w-80 h-80 bg-top absolute -z-10 left-72"></div>
                <img src={family} className="w-52 h-64 ml-12 mt-5" alt="避難画像" />
                <div className="mt-12 ml-16">
                  <h2 className="text-title-color font-bold text-3xl text-left tracking-wide whitespace-pre-wrap leading-10">
                    {'家族の安全を第一に\n考える'}
                  </h2>
                  <p className="text-title-color font-light text-xl text-left leading-9 tracking-wide mt-3 whitespace-pre-wrap">
                    {
                      '災害時に連絡の取れない家族の安全を\n確認するために登録されている家族の\n現在地が動いているかを測定する'
                    }
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section className="bg-white rounded-3xl w-full p-12 flex justify-around mt-32">
            <div className="mt-5">
              <h2 className="w-60">
                <img src={title} className="bg-cover" alt="title画像"/>
              </h2>
              <div className="flex">
                <img src={appStore} className="p-3" alt="app-storeの画像" />
                <img src={googleStore} className="p-3" alt="google-storeの画像" />
              </div>
            </div>
            <video src="" className="w-1/2" controls></video>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
});
