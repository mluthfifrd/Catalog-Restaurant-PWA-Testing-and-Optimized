import API from '../config/api'

class RestoResource {
  static async allResto() {
    const response = await fetch(API.ALL_RESTO)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async favResto() {
    const response = await fetch(API.FAV_RESTO)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailResto(id) {
    const response = await fetch(API.DETAIL(id))
    return response.json()
  }
}

export default RestoResource
