//Base URL
const baseUrl = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month.toString().padStart(2, "0");
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day.toString().padStart(2, "0");
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const currentYear = getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popularGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;

//Game Details
export const gameDetailsURL = (gameId) =>
  `${baseUrl}games/${gameId}?key=${process.env.REACT_APP_API_KEY}`;
//Game screenshots
export const gameScreenshotsURL = (gameId) =>
  `${baseUrl}games/${gameId}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
//Searched game
export const searchedGameURL = (gameName) =>
  `${baseUrl}games?key=${process.env.REACT_APP_API_KEY}&search=${gameName}&page_size=10`;
