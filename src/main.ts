import { createApp } from '@vue/runtime-dom'
import App from './App'
import tooltips from './directives/tooltips'
import './index.css'

createApp(App).directive('tooltip', tooltips).mount('#app')
