declare let __VLS_typeProps: {
    avalablePaste: boolean;
    placeholder?: string;
    name?: string;
    list?: string;
    isError?: boolean;
} & ({
    type: 'password';
} | {
    type: 'text' | 'email' | 'url' | 'number';
});
type __VLS_PublicProps = {
    modelValue: string | undefined | number;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_PublicProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | number | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    modelValue: string | undefined | number;
} & {
    avalablePaste: boolean;
    placeholder?: string;
    name?: string;
    list?: string;
    isError?: boolean;
} & {
    type: "password";
}>> | import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    modelValue: string | undefined | number;
} & {
    avalablePaste: boolean;
    placeholder?: string;
    name?: string;
    list?: string;
    isError?: boolean;
} & {
    type: "text" | "email" | "url" | "number";
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: string | number | undefined) => any) | undefined;
}, {} | {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=Text.vue.d.ts.map