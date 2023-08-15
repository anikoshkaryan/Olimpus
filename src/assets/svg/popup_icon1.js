import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={238}
            height={238}
            viewBox="0 0 238 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M138.833 188.417c37.396 0 56.099 0 67.711-11.623 11.623-11.612 11.623-30.315 11.623-67.711 0-37.395 0-56.098-11.623-67.71-11.612-11.623-30.315-11.623-67.711-11.623H99.167c-37.396 0-56.099 0-67.711 11.622-11.623 11.613-11.623 30.316-11.623 67.711 0 37.396 0 56.099 11.623 67.711 6.475 6.486 15.152 9.352 28.044 10.611"
                stroke="url(#paint0_linear_79_18)"
                strokeWidth={13}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M138.833 188.417c-12.257 0-25.763 4.958-38.09 11.354-19.813 10.284-29.72 15.431-34.6 12.148-4.878-3.272-3.956-13.437-2.102-33.756l.417-4.621M97.966 88.05L119 109.083m0 0l21.033 21.034M119 109.083l21.033-21.033M119 109.083l-21.034 21.034"
                stroke="url(#paint1_linear_79_18)"
                strokeWidth={13}
                strokeLinecap="round"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_79_18"
                    x1={119}
                    y1={29.75}
                    x2={119}
                    y2={188.417}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7697A" />
                    <Stop offset={1} stopColor="#910CC0" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_79_18"
                    x1={101.29}
                    y1={88.05}
                    x2={101.29}
                    y2={212.904}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7697A" />
                    <Stop offset={1} stopColor="#910CC0" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
