/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if(s.length < 2) {
        return s.length;
    }

    let lengthOfLongestSubstring = 0;
    for (let i = 0; i < s.length; i++) {
        tempArray = [];
        // loop through the letters from the current point to the end of the string
        for (let j = i; j < s.length; j++) {
            if (!tempArray.includes(s[j])) {
                tempArray.push(s[j]);
            } else { // repeated character found
                break;
            }
        }
        if (tempArray.length > lengthOfLongestSubstring) {
            lengthOfLongestSubstring = tempArray.length;
        }
    }
    return lengthOfLongestSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));