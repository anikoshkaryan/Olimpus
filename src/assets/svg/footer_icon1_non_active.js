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
                d="M11.881 1.822a2.133 2.133 0 00-2.762 0L2.72 7.261a2.133 2.133 0 00-.751 1.624v8.505a1.64 1.64 0 001.64 1.641h3.282a1.64 1.64 0 001.64-1.64v-4.594a.328.328 0 01.328-.328h2.954a.328.328 0 01.328.328v4.593a1.64 1.64 0 001.64 1.641h3.61a1.64 1.64 0 001.64-1.64V8.884a2.133 2.133 0 00-.751-1.624L11.88 1.822z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent
