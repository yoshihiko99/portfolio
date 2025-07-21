//=========================================================================
//  フェードインアップ
//=========================================================================
document.addEventListener("DOMContentLoaded", function () {
  const scrollAnimationElm = document.querySelectorAll(".js-scroll-up")

  const scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      const triggerMargin = 100;
      if (
        window.innerHeight >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add("on")
      }
    }
  };

  // 最初の読み込み時に1回
  scrollAnimationFunc();

  // スクロール時に反応
  window.addEventListener("scroll", scrollAnimationFunc)
});