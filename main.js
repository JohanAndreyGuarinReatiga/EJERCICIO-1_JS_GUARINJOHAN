
function equilibrada(expresion){
    var chars = []
    var pares = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    for(let caracter of expresion){
        if (caracter === "(" || caracter === "{" || caracter === "["){
            chars.push(caracter)
        }else if(caracter === ")" || caracter === "}" || caracter === "]"){
            if(chars.length === 0 || chars.pop() !== pares[caracter]){
                return false
            } 
    
        }
    }
    return chars.length === 0
}

console.log(equilibrada("()")) 