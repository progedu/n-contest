import Head from 'next/head'

export default function Home(): any {
  return (
    <div>
      <Head>
        <title>N予備校 動くWebページコンテスト 2022 冬 | 応募ページ</title>
        <meta
          name='description'
          content='N予備校 動くWebページコンテスト2022夏は、N予備校プログラミング入門コースで学んだN・S高校生、N中等部生ならびにN予備校受講者が、 プログラミングの成果物を競うコンテストです。'
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="og:image" content="https://n-contest.web.app/images/2022_entry.png"></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='snows'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='flex items-center'>
        <div className='text-center mx-auto inline-block bg-winter w-full bg-cover text-white bg-no-repeat min-h-[700px]'>
          <h1 className='text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-[200px] mx-auto mb-10 p-2 bg-zinc-800 bg-opacity-80'>
            N予備校 <br />
            動くWebページコンテスト
            <br />
            2022 冬
          </h1>
        </div>
      </div>
      <div className='text-2xl bg-white text-center p-5'>
        <h3 className='w-[80%] mx-auto font-extrabold'>
          N予備校動くWebページコンテスト2022冬は、N予備校プログラミング入門コースで学んだN・S高校生、N中等部生ならびにN予備校受講者が、プログラミングの成果物を競うコンテストです。
        </h3>
      </div>
      <div id='projects' className='bg-red-100 p-2 text-center'>
        <h2 className='text-center text-3xl font-bold m-7'>応募締切</h2>
        <div className='p-7 mx-auto my-3 rounded-md text-3xl text-rose-500 font-bold'>
          2023年1月31日(火曜日)
        </div>
      </div>
      <div id='projects' className='bg-stone-100 p-2 text-center'>
        <h2 className='text-center text-3xl font-bold m-7'>結果発表</h2>
        <dl className='p-5 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-xl font-bold my-2'>
            結果発表ページならびに、プログラミングコース座談会の生授業内で発表します
          </dt>
          <dd className='text-center'>
            <a
              href='https://www.nnn.ed.nico/lessons/482532171'
              target='_blank'
              rel='noreferrer'
              className='block mx-auto flex p-7 mx-auto my-5 bg-white hover:bg-blue-200 rounded-md shadow-lg max-w-[500px] border-solid border-2 border-gray-400'
            >
              <div className='w-[80px]'>
                <img src='/images/zadankai.png' />
              </div>
              <div className='text-md'>
                2023年3月2日 (木) 19:00 ~ (90分) 予定
                <br />
                <b>【月次特番】 プログラミングコース座談会 #26</b>
              </div>
            </a>
          </dd>
        </dl>
      </div>
      <div id='projects' className='bg-sky-300 p-2'>
        <h2 className='text-center text-3xl font-bold m-7'>応募規定</h2>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            N予備校にてプログラミングコースを受講中であること
          </dt>
          <dd className='text-center'>
            N予備校プログラミングコース受講生、または N・S高等学校/N中等部の課外授業
            にてプログラミングコースを受講している方が応募できます。
            <br />
            コンテスト期間中に退会を行うと、審査対象外となったり賞状や賞品が送付できなくなる可能性があります。
          </dd>
        </dl>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            クライアントサーバシステムの Web アプリケーションであること
          </dt>
          <dd className='text-center'>
            サーバーサイドの実装量は問いませんが、必ず HTTP
            リクエストを処理するコードを実装してください。
            <br />第 4 章以降で学ぶ Web フレームワークを利用することをオススメします。
          </dd>
        </dl>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            N予備校で教材を用意している言語を主として使用していること
          </dt>
          <dd className='text-center'>
            N予備校プログラミングコースでは、JavaScript（TypeScript）、Scala、Python、Golang、Swift、Java
            の教材を用意しています。
          </dd>
        </dl>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            著作権上問題のないメディアファイル、コードのみで構成されていること
          </dt>
          <dd className='text-center'>
            自作でない画像やライブラリを利用する際は、該当コンテンツのライセンスを十分に確認してください。
          </dd>
        </dl>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            コードの提出は GitHub リポジトリの URL を提出すること
          </dt>
          <dd className='text-center'>
            審査期間中のコード変更は禁止しませんが、バグなどが含まれると評点が下がる可能性があります。
            <br />
            審査用にブランチを分けておくと管理がしやすいです。
            <br />
            リポジトリの公開設定は Public で作成してください。
          </dd>
        </dl>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            動作確認ができる URL を提出すること
          </dt>
          <dd className='text-center'>
            render 等で応募作品のアプリケーションをホスティングし、アプリケーションの URL
            を提出してください。
            <br />
            審査期間中のアプリケーション変更は禁止しませんが、バグなどが含まれると評点が下がる可能性があります。
            <br />
            提出しているコードと同じ動作となるようにしてください。
            <br />
            render は、3章31節で学習します。
          </dd>
        </dl>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            作品は審査期間中、 Google Chrome ブラウザで正常に動作すること
          </dt>
          <dd className='text-center'>審査は PC 版 Google Chrome ブラウザにて行われます。</dd>
        </dl>
        <dl className='p-7 mx-auto my-5 bg-white w-11/12 rounded-md shadow-lg'>
          <dt className='text-center text-2xl font-bold my-2'>
            応募作品は公開される可能性があるため、それに了承できること
          </dt>
          <dd className='text-center'>
            応募作品のコードおよびアプリケーションの URL
            は結果ページにリンクが貼られ、プログラミングの授業などにて紹介されます。
            <br />
            授業での表彰および紹介が終わるまでは、アプリケーションのホスティングを続けてください。
          </dd>
        </dl>
      </div>
      <div id='projects' className='bg-emerald-300 p-2 pb-10'>
        <h2 className='text-center text-3xl font-bold m-7'>評価項目</h2>
        <div className='flex flex-wrap -m-7 w-11/12 mx-auto space-x-4'>
          <dl className='w-full lg:w-[32%] p-7 my-5 bg-white rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>コーディング</dt>
            <dd className='text-center text-lg my-2'>
              <ul className='divide-y-[3px] divide-gray-300'>
                <li className='p-2'>ファイル/フォルダが整理されているか</li>
                <li className='p-2'>コードが見やすく整理されているか</li>
                <li className='p-2'>必要なコメントが記述されているか</li>
                <li className='p-2'>GitHubを有効に活用できているか</li>
                <li className='p-2'>ライブラリやフレームワークを活用できているか</li>
              </ul>
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 my-5 bg-white rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>完成度</dt>
            <dd className='text-center text-lg my-2'>
              <ul className='divide-y-[3px] divide-gray-300'>
                <li className='p-2'>バグや動作不良などはないか</li>
                <li className='p-2'>攻撃可能な脆弱性はないか</li>
                <li className='p-2'>UI/UX が洗練されているか</li>
                <li className='p-2'>テストコードが書かれているか</li>
                <li className='p-2'>初めての人が迷子にならないか</li>
              </ul>
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 my-5 bg-white rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>コーディング</dt>
            <dd className='text-center text-lg my-2'>
              <ul className='divide-y-[3px] divide-gray-300'>
                <li className='p-2'>作品のテーマ・アイデアが新しいか</li>
                <li className='p-2'>機能や実装に独創性があるか</li>
                <li className='p-2'>時世やトレンドを取り入れているか</li>
                <li className='p-2'>デザインに創意工夫があるか</li>
                <li className='p-2'>実際に使われていてユーザーが付いているか</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <div id='nhigh' className='bg-sky-200 p-2 pb-10'>
        <h2 className='text-center text-3xl font-bold m-7'>N・S高等学校 部門</h2>
        <div className='flex flex-wrap -m-7 w-11/12 mx-auto space-x-4'>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-yellow-100 rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>最優秀賞(1名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
              <br />
              賞品は以下から<b>1点</b>お選びください。
              <ul>
                <li>
                  <a
                    href='https://www.pfu.ricoh.com/direct/hhkb/'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    HHKB (限定版を除く)
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.realforce.co.jp/products/'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    RealForce (限定版を除く)
                  </a>
                </li>
                <li>
                  <a
                    href='https://gaming.logicool.co.jp/ja-jp/products/gaming-audio/pro-x-wireless-headset.981-000911.html'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    ヘッドセット
                  </a>
                </li>
                <li>
                  <a
                    href='https://amzn.asia/d/hE0FWFp'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    スピーカーフォン
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-slate-200 rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>優秀賞(1名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
              <br />
              賞品は以下から<b>1点</b>お選びください。
              <ul>
                <li>
                  <a
                    href='https://www.razer.com/jp-jp/gaming-mice/razer-basilisk-ultimate'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    マウス
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.logicool.co.jp/ja-jp/products/mice/mx-ergo-wireless-trackball-mouse.910-005183.html'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    トラックボールマウス
                  </a>
                </li>
                <li>
                  <a
                    href='https://gaming.logicool.co.jp/ja-jp/products/gaming-audio/g933s-wireless-7-1-surround-sound-lightsync-gaming-headset.981-000747.html'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    ヘッドセット
                  </a>
                </li>
                <li>
                  <a
                    href='https://amzn.asia/d/acJ41Gn'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    ゲーミングチェア
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.wacom.com/ja-jp/products/wacom-intuos'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    ペンタブレット
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-white rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>健闘賞(複数名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
              <br />
              賞品は以下のものが送られます。
              <ul>
                <li>
                  <a
                    href='https://thegithubshop.com/products/octodex-sticker-packs'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    GitHub ステッカーパック
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <a
          href='https://forms.gle/84kpHAWgYQRXU4VG9'
          target='_blank'
          rel='noreferrer'
          className='block bg-blue-600 hover:bg-blue-700 text-3xl text-center text-white font-bold py-5 px-10 w-10/12 rounded mt-10 mb-5 mx-auto'
        >
          応募はこちらから
        </a>
      </div>
      <div id='nchu' className='bg-orange-200 p-2 pb-10'>
        <h2 className='text-center text-3xl font-bold m-7'>N中等部 部門</h2>
        <div className='flex flex-wrap -m-7 w-11/12 mx-auto space-x-4'>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-yellow-100 rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>最優秀賞(1名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
              <br />
              賞品は以下から<b>1点</b>お選びください。
              <ul>
                <li>
                  <a
                    href='https://www.razer.com/jp-jp/gaming-mice/razer-basilisk-ultimate'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    マウス
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.logicool.co.jp/ja-jp/products/mice/mx-ergo-wireless-trackball-mouse.910-005183.html'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    トラックボールマウス
                  </a>
                </li>
                <li>
                  <a
                    href='https://gaming.logicool.co.jp/ja-jp/products/gaming-audio/g933s-wireless-7-1-surround-sound-lightsync-gaming-headset.981-000747.html'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    ヘッドセット
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.razer.com/jp-jp/gaming-keyboards/razer-huntsman-mini'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    キーボード
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-slate-200 rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>優秀賞(1名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
              <br />
              賞品は以下から<b>1点</b>お選びください。
              <ul>
                <li>
                  <a
                    href='https://www.xp-pen.jp/product/478.html'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    ペンタブレット
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.logicool.co.jp/ja-jp/products/webcams/c922n-pro-stream-webcam.960-001262.html'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    WEBカメラ
                  </a>
                </li>
                <li>
                  <a
                    href='https://row.hyperx.com/ja/products/hyperx-solocast-usb-microphone?variant=40916449558733'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    マイク
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-white rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>健闘賞(複数名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
              <br />
              賞品は以下のものが送られます。
              <ul>
                <li>
                  <a
                    href='https://thegithubshop.com/products/octodex-sticker-packs'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    GitHub ステッカーパック
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <a
          href='https://forms.gle/84kpHAWgYQRXU4VG9'
          target='_blank'
          rel='noreferrer'
          className='block bg-orange-600 hover:bg-orange-700 text-3xl text-center text-white font-bold py-5 px-10 w-10/12 rounded mt-10 mb-5 mx-auto'
        >
          応募はこちらから
        </a>
      </div>
      <div id='nyobi' className='bg-purple-200 p-2 pb-10'>
        <h2 className='text-center text-3xl font-bold m-7'>N予備校 部門</h2>
        <div className='flex flex-wrap -m-7 w-11/12 mx-auto space-x-4'>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-yellow-100 rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>最優秀賞(1名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
              <br />
              賞品は「改訂版 高校生からはじめる
              プログラミング」を、講師全員のサイン入りでお送りいたします。
              <a href='https://www.amazon.co.jp/dp/4046052228/' target='_blank' rel='noreferrer'>
                <img className='lg:hidden mx-auto w-60' src='/images/amazon.jpg' />
              </a>
              <ul>
                <li>
                  <a
                    href='https://www.amazon.co.jp/dp/4046052228/'
                    target='_blank'
                    rel='noreferrer'
                    className='block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2'
                  >
                    改訂版 高校生からはじめる プログラミング
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-slate-200 rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>デザイン・技能特別賞(複数名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
            </dd>
          </dl>
          <dl className='w-full lg:w-[32%] p-7 mx-auto my-5 bg-white rounded-md shadow-lg'>
            <dt className='text-center text-2xl font-bold my-2'>健闘賞(複数名)</dt>
            <dd className='text-center'>
              結果発表ページにて作品を展示、プログラミング入門コースにて紹介します。
              <br />
              賞状および賞品、各審査員からのフィードバックコメントを送付します。
            </dd>
          </dl>
        </div>
        <a
          href='https://questant.jp/q/U2AAO0ZM'
          target='_blank'
          rel='noreferrer'
          className='block bg-violet-600 hover:bg-violet-700 text-3xl text-center text-white font-bold py-5 px-10 w-10/12 rounded mt-10 mb-5 mx-auto'
        >
          応募はこちらから
        </a>
      </div>
      <div id='nintei' className='bg-cyan-200 p-2 pb-10'>
        <h2 className='text-center text-3xl font-bold m-7'>終了認定</h2>
        <div className='p-5 mx-auto my-5 bg-white max-w-[600px] rounded-md shadow-lg'>
          <div className='text-center text-xl font-bold my-2'>
            N予備校プログラミング入門コース修了認定証
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-[32%] mr-2'>
              <a href='/images/cert.png' target='_blank' rel='noreferrer'>
                <img src='/images/cert.png' />
              </a>
            </div>
            <div className='w-full lg:w-[66%] mt-2'>
              各賞とは別に、N予備校の入門コース第４章までの内容をコードに反映できている作品の応募者には、
              <b>『N予備校プログラミング入門コース修了認定証』</b>を贈呈します。
            </div>
          </div>
        </div>
      </div>
      <div id='koremade' className='bg-white p-2 pb-10'>
        <h2 className='text-center text-3xl font-bold m-7'>これまでのコンテスト</h2>
        <a
          href='https://progedu.github.io/webappcontest/'
          target='_blank'
          rel='noreferrer'
          className='block bg-stone-600 hover:bg-stone-700 text-2xl text-center text-white font-bold py-4 px-8 w-10/12 rounded mt-10 mb-5 mx-auto'
        >
          これまでのコンテストはこちらから
        </a>
      </div>
      <div id='judge' className='bg-zinc-200 p-2 pb-10'>
        <h2 className='text-center text-3xl font-bold m-7'>審査員</h2>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-[24%] p-5 mx-auto my-5 bg-white rounded-md shadow-lg'>
            <img src='/images/orihara_teacher.png' />
            <div className='text-center text-2xl font-bold my-2'>折原 ダビデ竜</div>
            <div className='text-center text-xl text-gray-500 my-2'>プログラミング講師</div>
            <div className='text-center text-xl text-gray-500 my-2'>
              東京理科大学大学院情報科学専攻修了。卒業後、株式会社ドワンゴに入社。
              ニコニコ生放送の開発に携わり、2016年よりN予備校のプログラミング講師として高校生にプログラミングを教える。
            </div>
          </div>
          <div className='w-full lg:w-[24%] p-5 mx-auto my-5 bg-white rounded-md shadow-lg'>
            <img src='/images/tsuno_teacher.png' />
            <div className='text-center text-2xl font-bold my-2'>津野 貴大</div>
            <div className='text-center text-xl text-gray-500 my-2'>プログラミング講師</div>
            <div className='text-center text-xl text-gray-500 my-2'>
              静岡大学情報学部情報科学科卒業後、株式会社ドワンゴに新卒入社。
              イラスト・漫画サービスの開発に携わり、2020年よりN予備校のプログラミング講師として高校生にプログラミングを教える。
            </div>
          </div>
          <div className='w-full lg:w-[24%] p-5 mx-auto my-5 bg-white rounded-md shadow-lg'>
            <img src='/images/tsunoda_teacher.png' className='rounded-full' />
            <div className='text-center text-2xl font-bold my-2'>角田 志穂</div>
            <div className='text-center text-xl text-gray-500 my-2'>プログラミング講師</div>
            <div className='text-center text-xl text-gray-500 my-2'>
              SI系システム開発会社にて半導体セミナーの講師を担当。ドワンゴでは、2022年よりN予備校のプログラミング講師として高校生にプログラミングを教える。
            </div>
          </div>
          <div className='w-full lg:w-[24%] p-5 mx-auto my-5 bg-white rounded-md shadow-lg'>
            <img src='/images/koizuka_teacher.jpg' className='rounded-full' />
            <div className='text-center text-2xl font-bold my-2'>戀塚 昭彦</div>
            <div className='text-center text-xl text-gray-500 my-2'>教材総監修</div>
            <div className='text-center text-xl text-gray-500 my-2'>
              システム開発会社にて制御系プログラムの開発に従事。
              その後、フリーランスを経てドワンゴに入社。
              ニコニコ動画のプロトタイプを三日で創り出した伝説的プログラマ。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
