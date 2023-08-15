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
                d="M18.94 14.11a.656.656 0 01-.237.894l-7.875 4.593a.64.64 0 01-.656 0l-7.875-4.594a.656.656 0 01.656-1.132l7.547 4.397 7.547-4.397a.656.656 0 01.894.238zm-.893-4.176L10.5 14.331 2.953 9.934a.656.656 0 00-.656 1.132l7.875 4.594a.64.64 0 00.656 0l7.875-4.594a.657.657 0 10-.656-1.132zM2.297 7.128l7.875 4.594a.64.64 0 00.656 0l7.875-4.594a.656.656 0 000-1.132l-7.875-4.593a.632.632 0 00-.656 0L2.297 5.996a.656.656 0 000 1.132z"
                fill="#E50B0B"
            />
        </Svg>
    )
}

export default SvgComponent
