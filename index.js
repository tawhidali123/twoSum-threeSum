// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(arr, target){
  // brute force method O(N^2)
  let holder = []
  for(i = 0; i < arr.length; i++){
    for(j = i + 1; j < arr.length; j++){
      if(target === arr[i] + arr[j]){
        holder.push(arr[i], arr[j])
      }
    }
  }

  return holder
}

twoSum([2, 7, 11, 15], 9)


// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


function threeSum(arr, target){
  let holder = []

  for(i =0; i < arr.length; i++){
    for(j = i + 1; j < arr.length; j++){
      for(k = j + 1; k < arr.length; k++){
        if(arr[i] + arr[j] + arr[k] === target){
          let pushArr = [arr[i], arr[j], arr[k]]
          holder.push(pushArr)
        }
      }
    }
  }

  return holder

}


threeSum([-1, 0, 1, 2, -1, -4], 0)