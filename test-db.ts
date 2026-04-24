import dotenv from 'dotenv'
import client from './database'

dotenv.config()

async function test() {
  const conn = await client.connect()
  console.log('DB CONNECTED SUCCESSFULLY 🚀')
  conn.release()
}

test()