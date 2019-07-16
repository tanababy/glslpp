// #pragma glslify: random = require(glsl-random)

#ifdef GL_ES
precision highp float;
#endif

varying vec2 vUv;

uniform sampler2D u_texture1;//sampler2Dは変数の型
uniform sampler2D u_texture2;
uniform sampler2D u_texture3;

uniform float dispFactor;
uniform float effectFactor;

void main() {

    vec2 uv = vUv;

    vec4 disp = texture2D(u_texture3, uv);
    //texture2DはGLSLの組み込み関数。テクスチャから色情報を抜き出すもの。だからoutputはテクスチャの色情報。
    //第一引数はテクスチャ、第二引数はUV座標。
    //「テクスチャーとは形状の情報しか持っていない3Dデータに対して、色や質感を与える情報のこと」

    vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
    vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
    //まずは、uv座標をいじっていると考える。
    //uv座標をいじったりすることで、例えばぐにゃぐにゃにしたりできる。
    //
    //dispFactorの値は、hoverする・しないで0と1の値が変化する（TweenMaxでいじってる）
    //参考 : https://nogson2.hatenablog.com/entry/2017/11/01/190122
    //disp変数はvec4型(r,g,b,a)。disp.rはその第一引数を取り出している。
    //

    vec4 _texture1 = texture2D(u_texture1, distortedPosition);
    vec4 _texture2 = texture2D(u_texture2, distortedPosition2);

    vec4 finalTexture = mix(_texture1, _texture2, dispFactor);
    //mix(x, y, a)は、x(1-a)+y*aを返す（つまり線形補間）
    //aは混ぜる割合的な。
    //例えば、赤と青を0.5の割合で混ぜると紫になる。

    gl_FragColor = finalTexture;
    // gl_FragColor = _texture1;
}