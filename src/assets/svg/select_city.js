import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={18}
            height={16}
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.064 0L5.892 9.172 2.917 6.197 0 9.114l2.975 2.975 2.936 2.936 2.917-2.917L18 2.936 15.064 0z"
                fill="#E50B0B"
            />
        </Svg>
    )
}

export default SvgComponent
