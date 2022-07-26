import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Headshot from "../../assets/headshot.jpg";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [" ", "M", "i", "k", "h", "a", "i", "l", " ", "!"];
  const jobArray = ["I", " ", "d", "e", "v", ".",
  ];

  useEffect(() => {
    let timeoutid = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeoutid);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
            <br />
          </h1>
          <br />
          <h2>FullStack Developer / Data/Financial Analyst</h2>
          <div>
            <a href="/Resume.pdf" target="_blank" className="flat-button">
              RESUME
            </a>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <img src={Headshot} alt="headshot" id="headshot" />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
