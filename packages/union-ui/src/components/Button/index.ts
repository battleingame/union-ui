
import type { App } from 'vue'
import Button from './Button.vue'

// 使用install方法，在app.use挂载
Button.install = (app: App): void => {
  app.component('u-' + Button.__name as string, Button)
}

export default Button
