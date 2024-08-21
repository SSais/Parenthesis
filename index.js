function isValidPAranthesis(singleString) {
    const regex = /\(\)/g // define regex for '()'
    if (!(singleString.length%2 === 0)) return false // if the string is odd then false
    if (regex.test(singleString) === false) return false // false if there is no '()'
    
    let stringbefore = singleString.length 
    let stringafter = 0
    let replacedString = singleString
    while (stringbefore > stringafter) { //loop as long as string length keeps decresing
    stringbefore = replacedString.length
    replacedString = replacedString.replaceAll(regex, '') // will be the string with '()' taken out
    stringafter = replacedString.length
    if (replacedString.length === 0) return true // if string length 0 === true
    }
    if (regex.test(replacedString) === false) return false // false if there is no '()' and string length doesn go lower
}

console.log(isValidPAranthesis('()')) //true✅
console.log(isValidPAranthesis(')(')) //false ✅
console.log(isValidPAranthesis('(())')) //true ✅
console.log(isValidPAranthesis('(()')) //false ✅
console.log(isValidPAranthesis('()()')) //true ✅
console.log(isValidPAranthesis('())(')) //false ✅

