//=============================
// get mouse position (マウスカーソルの絶対座標を返す)
//=============================
let getMousePos = e => {
  let posx = 0;
  let posy = 0;
  //スクロール分ずれるのを回避
  let docScrolls = { left: document.body.scrollLeft + document.documentElement.scrollLeft, top: document.body.scrollTop + document.documentElement.scrollTop };
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  let mousePos = {x: posx - docScrolls.left, y: posy - docScrolls.top}
  return mousePos;
}

export default class tiltInteraction {

  constructor(el) {
    this.DOM = { el: el };
    this.DOM.tipIcon = this.DOM.el.firstElementChild;

    this.mousemoveFn = e => {
      this.tilt(e);
    };
    this.mouseleaveFn = e => {
      this.removeTilt(e);
    };

    this.initEvents();
  }

  initEvents() {
      this.DOM.el.addEventListener("mousemove", this.mousemoveFn);
      this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn);
  }

  tilt(e) {
    const tiltconfig = {
      toolTip: { translation: { x: [-20, 20], y: [-20, 20] } },
    };

    let mousepos = getMousePos(e);
    let t = tiltconfig.toolTip.translation;

    let rectTip = this.DOM.tipIcon.getBoundingClientRect();

    TweenMax.to(this.DOM.tipIcon, 2, {
      ease: Expo.easeOut,
      //中心を調整したマウス座標に、どれだけ動かしたいか？の比率を掛け算する。例えばマウス座標に対して2倍動かしたいなら比率は2になる。
      x: (t.x[1] - t.x[0]) / (rectTip.width) * (mousepos.x - (rectTip.left + window.pageXOffset) + document.body.scrollLeft) + t.x[0],//マウス座標の値は左側が0だから中心を調整する必要がある
      y: (t.y[1] - t.y[0]) / (rectTip.height) * (mousepos.y - (rectTip.top + window.pageYOffset) + document.body.scrollTop) + t.y[0]//y軸も同じ
    });

  }

  removeTilt() {

    TweenMax.to(this.DOM.tipIcon, 1, {
      ease: Elastic.easeOut.config(1, 0.4),
      x: 0,
      y: 0
    });
  }

}