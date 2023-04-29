let result = 0

const sumRecursive = (num) => {
    if (num === 1) return 1
    return num + sumRecursive(num - 1)
}

console.log(sumRecursive(5)) // 1+2+3+4+5=15