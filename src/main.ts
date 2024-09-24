/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from './plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.directive('color-on-hover', {
  mounted(el, binding) {
    el.style.transition = 'color 0.3s';

    el.addEventListener('mouseover', () => {
      el.style.color = binding.value || 'red';
    });

    el.addEventListener('mouseout', () => {
      el.style.color = '';
    });
  },
});

let currentlyHighlightedElement: any  = null;

app.directive('highlight-on-click', {
  mounted(el) {
    el.addEventListener('click', () => {
      if (currentlyHighlightedElement) {
        currentlyHighlightedElement.classList.remove('highlighted');
      }
      el.classList.toggle('highlighted');
      currentlyHighlightedElement = el.classList.contains('highlighted') ? el : null;
    });
  },
});

registerPlugins(app)

app.mount('#app')
