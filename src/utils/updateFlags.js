import data from "../data.js";

const updateFlags = (key, checked) => {
data.flags[key] = checked;
console.log(checked);

}

export default updateFlags;