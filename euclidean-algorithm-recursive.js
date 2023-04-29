/* let result = 0

const sumRecursive = (num) => {
    if (num === 1) return 1
    return num + sumRecursive(num - 1)
}

console.log(sumRecursive(6)) // 1+2+3+4+5=15 */

const findMDC = (A, B) => {
    let R1 = A%B
    let mdc = 0

    if (R1 === 0) {
        mdc = B
        return mdc
    } 

    return mdc = findMDC(B, R1)
    
}

console.log(findMDC(270, 192))