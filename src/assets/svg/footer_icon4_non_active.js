import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={23}
            height={23}
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.188 6.229a4.318 4.318 0 004.312 4.312 4.318 4.318 0 004.313-4.312A4.318 4.318 0 0011.5 1.916 4.318 4.318 0 007.187 6.23zm11.979 13.896h.958v-.959a6.717 6.717 0 00-6.708-6.708H9.583c-3.699 0-6.708 3.01-6.708 6.708v.959h16.292z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent
