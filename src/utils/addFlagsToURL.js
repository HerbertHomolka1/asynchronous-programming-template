import data from "../data.js"; 

const addFlagsToURL = (URL) => {
const allFlags = data.flags;
let trueFlags = [];
trueFlags = Object.keys(allFlags).filter((flag) => allFlags[flag] );

console.log(trueFlags)
if (trueFlags.length >0){
    URL += '?blacklistFlags=';
    for (const flag of trueFlags) {
        URL += flag + ',';
        }
    URL = URL.slice(0, -1);
}



return URL;

}

export default addFlagsToURL;