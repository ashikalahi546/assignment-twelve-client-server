import About from "../about/About";
import Banner from "../banner/Banner";
import Package from "../package/Packages";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About/>
          <Package/>
        </div>
    );
};

export default Home;