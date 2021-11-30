//Base URL
const apikey = "34cb2ec9f4c64c57bd574849a9bfdbe1";
const base_url = `https://api.rawg.io/api/games?key=${apikey}`;

// https://api.rawg.io/api/games?key=34cb2ec9f4c64c57bd574849a9bfdbe1&dates=2019-09-01,2019-09-30
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else return month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const popularGamesURL = base_url + popular_games;
const upcomingGamesURL = base_url + upcoming_games;
const newGamesURL = base_url + newGames;

const url = {
  upcoming: upcomingGamesURL,
  popular: popularGamesURL,
  new: newGamesURL,
};

export default url;

console.log(url.upcoming);
