import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

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
            <Circle cx={16.5} cy={16.5} r={16.5} fill="#000" />
            <Path
                d="M14 10a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3 3 0 015.66 0H24a1 1 0 010 2h-7.17a3 3 0 01-5.66 0H10a1 1 0 110-2h1.17zM20 16a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3 3 0 015.66 0H24a1 1 0 010 2h-1.17a3 3 0 01-5.66 0H10a1 1 0 110-2h7.17zM14 22a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3 3 0 015.66 0H24a1 1 0 010 2h-7.17a3 3 0 01-5.66 0H10a1 1 0 110-2h1.17z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent
