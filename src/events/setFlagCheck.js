import dom from '../dom.js'
import updateFlags from '../utils/updateFlags.js';

for (const key in dom.flags) {
const checkbox = dom.flags[key];
console.log(`Adding listener for ${key}`);
checkbox.addEventListener('change', () => {
console.log(`${key} checkbox changed to ${checkbox.checked} `);
updateFlags(key, checkbox.checked)
}
)
}