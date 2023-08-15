import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={33}
            height={33}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.5 2.75c-6.065 0-11 4.935-11 10.993-.04 8.862 10.582 16.21 11 16.507 0 0 11.04-7.645 11-16.5 0-6.065-4.935-11-11-11zm0 16.5a5.498 5.498 0 01-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5-2.461 5.5-5.5 5.5z"
                fill="#000"
            />
            <Circle cx={9.5} cy={2.5} r={0.5} fill="#D9D9D9" />
            <Circle cx={16.5} cy={13.5} r={8.5} fill="#fff" />
        </Svg>
    )
}

export default SvgComponent
