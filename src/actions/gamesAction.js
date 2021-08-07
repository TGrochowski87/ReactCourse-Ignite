import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchedGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearched = (gameName) => async (dispatch) => {
  const searchResults = await axios.get(searchedGameURL(gameName));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchResults.data.results,
    },
  });
};
