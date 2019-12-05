var map = {};
var id = 10000;
var chars = 'abcdefghijklmnopqrstuvwxyzZBCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-'.split('');

var base64 = function (number) {
    let res = '';
    while (number) {
        console.log(chars[number % 64], number % 64)
        res = chars[(number % 64)] + res;
        number = Math.floor(number / 64);
    }
    console.log('base64', res);
    return res;
};

var reBase64 = function (url) {
    let res = 0;
    url = url.split("").reverse().join("");
    for (let i = 0; i < url.length; i++) {
        res += (64 ** i) * chars.indexOf(url[i]);
    }
    console.log('reBase64', res);
    return res;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    map[+id] = longUrl;
    return base64(id);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map[reBase64(shortUrl)];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

console.log(decode(encode("123123")));
console.log(map);