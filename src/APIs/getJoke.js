import addFlagsToURL from "../utils/addFlagsToURL.js";

const getJoke = async () => {
    try {

        let URL = 'https://v2.jokeapi.dev/joke/Any';
        URL = addFlagsToURL(URL);
        console.log(URL);

        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`we got an Error ${res.status}`)
        };

        const jokeData = await res.json();

        let jokeText;

        if (jokeData.type === 'twopart') {
            jokeText = `${jokeData.setup}, ${jokeData.delivery}`;
        } else {
            jokeText = jokeData.joke;
        }
     
        return jokeText;
        }
    catch(err) {
        console.log(err)
    }
}


export default getJoke;