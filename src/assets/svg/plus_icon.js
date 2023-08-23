import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1 10h18M10 19V1"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent
