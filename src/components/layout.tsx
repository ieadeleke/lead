import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutPropsInterface {
    theme?: string
    children: React.ReactElement
}

const DisplayLayout = (props: LayoutPropsInterface) => {
    return (
        <div>
            <Navigation theme={props.theme} />
            {props.children}
            <Footer />
        </div>
    )
}

export default DisplayLayout;