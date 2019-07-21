// #pragma glslify: random = require(glsl-random)

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;

void main() {
	vec2 st = gl_FragCoord.xy/resolution;
	gl_FragColor = vec4(st.x,st.y,0.728,1.0);
}