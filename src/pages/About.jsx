import React, { useState } from "react";
import Mytext from "../components/myText";
import NavList from "../components/navList";

function About() {
    const [show, setShow] = useState(true);

    function handleShow() {
        setShow(!show);
    }
    return (
        <>
            <button onClick={handleShow}>Show / Hide</button>
            {show == true ? <NavList/> : <Mytext/>}
        </>
    )
}

export default About