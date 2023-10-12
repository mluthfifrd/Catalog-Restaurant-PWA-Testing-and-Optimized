/* eslint-disable no-alert */
import API from '../../config/api'
import UrlParser from '../../routes/url-parser'
import RestoResource from '../../data/resto-source'
import {
  createRestoDetailTemplate,
  createAddRestoReviewTemplate
} from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const DetailResto = {
  async render() {
    return `
      <div class="content">
        <h2>Detail Resto Page</h2>
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
        <div id="addReviewCustomer"></div>
      </div>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await RestoResource.detailResto(url.id)
    const restoContainer = document.querySelector('#resto')
    const allObjResto = resto.restaurant
    restoContainer.innerHTML = createRestoDetailTemplate(allObjResto)

    const addReviewContainer = document.querySelector('#addReviewCustomer')
    addReviewContainer.innerHTML = createAddRestoReviewTemplate()

    const reviewForm = document.querySelector('#reviewForm')

    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault()

      const nameInput = document.querySelector('#name')
      const reviewInput = document.querySelector('#review')

      const name = nameInput.value
      const review = reviewInput.value

      const data = {
        id: allObjResto.id,
        name,
        review
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      const apiUrl = API.CREATE_REVIEW

      try {
        const response = await fetch(apiUrl, requestOptions)
        if (response.status === 201) {
          alert('Success')
          window.location.reload()
        }
      } catch (error) {
        alert('Something went wrong')
      }
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      allObjResto: {
        id: allObjResto.id,
        pictureId: allObjResto.pictureId,
        city: allObjResto.city,
        description: allObjResto.description,
        name: allObjResto.name,
        rating: allObjResto.rating
      }
    })
  }
}

export default DetailResto
