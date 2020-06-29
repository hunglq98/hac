process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const mx = require('./index')

mx.get('1037', (lists) => {
    console.log(lists)
})
mx.autocomplete('tinh ca', (lists) => {
    console.log(lists)
})