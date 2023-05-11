'use strict'

window.addEventListener('load', () => {
  // ハンバーガーメニューとマスクメニューの要素を取得します。
  const hamburger = document.getElementById('header-hamburger');
  const mask_menu = document.getElementById('header-mask');

  // maskElementsという配列を作成.その中にすべての要素のIDを格納.
  // map関数を用いて、それぞれのIDに対応する要素を取得.
  const maskElements = [
    'top', 'information', 'statement', 'docker', 'cataract-surgery', 'lowvision-care', 
    'medical-retina', 'strong-point', 'recruit', 'contact', 'privacy-policy'
  ].map(id => document.getElementById(id));

  // activeクラスをトグル（存在するなら削除、存在しないなら追加）
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mask_menu.classList.toggle('active');
  });

  // これらの要素がクリックされた時に、ハンバーガーメニューとマスクメニューのactiveクラスを削除.
  // スプレッド構文（...）を用いて、maskElementsのすべての要素を展開.
  [mask_menu, ...maskElements].forEach(mask => {
    mask.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mask_menu.classList.remove('active');
    });
  });
});
