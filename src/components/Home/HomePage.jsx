import videoHomepage from "../../assets/video-homepage.mp4";
import "./HomePage.scss";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop className="video-background">
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title">There's a better way to ask</div>
        <div className="text">
          You don't want to make a boring form. And your audience doesn't want
          to answer one. Instead, ask questions with images, GIFs, videos, and
          custom
        </div>
        <div>
          <button className="btn-start">Get started, it's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
