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