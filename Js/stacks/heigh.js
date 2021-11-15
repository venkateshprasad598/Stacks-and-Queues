function water(height){
    let k = height[0]
    if(k == Math.max(...height)){
        let newHeight = [...height]
        let index = newHeight.indexOf(k)
        newHeight.splice(index, 1)
        k = Math.max(...newHeight)
    }
    let sum = 0
    for(let i = 0; i < height.length - 1; i++){
        let j = i + 1
        if(height[i] > k && height[i] !== Math.max(...height)){
            k = height[i]
        }
        if(i !== height.length - 2){
            if(k > height[j]){
               let waterLevel = k - height[j]
               sum += waterLevel
            }
        }
    }
return sum
}

let ans = water([4, 2,0,3,2,5])
let arr = []
arr[3] = 5
console.log(arr);

console.log(Math.min(0, 10, 11));