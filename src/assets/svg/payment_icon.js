import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={26}
            height={23}
            viewBox="0 0 26 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Ellipse cx={11.4783} cy={11.5} rx={11.4783} ry={11.5} fill="#E50B0B" />
            <Path d="M24 5.808H13.217v13.823L24 5.808z" fill="#000" stroke="#000" />
            <Path d="M3.014 5.54l8.038-1.126 1.444 10.354-9.482-9.229z" fill="#fff" />
            <Ellipse
                cx={4.86953}
                cy={10.4546}
                rx={1.62319}
                ry={1.62626}
                fill="#000"
            />
            <Ellipse
                cx={7.53615}
                cy={12.6617}
                rx={1.04348}
                ry={1.04545}
                fill="#000"
            />
            <Ellipse
                cx={9.39123}
                cy={14.2878}
                rx={0.57971}
                ry={0.580808}
                fill="#000"
            />
        </Svg>
    )
}

export default SvgComponent
