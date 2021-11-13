function parent(s){
    let a = s.split("")

    let obj= {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
let b = []

for(let i = 0; i< a.length; i++){
    if(obj.hasOwnProperty(a[i])){
        b.push(a[i])
    }else{
        let pop = b.pop()
      if(obj[pop] !== a[i]){
      return false
      }

    }
}
console.log(b);
return b.length === 0
}
console.log(
    parent("{([](]}"));