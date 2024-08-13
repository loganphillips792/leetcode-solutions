/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(freqMap.has(nums[i])){
            freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
        } else {
            freqMap.set(nums[i], 1);
        }
    }
    
    var mapAsc = new Map([...freqMap.entries()].sort((a, b) => b[1] - a[1]));
    
    let finalArr = [];
    let j = 0;
    for (const [key,value] of mapAsc) {
        
        finalArr[j] = key; 
    
        // k-1 because j starts at 0
        if(j == k-1) {
            break;
        }
        
        j++;
    }
    console.log(finalArr);
    console.log([...mapAsc.entries()]);
    return finalArr;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));