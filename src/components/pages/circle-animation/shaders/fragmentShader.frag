// #pragma glslify: random = require(glsl-random)

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform float time;

void main(void) {
    vec2 st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

    st.x += sin(st.y * time * 2000.0) * 0.05;

    vec4 c = vec4(0.0,1.0,0.0,1.0);

    if(pow(st.x,2.0) + pow(st.y,2.0) <= 0.5){
        c = vec4(1.0);
    }
    gl_FragColor = c;
}