import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <PhotoGrid />
      <Footer />
    </div>
  );
};
export default Home;
