function adjacent(s){
let split = s.split("")
let b = []
let c = []
split.map((data) => {
if(!b.includes(data)){
    b.push(data)
}else{
  if(!c.includes(data)){
    if(data == b[b.length - 1]){
        c.push(data)
        b.pop()
     }else{
         b.push(data)
     }
  }else{
    if(data == b[b.length - 1]){
        b.pop()
     }else{
         b.push(data)
     }
  }
}
})
return b.join("")
}
let ans = adjacent("ayyaayyzzzz")
console.log(ans);
