import express from 'express'

import usersRoutes from './handlers/users'
import authRoutes from './handlers/auth'
import productsRoutes from './handlers/products'
import ordersRoutes from './handlers/orders'

const app = express()
export default app
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/auth', authRoutes)
app.use('/products', productsRoutes)
app.use('/orders', ordersRoutes)

app.listen(3000, () => {
  console.log('Server running ')
})