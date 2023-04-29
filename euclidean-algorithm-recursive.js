const findMDC = (A, B) => {
    let R1 = A%B
    let mdc = 0

    if (R1 === 0) {
        mdc = B
        return mdc
    } 

    return mdc = findMDC(B, R1)
    
}

console.log(findMDC(270, 192)) // Result will must be 6