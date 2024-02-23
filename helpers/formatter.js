'use strict'

function formatDate(val) {
    const year = val.getFullYear()
    const month = String(val.getMonth()+1).padStart(2, '0')
    const date = String(val.getDate()).padStart(2, '0')
    return `${year}-${month}-${date}`
}

module.exports = {formatDate}