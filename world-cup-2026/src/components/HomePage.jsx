import Header from './header'
import Navbar from './navbar'
import Countdown from './countdown'
import Email from './email'
import Gallery from './gallery'

function HomePage() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Countdown targetMS={new Date("2026-06-11T00:00:00").getTime()}/>
            <Gallery />
            <Email />
        </div>
    );
}

export default HomePage;