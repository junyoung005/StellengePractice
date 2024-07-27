import Header from "./Header";
import MainChallenge from "./MainChallenge";
import MainIntro from "./MainIntro";
import Calendar from "./Calendar";
import ChallengePoint from "./ChallengePoint";
import InfoShare from "./InfoShare";

function Mainpage() {
    return(
        <div>
            <Header />
            <MainIntro />
            <MainChallenge />
            <Calendar />
            <ChallengePoint />
            <InfoShare />
        </div>
    )
}

export default Mainpage;