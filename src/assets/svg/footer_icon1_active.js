import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.881 1.823a2.133 2.133 0 00-2.762 0L2.72 7.26a2.133 2.133 0 00-.751 1.625v8.505a1.64 1.64 0 001.64 1.64h3.282a1.64 1.64 0 001.64-1.64v-4.594a.328.328 0 01.328-.328h2.954a.328.328 0 01.328.328v4.594a1.64 1.64 0 001.64 1.64h3.61a1.64 1.64 0 001.64-1.64V8.886a2.133 2.133 0 00-.751-1.625L11.88 1.823z"
                fill="#E50B0B"
            />
        </Svg>
    )
}

export default SvgComponent
