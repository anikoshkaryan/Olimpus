import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={20}
            height={11}
            viewBox="0 0 20 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.486 1.472C17.89 1.9 12.402 7.003 9.733 9.5L1.486 1.528"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent
