// #pragma glslify: random = require(glsl-random)

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform float time;

float circle(in vec2 _st){
    vec2 dist = _st-vec2(0.5);
    return 1.-smoothstep(0.9-(0.9*0.01),
                          0.9+(0.9*0.01),
                          dot(dist,dist)*4.0);
}

void main(void) {
	  // vec2 st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    vec2 st = gl_FragCoord.xy/resolution.xy;
    float x = 2.0 * st.y + tan(time * 0.1 * 5.0);
    float distort = sin(time * 10.0) * 0.1 * sin(5.0 * x) * (- (x - 1.0) * (x - 1.0) + 1.0);

    // 座標を歪ませる
    st.x += distort;

    st.x += sin(st.y * 20.0) * 0.05;
    gl_FragColor = vec4(circle(st - vec2(0.0, distort) * 0.3),
                        circle(st + vec2(0.0, distort) * 0.3),
                        circle(st + vec2(distort, 0.0) * 0.3),
                        1.0);
}