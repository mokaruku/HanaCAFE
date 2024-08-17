//ハンバーガーボタン
document.addEventListener('DOMContentLoaded', function () {
  var openBtn = document.querySelector('.openbtn');
  var headerSp = document.querySelector('.c-header__sp');

  openBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      headerSp.style.height = headerSp.scrollHeight + 'px';
      headerSp.style.overflow = 'visible';
    } else {
      headerSp.style.height = '0';
      headerSp.style.overflow = 'hidden';
    }
  });
});
//NEWS
document.querySelectorAll('.news__topic').forEach(topic => {
  topic.addEventListener('click', () => {
    window.location.href = 'https://hanacafenappa69.shopinfo.jp/pages/5452799/static';
  });
});

document.querySelectorAll('.news__topic').forEach(topic => {
  topic.addEventListener('click', () => {
    if (topic.textContent === '2024SUMMER ハッピーアワー‼︎') {
      window.location.href = 'https://hanacafenappa69.shopinfo.jp/posts/54532780';
    } else if (topic.textContent === 'テイクアウト、デリバリーやってます。') {
      window.location.href = 'https://wolt.com/ja/jpn/kawasaki/restaurant/kosugi-cafe-nappa69';
    }
  });
});
//MENU-images
$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});
