'use strict'

window.addEventListener('load', () => {
  // ウィンドウの幅が540px以下ならば
  if (window.innerWidth <= 540) {
    // ここに540px以下の時の処理を書く
    console.log('540px以下');

        
    // ハンバーガーメニューとマスクメニューの要素を取得します。
    const hamburger_sp = document.getElementById('header-hamburger-sp');
    const mask_menu_sp = document.getElementById('header-mask-sp');

    // maskElementsという配列を作成.その中にすべての要素のIDを格納.
    // map関数を用いて、それぞれのIDに対応する要素を取得.
    const maskElements = [
      'mask-top', 'mask-information', 'mask-statement', 'mask-docker', 'mask-cataract-surgery', 
      'mask-lowvision-care', 'mask-medical-retina', 'mask-strong-point', 'mask-recruit', 'mask-contact', 
      'mask-privacy-policy'
    ].map(id => document.getElementById(id));    

    // activeクラスをトグル（存在するなら削除、存在しないなら追加）
    hamburger_sp.addEventListener('click', () => {
      hamburger_sp.classList.toggle('active');
      mask_menu_sp.classList.toggle('active');
    });

    // これらの要素がクリックされた時に、ハンバーガーメニューとマスクメニューのactiveクラスを削除.
    // スプレッド構文（...）を用いて、maskElementsのすべての要素を展開.
    [mask_menu_sp, ...maskElements].forEach(mask => {
      mask.addEventListener('click', () => {
        hamburger_sp.classList.remove('active');
        mask_menu_sp.classList.remove('active');
      });
    });
  } else {
    // ここに541px以上の時の処理を書く
    console.log('540px以上');

    // ハンバーガーメニューとマスクメニューの要素を取得します。
    const hamburger = document.getElementById('header-hamburger');
    const mask_menu = document.getElementById('header-mask');

    // maskElementsという配列を作成.その中にすべての要素のIDを格納.
    // map関数を用いて、それぞれのIDに対応する要素を取得.
    const maskElements = [
      'mask-top', 'mask-information', 'mask-statement', 'mask-docker', 'mask-cataract-surgery', 
      'mask-lowvision-care', 'mask-medical-retina', 'mask-strong-point', 'mask-recruit', 'mask-contact', 
      'mask-privacy-policy'
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
  }

});
