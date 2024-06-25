import MaterialButton from './components/MaterialButton.vue';
import MaterialInput from './components/MaterialInput.vue';
import MaterialDivider from './components/MaterialDivider.vue';
import MaterialModal from './components/MaterialModal.vue';
import GoogleIcon from './components/GoogleIcon.vue';
import { App } from 'vue';
declare const global_components: {
    install: (app: App) => void;
};
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
//# sourceMappingURL=v-m3.d.ts.map