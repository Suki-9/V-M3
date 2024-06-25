import MaterialButton from './components/MaterialButton.vue';
import MaterialInput from './components/MaterialInput.vue';
import MaterialDivider from './components/MaterialDivider.vue';
import MaterialModal from './components/MaterialModal.vue';
import GoogleIcon from './components/GoogleIcon.vue';
import { App } from 'vue';

const global_components = {
  install: function (app: App) {
    app.component('M-Button', MaterialButton);
    app.component('M-Input', MaterialInput);
    app.component('M-Divider', MaterialDivider);
    app.component('M-Modal', MaterialModal);
    app.component('M-Icon', GoogleIcon);
  }
}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    MButton: typeof MaterialButton;
    MInput: typeof MaterialInput;
    MIcon: typeof GoogleIcon;
    MDivider: typeof MaterialDivider;
    MModal: typeof MaterialModal;
  }
}

export default global_components;
