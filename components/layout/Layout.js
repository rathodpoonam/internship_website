'use client'
import { useEffect, useState } from "react"

import Footer3 from "./footer/Footer3"
import Header1 from "./header/Header1"
import Offcanvas from "./Offcanvas"

export default function Layout({ headerStyle, footerStyle, onePageNav, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)

    const [isOffCanvas, setOffCanvas] = useState(false)
    const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            {/* <MouseCursor /> */}
            <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

            {headerStyle == 1 ? <Header1 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}


            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

            {children}

            {footerStyle == 1 ? < Footer3 /> : null}
        </>
    )
}