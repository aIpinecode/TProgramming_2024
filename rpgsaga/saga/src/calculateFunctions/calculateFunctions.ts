export function calculateFuncA(xStart: number, xFinish: number, step: number): number[] { 
    if (step === 0) { 
        throw new Error('Шаг не может быть нулевым'); 
    } 
    if (xStart === 0 || xFinish === 0) { 
        throw new Error('lg не может быть вычиселен для нуля'); 
    } 
    let result: number 
    let results: number[] = [] 
    for (xStart; xStart <= xFinish; xStart += step) { 
        result = Math.pow((Math.abs((xStart ** 2) - 2.5)), 1/4) + Math.pow((Math.log10(xStart ** 2)), 1/3) 
        results.push(result) 
    } 
    return results 
} 
 
export function calculateFuncB(a: number, b: number, c: number, d: number, e: number): number[] { 
    let values = [a, b, c, d, e] 
    let results: number[] = [] 
    for (let i = 0; i < values.length; i++) { 
        let result: number 
        let num = values[i] 
        if (num === 0) { 
            throw new Error('lg не может быть вычиселен для нуля'); 
        } 
        result =  result = Math.pow((Math.abs((num ** 2) - 2.5)), 1/4) + Math.pow((Math.log10(num ** 2)), 1/3) 
        results.push(result) 
    } 
    return results 
}
