import dom from "../dom.js";
import getJoke from "../APIs/getJoke.js"
import showJokeOnPage from "../components/showJokeOnPage.js";

const getJokeHandler = async () => {
const joke = await getJoke();
const domJoke = showJokeOnPage(joke);

dom.root.innerHTML = '';
dom.root.append(domJoke);

}

export default getJokeHandler