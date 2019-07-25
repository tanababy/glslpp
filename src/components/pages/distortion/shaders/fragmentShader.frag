// #pragma glslify: random = require(glsl-random)

#ifdef GL_ES
precision highp float;
#endif

varying vec2 vUv;

#define PI 3.14159265359

uniform sampler2D u_texture1;//sampler2Dは変数の型
uniform sampler2D u_texture2;
uniform sampler2D u_texture3;

uniform vec2 resolution;
uniform vec2 imageResolution;

uniform float time;
uniform float dispFactor;
uniform float effectFactor;

mat2 scale(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {

    vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );

    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    vec4 disp = texture2D(u_texture3, uv);
    // vec4 black = texture2D(u_texture1, uv);
    //texture2DはGLSLの組み込み関数。テクスチャから色情報を抜き出すもの。だからoutputはテクスチャの色情報。
    //第一引数はテクスチャ、第二引数はUV座標。
    //「テクスチャーとは形状の情報しか持っていない3Dデータに対して、色や質感を与える情報のこと」

    // vec2 distortedPosition = vec2(uv.x + dispFactor * (1.0), uv.y);
    // vec2 distortedPosition2 = scale( vec2(0.5) ) * uv;
    // vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
    vec2 distortedPosition2 = uv + rotate2d(30.0) * vec2(disp.r,disp.g) * (1.0 - dispFactor) * 0.1;

    // vec2 distortedPosition2 = vec2(uv.x * disp.r, uv.y * disp.r);

    //まずは、uv座標をいじっていると考える。
    //uv座標をいじったりすることで、例えばぐにゃぐにゃにしたりできる。
    //
    //dispFactorの値は、hoverする・しないで0と1の値が変化する（TweenMaxでいじってる）
    //参考 : https://nogson2.hatenablog.com/entry/2017/11/01/190122
    //disp変数はvec4型(r,g,b,a)。disp.rはその第一引数を取り出している。
    //

    vec4 _texture1 = texture2D(u_texture1, uv);
    vec4 _texture2 = texture2D(u_texture2, distortedPosition2);

    vec4 finalTexture = mix(_texture1, _texture2, dispFactor);
    //mix(x, y, a)は、x(1-a)+y*aを返す（つまり線形補間）
    //aは混ぜる割合的な。
    //例えば、赤と青を0.5の割合で混ぜると紫になる。

    gl_FragColor = finalTexture;
    // gl_FragColor = _texture2;
}


// varying vec2 vUv;
// uniform float dispFactor;
// uniform sampler2D disp;
// uniform sampler2D texture1;
// uniform sampler2D texture2;
// uniform float angle1;
// uniform float angle2;
// uniform float intensity1;
// uniform float intensity2;
// uniform vec2 resolution;
// uniform vec2 imageResolution;
// vec2 getRotM(float angle) {
//   float s = sin(angle);
//   float c = cos(angle);
//   return vec2(-c, s);
// }
// void main() {
//   vec2 ratio = vec2(min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0));
//   vec2 uv = vec2(vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,vUv.y * ratio.y + (1.0 - ratio.y) * 0.5);
//   vec4 disp = texture2D(disp, vUv);
//   vec2 dispVec = vec2(disp.r, disp.g);
//   vec2 distortedPosition1 = uv + getRotM(angle1) * dispVec * intensity1 * dispFactor;
//   vec2 distortedPosition2 = uv + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
//   vec4 _texture1 = texture2D(texture1, distortedPosition1);
//   vec4 _texture2 = texture2D(texture2, distortedPosition2);
//   gl_FragColor = mix(_texture1, _texture2, dispFactor);
// }