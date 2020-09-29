/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = new Array([3, 2, 4]);
var target = 5;

//var twoSum =  function(nums, target) { 
var twoSum = function twoSum(nums, target) {
    var result= nums[i] + nums[j];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
              
            
            };
        };
    };
  
    return result;

};
var nums = new Array([2,7,11,15]);
var target = 9;

console.log(twoSum(nums, target));



