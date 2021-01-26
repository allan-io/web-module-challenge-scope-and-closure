const createBase = num => num2 => num += num2 


function privateVariable() {
    let privateNum = 0
    return function(num) {
        privateNum += num
        return privateNum
    }
}

const changePrivateNum = privateVariable()

const privateNumber = changePrivateNum(0)

console.log(privateNumber)



