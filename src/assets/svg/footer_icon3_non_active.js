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
                d="M6.38 14.689V7.11H2.2c-1.21 0-2.2 1.1-2.2 2.445v7.333c0 1.344.99 2.444 2.2 2.444h1.1V23l3.3-3.667h5.5c1.21 0 2.2-1.1 2.2-2.444v-2.225a.934.934 0 01-.22.026h-7.7v-.001zM19.8 1H9.9C8.69 1 7.7 2.1 7.7 3.444v9.778h7.7l3.3 3.667v-3.667h1.1c1.21 0 2.2-1.099 2.2-2.444V3.444C22 2.1 21.01 1 19.8 1z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent
