/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = [3, 2, 4];
var target = 6;


//var twoSum =  function(nums, target) { 
const twoSum = function twoSum(nums, target) {
    var result ;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                
            }
        }
    }
  
    return result;

}

console.log(twoSum(nums, target));

