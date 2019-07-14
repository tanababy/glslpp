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
    // this.DOM.tipIcon = this.DOM.el.find('.tooltip__icon');
    // this.DOM.globalNavBg = this.DOM.el.find('.global-nav__bg');
    // this.DOM.pointer = $('.mouse-pointer');
    // this.DOM.pointerWrapper = $('.mouse-pointer__wrapper');
    // this.DOM.pointerChild = this.DOM.pointer.find('.mouse-pointer__point');
    // this.DOM.pointerHalfWidth = this.DOM.pointerChild.width() / 2;
    // this.DOM.pointerHalfHeight = this.DOM.pointerChild.height() / 2;

    // this.mousemovePointerFn = e => {
    //   this.pointer(e);
    // };
    this.mousemoveFn = e => {
      this.tilt(e);
    };
    this.mouseleaveFn = e => {
      this.removeTilt(e);
    };

    this.initEvents();
  }

  initEvents() {
      // $('body').on("mousemove", this.mousemovePointerFn);
      this.DOM.el.addEventListener("mousemove", this.mousemoveFn);
      this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn);

    // $('a,button,label,.pointer-scale-target,.kurukuru-slider__control-knob,.lity-opened').each((idx,el) => {
    //   $(el).on('mouseenter', () => {
    //     this.DOM.pointerWrapper.addClass('is-hover');
    //   });
    //   $(el).on('mouseleave', () => {
    //     this.DOM.pointerWrapper.removeClass('is-hover');
    //   });
    // });
  }

  // pointer(e) {
  //   let mousepos = getMousePos(e);

  //   TweenMax.to(this.DOM.pointerWrapper,.2, {
  //     x: mousepos.x - this.DOM.pointerHalfWidth,
  //     y: mousepos.y - this.DOM.pointerHalfHeight,
  //   });

  //   TweenMax.set(this.DOM.pointerChild, {
  //     opacity: 1
  //   });
  // }

  tilt(e) {

    let mousepos = getMousePos(e);

    let rect = this.DOM.el.getBoundingClientRect();

    TweenMax.to(this.DOM.el, 2, {
      ease: Expo.easeOut,
      rotationY: (mousepos.x - (rect.left + window.pageXOffset) + document.body.scrollLeft - (rect.width / 2)) * 0.02, //座標を真ん中にして、テキトー（勘）な割合を掛け算する
      rotationX: (mousepos.y - (rect.top + window.pageYOffset) + document.body.scrollTop - (rect.height / 2)) * -0.04, //座標を真ん中にして、テキトー（勘）な割合を掛け算する
      scale: 1.15,
      transformOrigin: "50% 50%"
    });

  }

  removeTilt() {

    TweenMax.to(this.DOM.el, 1, {
      ease: Expo.easeOut,
      rotationY: 0,
      rotationX: 0,
      scale: 1,
    });
  }

}