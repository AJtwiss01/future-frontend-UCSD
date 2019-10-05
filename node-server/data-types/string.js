// var str = 'hello world';
// var hello = 0

// var arr = [str, hello, "two", 3, function () { console.log("yes") }]

// var obj = { "one": str, 2: hello, func: function () { console.log("yes") } }

// console.log(str)

// console.log(typeof str)

// console.log(hello)


// console.log(typeof hello)


// console.log('my array hello :' + arr[1])

// console.log('my object  :' + obj)

// console.log('my object  :' + obj.one)

// console.log(arr[4])

// console.log('my object  :' + obj.func)


let whichLoop = (str, num) => {
    console.log(str, num)

    if (str === "loop") {

        const loop = (num) => {

            for (let i = 0; i <= num; i++) {
                console.log(`This is my count ${i}`)
            }
        }
        loop(num)

    } else if (str === "while") {

        const loopWhile = (num) => {
            count = 0
            while (count < num) {
                count++
                console.log(count)
            }
            console.log(`This is my while count ${count}`)
        }

        loopWhile(num)
    }

}





whichLoop("loop", 10 )

whichLoop('while', 1)

var str1 = "racecar"
var str2 = "racecar"
console.log(str1 === str2)
console.log('racecar'.split("").join(""))