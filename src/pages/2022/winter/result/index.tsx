import Head from 'next/head'
import styles from './Home.module.css'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Button, Grid, Link } from '@mui/material'
import ContentCard from './contentCard'
import AwardContentCard from './awardContentCard'
import { OpenInNew } from '@mui/icons-material'

export default function Index(): any {
  const entries = require('./entries.json?20230208')
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let targets = gsap.utils.toArray('.border')
    targets.forEach((target: any) => {
      gsap.fromTo(
        target,
        { width: 0 }, //fromの設定
        {
          //toの設定
          width: '100%',
          duration: 2,
          scrollTrigger: {
            trigger: target,
            start: 'top bottom', //要素のトップが、画面の中央まできたら開始
            end: 'bottom bottom', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
    })
    targets = gsap.utils.toArray('.rule-card')
    targets.forEach((target: any) => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 100 }, //fromの設定
        {
          //toの設定
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
    })
    gsap.fromTo(
      'h2',
      { opacity: 0, y: 50 }, //fromの設定
      {
        //toの設定
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: 'h2',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
        },
      },
    )
    gsap.fromTo(
      '#comingsoon',
      { opacity: 0, y: 50 }, //fromの設定
      {
        //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#comingsoon',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
        },
      },
    )
    gsap.fromTo(
      '#result',
      { opacity: 0, y: 50 }, //fromの設定
      {
        //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#result',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
        },
      },
    )
    targets = gsap.utils.toArray('.content-card')
    targets.forEach((target: any) => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 100 }, //fromの設定
        {
          //toの設定
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
    })
    targets = gsap.utils.toArray('.award_box')
    targets.forEach((target: any) => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 100 }, //fromの設定
        {
          //toの設定
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
    })
    targets = gsap.utils.toArray('.award.first')
    targets.forEach((target: any) => {
      gsap.fromTo(
        target.querySelector('.lw'),
        { width: '0%' }, //fromの設定
        {
          //toの設定
          width: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target.querySelector('.rw'),
        { width: '0%' }, //fromの設定
        {
          //toの設定
          width: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target.querySelector('.lh'),
        { height: '0%' }, //fromの設定
        {
          //toの設定
          height: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target.querySelector('.rh'),
        { height: '0%' }, //fromの設定
        {
          //toの設定
          height: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target,
        { backgroundColor: 'rgb(255, 255, 255)' }, //fromの設定
        {
          //toの設定
          backgroundColor: 'rgb(239, 221, 122)',
          duration: 3,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
    })
    targets = gsap.utils.toArray('.award.second')
    targets.forEach((target: any) => {
      gsap.fromTo(
        target.querySelector('.lw'),
        { width: '0%' }, //fromの設定
        {
          //toの設定
          width: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target.querySelector('.rw'),
        { width: '0%' }, //fromの設定
        {
          //toの設定
          width: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target.querySelector('.lh'),
        { height: '0%' }, //fromの設定
        {
          //toの設定
          height: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target.querySelector('.rh'),
        { height: '0%' }, //fromの設定
        {
          //toの設定
          height: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
      gsap.fromTo(
        target,
        { backgroundColor: 'rgb(255, 255, 255)' }, //fromの設定
        {
          //toの設定
          backgroundColor: 'rgb(214, 214, 214)',
          duration: 3,
          scrollTrigger: {
            trigger: target,
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        },
      )
    })
  }, [])

  const contentCards = buildContentCards(entries)

  return (
    <div className={styles.container}>
      <Head>
        <title>N予備校 動くWEBページコンテスト2022冬</title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='https://n-contest.web.app/tcard2.png' />
        <meta
          name='description'
          content='N予備校 動くWEBページコンテスト2022冬の結果発表ページです。'
        />
        <meta
          name='twitter:description'
          content='N予備校 動くWEBページコンテスト2022冬の結果発表ページです。'
        />
        <meta property='og:url' content='https://n-contest.web.app/2022/winter/result/index.html' />
        <meta property='og:title' content='N予備校 動くWEBページコンテスト2022冬' />
        <meta
          property='og:description'
          content='N予備校 動くWEBページコンテスト2022冬の結果発表ページです。'
        />
        <meta property='og:image' content='https://n-contest.web.app/tcard2.png' />
        <link href='https://fonts.googleapis.com/css?family=Noto+Serif+JP' rel='stylesheet'></link>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.title_area}>
          <div className={styles.title_header}>N予備校</div>
          <h1 className={styles.title}>
            <span className={styles.ugoku}>動く</span>WEBページコンテスト
          </h1>
          <div className={styles.title_footer}>
            2022 <span id='summer'>冬</span>
          </div>
          <div className={`${styles.border} border`} />
          <p className={styles.description}>
            N予備校
            動くWebページコンテスト2022冬は、N予備校プログラミング入門コースで学んだN・S高校生、N中等部生ならびにN予備校受講者が、
            プログラミングの成果物を競うコンテストです。
          </p>
          <div className={`${styles.border} border`} />
        </div>
        <h2 className={`${styles.ribbon} ${styles.ribbon_result}`}>
          <img src='/hoshi.png' />
          結果発表
        </h2>

        <div className={`${styles.award_box} award_box`}>
          <h3 className={`${styles.category}`}>N予備校部門</h3>
          <h4 className={`${styles.award} ${styles.first} award first`}>
            <span className={`${styles.lw} lw`}></span>
            <span className={`${styles.lh} lh`}></span>
            <span className={`${styles.rw} rw`}></span>
            <span className={`${styles.rh} rh`}></span>最優秀賞
          </h4>
          <AwardContentCard
            title='バトロワゲームのチーム分けアプリ'
            author='tanacio'
            img_url='/2022/winter/entry/ny02.png'
            website_url='https://pop1.onrender.com/'
            github_url='https://github.com/tanacio/pop1-draw'
          />
        </div>

        <div className={`${styles.award_box} award_box`}>
          <h3 className={`${styles.category} ${styles.nh}`}>N・S高等学校部門</h3>
          <h4 className={`${styles.award} ${styles.first} award first`}>
            <span className={`${styles.lw} lw`}></span>
            <span className={`${styles.lh} lh`}></span>
            <span className={`${styles.rw} rw`}></span>
            <span className={`${styles.rh} rh`}></span>最優秀賞
          </h4>
          <AwardContentCard
            title="Let's BAND!!"
            author='Haru'
            img_url='/2022/winter/entry/nh04.png'
            website_url='https://lets-band.onrender.com'
            github_url='https://github.com/haru-036/Let-s-BAND'
          />
          <h4 className={`${styles.award} ${styles.second} award second`}>
            <span className={`${styles.lw} lw`}></span>
            <span className={`${styles.lh} lh`}></span>
            <span className={`${styles.rw} rw`}></span>
            <span className={`${styles.rh} rh`}></span>優秀賞
          </h4>
          <AwardContentCard
            title='潜水艦ゲーム・改'
            author='うどん'
            img_url='/2022/winter/entry/nh07.png'
            website_url='https://udon-japanese-submarine-online.onrender.com/'
            github_url='https://github.com/Udon-japanese/submarine-online'
          />
        </div>

        <div className={`${styles.award_box} award_box`}>
          <h3 className={`${styles.category} ${styles.nc}`}>N中等部部門</h3>
          <h4 className={`${styles.award} ${styles.first} award first`}>
            <span className={`${styles.lw} lw`}></span>
            <span className={`${styles.lh} lh`}></span>
            <span className={`${styles.rw} rw`}></span>
            <span className={`${styles.rh} rh`}></span>最優秀賞
          </h4>
          <AwardContentCard
            title='読み上げアプリ(仮)'
            author='marukun_'
            img_url='/2022/winter/entry/nc01.png'
            website_url='https://yomiage-app.vercel.app/'
            github_url='https://github.com/marukun712/yomiage-app'
          />
        </div>
        <h2 className={`${styles.ribbon} ${styles.ribbon_contest}`}>
          <img src='/moon.png' />
          コンテスト規程
        </h2>
        <div id='result' className={`${styles.marinebox}`}>
          応募ページをご覧ください <br />
          <b>(※応募受付は終了しています)</b>
          <br />
          <br />
          <Link target='_blank' href='https://n-contest.web.app/2022/winter/entry/'>
            <Button
              variant='contained'
              component='label'
              color='info'
              style={{ whiteSpace: 'nowrap', fontSize: '2vw', width: '60vw' }}
            >
              コンテスト応募ページ
              <OpenInNew />
            </Button>
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 className={`${styles.ribbon}`}>
            <img src='/moon2.png' />
            応募作品
          </h2>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
            {contentCards}
          </Grid>
        </div>
      </main>
    </div>
  )
}

// eslint-disable-next-line
function buildContentCards(entries: any): any {
  const contentCards = []
  for (let entry of entries) {
    // eslint-disable-next-line
    const [img_url, label_name, author, title, website_url, github_url] = entry
    const card = (
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <ContentCard
          title={title}
          author={author}
          label_name={label_name}
          label_color='warning'
          img_url={img_url}
          website_url={website_url}
          github_url={github_url}
        />
      </Grid>
    )
    contentCards.push(card)
  }
  return contentCards
}
