const http = require('http')
const { getProducts, getProduct } = require('./controllers/productController')

const server = http.createServer((req, res) => {

    function notFound() {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'route not found' }))
    }

    switch (req.method) {
        case 'GET':
            req.url === '/api/products' ? getProducts(req, res)

                : req.url.match(/\/api\/products\/([0-9]+)/) ? getProduct(req, res, req.url.split('/')[3])

                    : notFound()
            break
        case 'POST':
            // create product
            break
        default:
            console.log('not a valid request method')
    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))