import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={31}
            height={31}
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={15.5} cy={15.5} r={15.5} fill="#D9D9D9" />
            <Path
                d="M9 9l13 13M22 9L9 22"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent
