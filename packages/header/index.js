import AHeader from './Header.vue'

AHeader.install = (Vue, ...options) => {
  Vue.component(AHeader.name, AHeader)
}

export const Header = AHeader

export default AHeader
