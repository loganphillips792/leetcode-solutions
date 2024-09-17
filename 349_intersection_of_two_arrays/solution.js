/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1Set = new Set(nums1);

    const intersection = [];
    nums1Set.forEach((element) => {
        if (nums2.includes(element)) {
            intersection.push(element);
        }
    });
    return intersection;
};

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));

/* Solution metrics
    Runtime - beats 93.05%
    Memory - beats 53.05%
*/