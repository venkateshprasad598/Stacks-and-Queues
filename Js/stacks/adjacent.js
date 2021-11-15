let a= "3[a2[c]]"
let split = a.split("")
console.log(split);
let c =[]
let ans = split.map(data => {
if(parseInt(data)){
c.push(parseInt(data))
}else{
    if(data == "[" || data == "]"){
      c.push(data)
    }else{
        c.push(data)
    }
}
})
console.log(c);
let sum = ""
for(let i = 1; i < c.length; i+=2){
    let d = c[i-1]
    for(let j = 0; j < d; j++){
        sum += c[i]
    }
}
console.log(sum);
