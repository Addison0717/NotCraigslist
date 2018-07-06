// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import AdvertisementController from './advertisement/controller'
import setupDb from './db'

const app = createKoaServer({
  cors: true,
  controllers: [
    AdvertisementController
  ]
})


setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))