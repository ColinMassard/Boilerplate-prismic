import GSAP from 'gsap'

import Component from 'classes/Component'

import each from 'lodash/each'

import { split } from 'utils/text'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        numberText: '.preloader__number__text',
        images: document.querySelectorAll('img')
      }
    })

    split({
      element: this.elements.title,
      expression: '<br>'
    })

    split({
      element: this.elements.title,
      expression: '<br>'
    })

    this.elements.titleSpans = this.elements.title.querySelectorAll('span span')

    this.length = 0

    this.createLoader()
  }

  createLoader () {
    if (this.elements.images[0] === undefined) {
      this.onLoaded()

      this.elements.numberText.innerHTML = '100%'
    }
    each(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')
    })
  }

  onAssetLoaded (image) {
    this.length += 1

    const percent = this.length / this.elements.images.length

    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded () {
    console.log('test')
    return new Promise(resolve => {
      this.animateOut = GSAP.timeline({
        delay: 2
      })

      this.animateOut.to(this.elements.titleSpans, {
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      })

      this.animateOut.to(this.elements.numberText, {
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      }, '-=1.4')

      this.animateOut.to(this.element, {
        duration: 1.5,
        ease: 'expo.out',
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, '-=1')

      this.animateOut.call(_ => {
        this.emit('completed')
      })

      setTimeout(() => {
        this.createAnimations()
      }, 3000)
    })
  }

  createAnimations () {
    const element = document.querySelectorAll('[data-animate]')
    if (element === null) return

    // eslint-disable-next-line no-undef
    const intersectionObserverScroll = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        rootMargin: '0px'
      }
    )
    element.forEach(animateElement => intersectionObserverScroll.observe(animateElement))
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
