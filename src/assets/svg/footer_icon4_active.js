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
                d="M7.188 6.23a4.318 4.318 0 004.312 4.312 4.318 4.318 0 004.313-4.313A4.318 4.318 0 0011.5 1.917a4.318 4.318 0 00-4.313 4.312zm11.979 13.895h.958v-.958a6.717 6.717 0 00-6.708-6.708H9.583c-3.699 0-6.708 3.01-6.708 6.708v.958h16.292z"
                fill="#E50B0B"
            />
        </Svg>
    )
}

export default SvgComponent
