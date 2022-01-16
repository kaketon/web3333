function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Youtube Make Video </h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.src} alt="cute dog!" />
          </figure>
        </div>
      </div>
    );
  }
  
  function Gallery(props) {
    const { urls } = props;
    return (
      <div className="columns is-vcentered is-multiline">
        {urls.map((url) => {
          return (
            <div key={url} className="column is-3">
              <Image src={url} />
            </div>
          );
        })}
        </div>
    );
  }
  
  function Main() {
    const urls = [
      
      "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
    ];
    return (
      <main>
        <section className="section">
          <div className="container">
            <ul>
                <li><p><strong>5420074 筧 直人 日本大学文理学部情報科学科 Webプログラミングの演習課題
                </strong></p></li>
                <br></br>
                <li><p><strong>はじめに</strong></p>
                <p>私が紹介するのはYoutubeのAPIです。これを使用することで自分の動画をYoutubeに投稿することができます。まず始めにYoutubeとは、動画投稿サイトの名称であり日本ではニコニコ動画と並んで動画を投稿されています。動画と言っても種類は様々で、ゲーム実況やエンタメ、動物、クイズ、授業など他にも色々と存在しています。例に授業をあげると、学校でやったけれどいまいち理解ができていないと思ったとき、Youtubeを開き、数学ならば積分と検索すると積分について説明している動画がたくさん出てきます。そして動画は、誰でも投稿することが可能です。これによりたくさんの人が投稿していてさらに時間に関係なく好きな動画を見られることからテレビを見なくなってしまい、最近たびたび聞くテレビ離れが起きてしまっていると思われます。かくいう私もその一人であり、一日中Youtubeを見ている日もあるくらいです。そして、今回ここでは私がYoutubeの動画をお勧めし、動画を作りたくなってもらうというサイトです。
                </p></li>
                <br></br>
                <li><p><strong>じっくりゆっきょうくまめいぷる</strong></p>
                <p>まずゲーム実況としてお勧めするのが【Minecraft】一気見！！真のクラフター断崖絶壁共同生活1~6話(ゆっくり実況)という動画で、じっくりゆっきょうくまめいぷるというチャンネルです。おそらく結構な方が聞いたことがあるであろうMinecraftというゲームの実況です。これは、全部で19話あるのですが、ほっこりとしたゲームが見たい方にお勧めです。コメディな感じで笑いもあるという点が面白い点ですね。Minecraftなんか今更感ないかなと思っている方、安心してください。私もそう思っていました。しかし、この動画を見てゆっくり笑いながら動画を見ているといつの間にか動画終わりかけてます。そして、次の話へと手が伸びていくのです。ぜひご覧ください。
                </p></li>
                <a href="https://youtu.be/kxS_kPbXRXM">【Minecraft】一気見！！真のクラフター断崖絶壁共同生活1~6話(ゆっくり実況)</a>
                <br></br>
                <li><br></br><p><strong>東海オンエア</strong></p>
                <p>次にエンタメとしてお勧めするのが、「口に牛乳を含んでヒカキンさんの動画見てみた」と、「コントしてみた」で東海オンエアというグループYouTuberです。そして、まさかの2つです。しかし、理由がありまして2つ採用しております。この2つの動画、投稿されている日からまさかの6年近くも離れています。その間ももちろんこのグループは動画を投稿し続けていて、今の動画も面白いのですが6年前の動画でもかなり面白いです。これはぜひ夜中に一人で見て見てください。飲み物、吹きますよ。そして、コントしてみた、これはつい２週間目に投稿された動画です。これは昔懐かしのドリフのような形で筆者も久々に大爆笑しました。これは、確定で口から物が出ますね。ぜひご覧ください。
                </p></li>
                <a href="https://youtu.be/b2ZSQTt0LJ8">口に牛乳を含んでヒカキンさんの動画見てみた</a>
                <br></br><a href="https://youtu.be/XqlK3lzmcLA">コントしてみた</a>
                <li><br></br><p><strong>はなおでんがん</strong></p>
                <p>そして、最後に勉強としてお勧めしていいのかわかりませんが、一応勉強として捉えることができそうなので勉強部門として紹介します。その動画が「理系学生が初代プリキュアの力をガチで計算したらとんでもない数値になったｗｗ」、「【文系下ネタ】古文の詩集がド変態すぎるので後輩女子に音読させてツッコんでみたｗｗｗｗｗｗｗｗｗ【文理融合ホイホイ】」です。またしても2つです。プリキュアの方は、がっつり物理を使って計算していきます。確実に物理を履修していない方はわからない話が出てきます。しかし、それでも面白く出来上がっているのがこの動画。空想科学読本に近いですね。最終的に凄まじい結果が出ます。そして、古典の方ですが、この動画、男子諸君は大好きです。宇治拾遺物語という古典を読んでいきます。どんどん行けない方に転がっていく内容に対してツッコんでいくという動画です。これは、勉強といっていいか分かりませんが一応古典を扱っているのでセーフとしました。ぜひご覧ください。
                </p></li>
                <a href="https://youtu.be/fuKRIuaEnBA">理系学生が初代プリキュアの力をガチで計算したらとんでもない数値になったｗｗ</a>
                <br></br><a href="https://youtu.be/58obxJNjcTg">【文系下ネタ】古文の詩集がド変態すぎるので後輩女子に音読させてツッコんでみたｗｗｗｗｗｗｗｗｗ【文理融合ホイホイ】</a>
                <li><br></br><p><strong>さいごに</strong></p>
                <p>以上ここまでどうでしたでしょうか？面白い動画ばかりなのでぜひご覧いただきたいですね。人を笑顔にできるいいものです。そして、動画をここまで見てくれた方の中には自分も動画を投稿してみたいと思ってくれている方もいることでしょう。ぜひ少しでも作ってみようかなと思ったときにはこの下にある「動画を投稿してみよう！」というリンクをクリックしてみてください。
                </p></li>
            </ul>
          </div>
          
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>URL taken from Youtube</p>
          <p>
            <a href="https://developers.google.com/youtube/">動画を投稿してみよう！</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;