import each from 'lodash/each'

import Preloader from 'components/Preloader'

class App {
  constructor () {
    this.createContent()

    this.createPreloader()

    this.addEventListeners()
    this.addLinkListeners()

    this.update()
  }

  createPreloader () {
    this.preloader = new Preloader()
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  /****
   * EVENTS
   * ***/
  onPopState () {
    this.onChange({
      url: window.location.pathname,
      push: false
    })
  }

  async onChange ({ url, push = true }) {
    await this.page.hide()

    const request = await window.fetch(url)
    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')

      window.history.pushState({}, '', url)

      if (push) {
        window.history.pushState({}, '', url)
      }

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.canvas.onChangeEnd(this.template)

      this.page = this.pages[this.template]
      this.page.create()

      this.page.show()

      this.addLinkListeners()
    } else {
      console.log('Error')
    }
  }

  /****
   * LOOPS
   * ***/
  update () {
    if (this.page && this.page.update) {
      this.page.update()
    }
  }

  /****
   * LISTENERS
   * ***/
  addEventListeners () {
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    each(links, link => {
      link.onclick = event => {
        event.preventDefault()

        const { href } = link

        this.onChange({ url: href })
      }
    })
  }
}

new App()
