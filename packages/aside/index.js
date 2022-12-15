import AAside from './Aside.vue'

AAside.install = (Vue, ...options) => {
  Vue.component(AAside.name, AAside)
}

export const Aside = AAside

export default AAside
