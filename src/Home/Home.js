import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="container">
            <Header />
            <About />
            <Contact />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default Home;
