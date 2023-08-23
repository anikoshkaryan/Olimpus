import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={8}
            height={13}
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M1 1l5.5 5.5L1 12" stroke="#8A8A8D" strokeLinecap="round" />
        </Svg>
    )
}

export default SvgComponent
