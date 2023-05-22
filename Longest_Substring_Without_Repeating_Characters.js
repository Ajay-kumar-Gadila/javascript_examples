var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let current = 0;
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] === undefined) {
            current++;
        } else {
            current = Math.min(i - map[s[i]], current + 1);
        }
        result = Math.max(result, current);
        map[s[i]] = i;
    }
    return result;
};