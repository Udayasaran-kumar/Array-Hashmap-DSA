function longestSubarrayWithSumK(arr, k) {
  const map = new Map();
  let sum = 0, maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) maxLen = i + 1;
    
    if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }

    if (!map.has(sum)) {
      map.set(sum, i); 
    }
  }

  return maxLen;
}

let arr=[9,-8,5,4,-1,2,1,-5];
let k=6;
console.log(longestSubarrayWithSumK(arr,k));

function topKFrequent(nums, k) {
  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const bucket = Array(nums.length + 1).fill().map(() => []);
  for (let [num, freq] of freqMap) {
    bucket[freq].push(num);
  }

  const result = [];
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    for (let num of bucket[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}

console.log(topKFrequent(arr,k));

function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
}

console.log(longestConsecutive(arr));