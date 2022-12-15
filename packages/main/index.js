import AMain from './Main.vue'

AMain.install = (Vue, ...options) => {
  Vue.component(AMain.name, AMain)
}

export const Main = AMain

export default AMain
