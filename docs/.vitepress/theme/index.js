import DefaultTheme from 'vitepress/theme'
import ApiClass from '../../../components/ApiClass.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Class', ApiClass)
  }
}