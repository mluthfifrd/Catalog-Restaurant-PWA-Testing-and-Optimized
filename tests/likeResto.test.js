/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto'

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      allObjResto: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy()
  })

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      allObjResto: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy()
  })

  it('should be able to like the resto', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      allObjResto: {
        id: 1
      }
    })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    const resto = await FavoriteRestoIdb.getRestoById(1)
    expect(resto).toEqual({ id: 1 })

    await FavoriteRestoIdb.deleteResto(1)
  })

  it('should not add a resto again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      allObjResto: {
        id: 1
      }
    })
    await FavoriteRestoIdb.putResto({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }])
    await FavoriteRestoIdb.deleteResto(1)
  })
})
