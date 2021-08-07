import React from "react";
import { useHistory } from "react-router";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

import { shrinkImage } from "../util";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  const exitDetailHandler = (event) => {
    if (event.target.classList?.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.round(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} alt="+" />);
      } else {
        stars.push(<img key={i} src={starEmpty} alt="-" />);
      }
    }

    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <Rating>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {getStars().map((star) => star)}</p>
              </Rating>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((platform) => (
                    <img
                      key={platform.platform.id}
                      src={getPlatform(platform.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={shrinkImage(game.background_image, 1280)}
                alt="game"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.map((shot) => (
                <img
                  src={shrinkImage(shot.image, 1280)}
                  alt="screenshot"
                  key={shot.id}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 7rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled(motion.div)`
  img {
    width: 1.2rem;
    height: 1.2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
