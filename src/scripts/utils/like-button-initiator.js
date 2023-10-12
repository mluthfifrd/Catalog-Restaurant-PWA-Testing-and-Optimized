import FavoriteRestoIdb from '../data/favorite-resto'
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate
} from '../views/templates/template-creator'

const LikeButtonInitiator = {
  async init({ likeButtonContainer, allObjResto }) {
    this._likeButtonContainer = likeButtonContainer
    this._resto = allObjResto

    await this._renderButton()
  },

  async _renderButton() {
    const { id } = this._resto

    if (await this._isRestoExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestoExist(id) {
    const allObjResto = await FavoriteRestoIdb.getRestoById(id)
    return !!allObjResto
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto)
      this._renderButton()
    })
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
