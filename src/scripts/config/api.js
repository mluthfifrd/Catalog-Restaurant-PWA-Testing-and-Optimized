import CONFIG from './config'

const API_ENDPOINT = {
  ALL_RESTO: `${CONFIG.BASE_URL}/list`,
  FAV_RESTO: `${CONFIG.BASE_URL}/favorite`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  CREATE_REVIEW: `${CONFIG.BASE_URL}/review`
}

export default API_ENDPOINT
