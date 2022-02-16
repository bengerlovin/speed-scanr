import { Spiral as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const MobileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        if (isMenuOpen) {
            console.log("setting closed")
            setIsMenuOpen(false)
            document.body.style.overflow = ''
        } else {
            console.log("setting open")
            setIsMenuOpen(true)
            document.body.style.overflow = 'hidden'
        }
    }
    return (
        <>
            <Hamburger toggle={toggleMenu} toggled={isMenuOpen} direction='left' size={22} hideOutline={true} distance="sm" label={"Show menu"} />
        </>
    )
}

export default MobileMenu
