import Slider from '@/components/Slider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
      <title>کانون فرهنگی آموزش | قلم چی</title>
      <meta name="description" content="سایت کانون فرهنگی آموزش قلم چی kanoon.ir Kanoon Farhangi Amoozesh.  آزمون های برنامه ای ، کنکور ، تیزهوشان ، تخمین رتبه ، دریافت کارنامه آزمون"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Slider/>
      </div>
    </>
  )
}
