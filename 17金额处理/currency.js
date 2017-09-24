const digitsRE = /(\d{3})(?=\d)/g

function currency(value, currency, decimals) {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : '$'
    decimals = decimals != null ? decimals : 2
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals ?
        stringified.slice(0, -1 - decimals) : stringified
    console.log(_int)
    var i = _int.length % 3
    var head = i > 0 ?
        (_int.slice(0, i)) + (_int.length > 3 ? ',' : '') : ''
    console.log(head)
    var _float = decimals ?
        stringified.slice(-1 - decimals) : ''
    console.log(_float)
    var sign = value < 0 ? '-' : ''
    return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
}

console.log(currency(1142400.1234, '￥', 2))