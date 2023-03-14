var result = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'ol', 'br']
const arr = {}

for (var i = 0; i < result.length; i++) {
    let teg = result[i]
    if (arr[teg]) {
        arr[teg]++
    } else {
        arr[teg] = 1
    }
}

let sort = {}
Object.keys(arr).sort((a, b) => {
    return arr[b] - arr[a]
}).forEach((k) => {
    sort[k] = arr[k]
})
console.log(sort)