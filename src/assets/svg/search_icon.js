import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M21 21l-4.486-4.494M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0v0z"
                stroke="#686868"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent
