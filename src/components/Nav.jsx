import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>CODINITE</h1>
      </Logo>
      <form className="search">
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          placeholder="Search for Games"
        />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    width: 70%;
    font-size: 0.8rem;
    padding: 0.8rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    color: #0d0428;
    background-color: #aec3b0;
    border-radius: 15px;
  }
  button {
    font-size: 1rem;
    border: none;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #0d0428;
    color: #aec3b0;
    border-radius: 10px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  h1 {
    font-size: 2rem;
  }
  img {
    height: 2.2rem;
    width: 2.3rem;
    margin-right: 0.2rem;
  }
`;

export default Nav;
