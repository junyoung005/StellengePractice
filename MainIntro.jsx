import LoginboxImg from './assets/images/Main-Loginbox.png'
import StellengInfoImg from './assets/images/Stellenge-Info.png'
import MainIllust1Img from './assets/images/Main-illust1.png'
import './MainIntro.css'

function MainIntro() {
    return(
        <div className='Main-Section1'>
            <div className='LoginBox'>
                <img src={LoginboxImg} />
            </div>
            <div className='Main-Section1Info'>
                <div className='StellengeInfoBox'>
                    <img src={StellengInfoImg} />
                </div>
                <div className='MainIllust1Box'> 
                    <img src={MainIllust1Img} />
                </div>
            </div>
        </div>
    )
}


export default MainIntro;