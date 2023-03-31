import Header from "../components/Header/Header"
import TopCards from "../components/TopCards/TopCards"
import "./HomePage.scss"


const HomePage = () =>  {
    return (
        <div className="display">
            <Header />
            <TopCards />
        </div>
    );
}

export default HomePage;