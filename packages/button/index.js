import AButton from './Button.vue'

AButton.install = (Vue, ...options) => {
  Vue.component(AButton.name, AButton)
}

export const Button = AButton

export default AButton
