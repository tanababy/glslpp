// #pragma glslify: random = require(glsl-random)

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform vec2 imageResolution;
uniform float time;
varying vec2 vUv;
uniform sampler2D u_texture1;

void main() {
  vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );

  vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
    vec2 zure = vec2(sin(vUv.y * 17.0 + time * 2.5) * 0.02, 0.0);
    vec4 dest = texture2D(u_texture1, uv + zure);
    gl_FragColor = dest;
}