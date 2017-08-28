//1.平铺数组
let flatten = (array) => {
    return array.reduce((result, val) => {
        return result.concat(Array.isArray(val) ? flatten(val) : val)
    }, [])
}

//2.去重
let uniq = (array) => {
    return filter.call(array, (item, idx) => {
        return array.indexOf(item) == idx
    });
}