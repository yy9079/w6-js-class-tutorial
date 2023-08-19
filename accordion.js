(() => {
  // クラスとインスタンス
  class Accordion {
    // 初期化
    constructor(obj) {
      console.log("obj", obj);
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const $triggerLen = $trigger.length;
      let index = 0;
      while (index < $triggerLen) {
        // クラスの中で関数を指定した場合は、clickHandler(e)の前に「this」を入れなければならない
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    // クリックしたら実行される処理
    // クラスの中で関数を書くときは、const不要なので消す
    clickHandler = (e) => {
      e.preventDefault();

      const $target = e.currentTarget;

      const $content = $target.nextElementSibling;
      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    };
  }

  // インスタンスを生成 生成するときは変数を必ず指定する
  //ここでid、タグを変えられる→constructorで呼び出す
  const fuckingAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
  });

  const dummyAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "a",
  });

  const miniAccordion = new Accordion({
    hookName: "#js-accordion-mini",
    tagName: "dt",
  });
})();
