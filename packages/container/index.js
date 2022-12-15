import AContainer from './Container.vue'

AContainer.install = (Vue, ...options) => {
  Vue.component(AContainer.name, AContainer)
}

export const Container = AContainer

export default AContainer
