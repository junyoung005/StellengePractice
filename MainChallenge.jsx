import Logo from './assets/images/StellengeLogo2.png'
import NoSmokingImg from './assets/images/NoSmokingImg.png'
import NoAlcohol from './assets/images/NoAlcohol.png'
import NoMidnightmeal from './assets/images/NoMidnightmeal.png'

function MainChallenge() {
    return(
        <div className='MainChallenge'>
            <div className='title'>
                <img src={Logo} />
                <h2>주요 챌린지</h2>
            </div>
            <div className='contents'>
                <img src={NoSmokingImg} />
                <img src={NoAlcohol} />
                <img src={NoMidnightmeal} />
            </div>
        </div>
    )
}

export default MainChallenge;