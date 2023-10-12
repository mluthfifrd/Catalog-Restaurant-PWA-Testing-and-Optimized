/* eslint-disable indent */
import CONFIG from '../../config/config'

const createRestoDetailTemplate = (resto) => {
  const customerReviewsHtml = resto.customerReviews
    .map(
      (review) => `
        <div class="review-item">
          <p class="nameAndDate">${review.name}, ${review.date}</p>
          <p class="review">${review.review}</p>
        </div>
        `
    )
    .join('')

  const restoCategoriesHtml = resto.categories
    .map(
      (category, index) => `
            <p>${index + 1}. ${category.name}</p>
          `
    )
    .join('')

  const restoFoodsHtml = resto.menus.foods
    .map(
      (food, index) => `
            <p>${index + 1}. ${food.name}</p>
          `
    )
    .join('')

  const restoDrinksHtml = resto.menus.drinks
    .map(
      (drink, index) => `
            <p>${index + 1}. ${drink.name}</p>
          `
    )
    .join('')

  return `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <div class="resto__info__description">
      <h3>Information</h3>
    </div>
    <div class="resto__info__item">
      <div class="wrap wrap_rating">
        <h4>Rating</h4>
        <p>⭐️${resto.rating}</p>
      </div>
      <div class="wrap wrap_address">
        <h4>Address</h4>
        <p>${resto.city}, ${resto.address}</p>
      </div>
      <div class="wrap wrap_categories">
        <h4>Categories</h4>
        <div class="text-repeat">
          ${restoCategoriesHtml}
        </div>
      </div>
      <div class="wrap wrap_food">
        <h4>Foods Menu</h4>
        <div class="text-repeat">
          <p>${restoFoodsHtml}</p>
        </div>
      </div>
      <div class="wrap wrap_drink">
        <h4>Drinks Menu</h4>
        <div class="text-repeat">
          <p>${restoDrinksHtml}</p>
        </div>
      </div>
      <div class="wrap wrap_description">
        <h4>Description</h4>
        <p>${resto.description}</p>
      </div>
    </div>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    ${customerReviewsHtml}
  </div>
`
}

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="lazyload resto-item__header__poster" alt="${resto.name}"
        data-src="${
          resto.pictureId
            ? CONFIG.BASE_IMAGE_URL + resto.pictureId
            : 'https://picsum.photos/id/666/800/450?grayscale'
        }">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

const createAddRestoReviewTemplate = () => `
  <div class="resto-customer-review">
    <div class="reviewForm">
      <div class="add__review__description">
        <h3>Add Review</h3>
      </div>
      <form id="reviewForm">
        <label for="name">Name :</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="review">Review :</label>
        <textarea id="review" name="review" rows="4" required></textarea>
        <br>
        <input type="submit" value="Send Review">
      </form>
    </div>
  </div>
`

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createAddRestoReviewTemplate
}
