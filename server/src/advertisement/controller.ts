// src/advertisements/controller.ts
import { JsonController, Get, Put, Body, Post, HttpCode, NotFoundError, Param, Authorized } from 'routing-controllers'
import Advertisement from './entity'

@JsonController()
export default class AdvertisementController {


    // GET ALL ADS
    @Get('/ads')
    async getAllAds() {
      const ads = await Advertisement.find()
      return { ads }
    }


    // GET A SPECIFIC AD
    @Get('/ads/:id')
    getAd(
      @Param('id') id: number
    ) {
      return Advertisement.findOne(id)
    }


    // EDIT AN AD
    @Put('/ads/:id')
    async updateAd(
      @Param('id') id: number,
      @Body() update: Partial<Advertisement>
    ) {
      const ad = await Advertisement.findOne(id)
      if (!ad) throw new NotFoundError('Cannot find advertisement')
      return Advertisement.merge(ad, update).save()
    }


    // POST A NEW AD
    @Post('/ads')
    @HttpCode(201)
    createPage(
        @Body() ad: Advertisement
    ) {
        return ad.save()
    }

}