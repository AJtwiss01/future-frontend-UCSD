var str = 'hello world';
var hello = 0

var arr = [str, hello, "two", 3, function () { console.log("yes") }]

var obj = { "one": str, 2: hello, func: function () { console.log("yes") } }

console.log(str)

console.log(typeof str)

console.log(hello)


console.log(typeof hello)


console.log('my array hello :' + arr[1])

console.log('my object  :' + obj)

console.log('my object  :' + obj.one)

console.log(arr[4])

console.log('my object  :' + obj.func)


let num = 200

const loop = (num) => {

    for (let i = 0; i <= num; i++) {
        console.log(`This is my count ${i}`)
    }
}

const loopWhile = (num) => {
    count = 0 
    while(count < num){
        count++
        console.log(count)
    }
    console.log(`This is my while count ${count}`)
}

// loop(num)

loopWhile(num)