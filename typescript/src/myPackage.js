// myPackage.js
// @ts-check
/**
 * @param {Object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {void}
 */
export function init(config){
    return true;
}
export function exit(code){
    return code + 1;
}