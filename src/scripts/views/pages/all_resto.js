import RestoResource from '../../data/resto-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const AllResto = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">All Restaurant</h2>
      <div id="restos" class="restos"></div>
    </div>
    `
  },

  async afterRender() {
    const restos = await RestoResource.allResto()
    const restosContainer = document.querySelector('#restos')
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default AllResto
