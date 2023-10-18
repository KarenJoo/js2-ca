/**
 * Saves a key-value pair to the localStorage.
 *
 * @param {string} key - Key to store the value.
 * @param {*} value - The value to be stored.
 * @returns {void}
 *
 * @example
 * ```js
 * save("token", "(access-token)");
 * ```
 */
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Loads the value from the key stored in localStorage.
 *
 * @param {string} key - The key to retrieve the value for.
 * @returns {*} The value from the key
 *
 * @example
 * ```js
 * const token = load("token");
 * console.log("Access Token:", token);
 * ```
 */
export function load(key) {
    try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
} catch {
    return null
}
}

/**
 * Removes the value from the key stored in localStorage.
 *
 * @param {string} key - The key to remove the value.
 * @returns {void}
 *
 * @example
 * ```js
 * remove("token");
 * ``` 
 */
export function remove(key) {
    localStorage.removeItem(key);
}