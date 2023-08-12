import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={14}
            height={22}
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12 2l-9 9 9 9"
                stroke="#000"
                strokeWidth={4}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent
