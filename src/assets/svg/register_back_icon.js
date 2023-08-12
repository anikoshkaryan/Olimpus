import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18 6l-9 9 9 9"
                stroke="#000"
                strokeWidth={4}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent
