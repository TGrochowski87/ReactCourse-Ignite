import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const submitSearchHandler = (event) => {
    event.preventDefault();
    dispatch(fetchSearched());
    setTextInput("");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            dispatch({ type: "CLEAR_SEARCHED" });
          }}
        />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={(event) => submitSearchHandler(event)}>
        <input
          type="text"
          onChange={(event) => setTextInput(event.target.value)}
          value={textInput}
        />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    outline-color: darkgreen;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
