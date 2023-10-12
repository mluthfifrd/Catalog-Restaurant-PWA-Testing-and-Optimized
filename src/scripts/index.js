/* eslint-disable no-unused-vars */
import 'regenerator-runtime'
import '../styles/main.sass'

import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

import App from './views/app'
import swRegister from './utils/sw-register'

const START = 10
const NUMBER_OF_IMAGES = 100

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

const skipLinkElement = document.querySelector('.skip-link')
skipLinkElement.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('#mainContent').focus()
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
