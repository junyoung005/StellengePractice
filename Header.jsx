import StellengeLogo from './assets/images/StellengeLogo.png'
import Menu from './assets/images/MainMenu.png'
import React from 'react'

function Header() {
    return(
        <header style={headerStyle}>
            <div className='Header'>      
                <img src={StellengeLogo} />
            </div>
            <div className='Menu'>
                <img src={Menu} />
            </div>
        </header>
    )
}

const headerStyle = {
    display: 'flex'
}



export default Header;