function nextG(nums){
  let arr = nums.map((data, i) => {
      for(let j = 1; j < nums.length; j++){
          if(nums[(i+j)%nums.length] > nums[i]){
              return nums[(i+j)%nums.length]
          }
      }
      return -1
  })
console.log(arr);
return arr
}
let ans = nextG([1, 5, 3, 6, 1  ])