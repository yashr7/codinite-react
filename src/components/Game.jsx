import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={
            image
              ? smallImage(image, 640)
              : "https://via.placeholder.com/640x640"
          }
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  background-color: #01161e;
  min-height: 30vh;
  box-shadow: 0px 2px 10px #01161e;
  text-align: center;
  border-radius: 1rem;

  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
