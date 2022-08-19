import { useState } from "react"

const UseCss = () => {
    const [borderButton, setBorderButton] = useState("");
    const [clickme, setClickme] = useState(false);

    const btnBorder = () => {
        if (clickme === false) {
            setClickme(true)
            setBorderButton("body")
        } else {
            setClickme(false)
            setBorderButton("")
        }
    }
    return {
        btnBorder,
        borderButton,
        setBorderButton,
        setClickme,
        clickme
    };
}

export default UseCss;