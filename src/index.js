import * as Components from '../packages'
// import Button from '../packages/button'

const install = (Vue, ...options) => {
  console.log('install: ', Vue, options)
  // Vue.use(Button)
  Object.keys(Components).forEach(key => {
    Vue.use(Components[key])
  })
}

export * from '../packages'

export default {
  // Button,
  ...Components,
  install,
  version: require('../package.json').version,
  name: require('../package.json').name
}
