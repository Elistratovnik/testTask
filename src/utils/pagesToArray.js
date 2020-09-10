function pagesToArray (pages) {
    const array = []
    for (let i = 1; i <= pages; i++) {
        array.push(i)
    }
    return array;
}

export default pagesToArray