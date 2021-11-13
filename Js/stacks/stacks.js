class Minstack{
    constructor(){
        this.stack = []
        this.count = 0
    }
    push(val){
        this.stack.push(val)
        console.log(`${val} added to ${this.count}`)
        this.count++
        return null
    }
    pop(){
        if(this.stack.length == 0) return 0
        let popItem = this.stack[this.count - 1]
       this.stack.pop()
       console.log(`${popItem} has been removed at ${this.count - 1}`)
       this.count--
       return null
        
    }
    top(){
        let topItem = this.stack[this.count -1]
        console.log(`top item is ${topItem}`)
        return topItem
    }

    getMin(){
        let min = Math.min(...this.stack)
        console.log(min)
       return min
        
    }

}

const minstack = new Minstack()
minstack.push(-2)
minstack.push(0)
minstack.push(-3)
minstack.getMin()
minstack.pop()
minstack.pop()
minstack.getMin()