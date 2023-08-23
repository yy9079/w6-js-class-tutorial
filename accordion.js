(() => {
  // クラスとインスタンス
  class Accordion {
    // 初期化
    constructor(obj) {
      console.log("obj", obj);
      const $elm = document.querySelector(obj.hookName);
      this.$trigger = $elm.getElementsByTagName(obj.tagName);

      // console.log($elm);
      // console.log($trigger);

      const triggerLen = this.$trigger.length;
      let index = 0;
      while (index < triggerLen) {
        // クラスの中で関数を指定した場合は、clickHandler(e)の前に「this」を入れなければならない
        this.$trigger[index].addEventListener("click", (e) =>
          this.clickHandler(e)
        );
        index++;
      }
    }

    // クリックしたら実行される処理
    // クラスの中で関数を書くときは、const不要なので消す
    clickHandler = (e) => {
      e.preventDefault();

      // クリックされた要素のこと
      const $target = e.currentTarget;

      console.log($target);

      // nextElementSibling:クリックした次の要素(並列)を取ってくる
      // 「A○」の部分
      const $content = $target.nextElementSibling;
      console.log($content);
      // getElementsByTagName：クリックしたタグの中（子要素）を持ってくる
      const $img = $target.getElementsByTagName("img")[0];

      console.log($img);

      if ($content.style.display === "block") {
        // 順番が変わるとうまく動かない
        $content.style.display = "none";
        // アレンジクリックで色が変わる
        $target.style.backgroundColor = "";
        $img.style.opacity = 0;
      } else {
        $content.style.display = "block";
        // アレンジクリックで色が変わる
        $target.style.backgroundColor = "#FF6F61";
        $img.style.opacity = 1;
      }
    };
  }

  // lickHandler = (e) => {
  //   e.preventDefault();

  //   const $target = e.currentTarget;
  //   console.log($target);

  //   // nextElementSibling:クリックした次の要素を取ってくる
  //   const $content = $target.nextElementSibling;
  //   console.log(this.$trigger);
  //   const $img = $target.getElementsByTagName("img")[0];
  //   console.log($img[0]);

  //   if ($content.style.display === "block") {
  //     $content.style.display = "none";
  //     $img.style.opacity = 0;
  //     // ＊＊＊アレンジ　初期化ができない　initialを入れると白色になる。
  //     $target.style.backgroundColor = "";
  //   } else {
  //     $content.style.display = "block";
  //     // $img.style.display = "block";
  //     // アレンジ　クリックで色が変わる
  //     $target.style.backgroundColor = "#FF6F61";
  //     $img.style.opacity = 1;
  //   }
  // };

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
