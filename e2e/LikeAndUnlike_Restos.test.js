/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Like And Unlike Restos')

Scenario('liking one resto and cancel like one resto', ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.resto-item__content a')
  I.click(locate('.resto-item__content a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.resto-item')

  I.seeElement('.resto-item__content a')
  I.click(locate('.resto-item__content a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.dontSee('.resto-item')
})
