import FavoriteRestoIdb from '../../data/favorite-resto'
import { createRestoItemTemplate } from '../templates/template-creator'

const FavResto = {
  async render() {
    return `
      <div class="content">
        <h2>Your Favorite Restaurant</h2>
        <div id="restos" class="restos">
      </div>
    `
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos()
    const restosContainer = document.querySelector('#restos')

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default FavResto
