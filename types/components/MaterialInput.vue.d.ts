declare let __VLS_typeProps: {
    name?: string;
    placeholder?: string;
    avalablePaste?: boolean;
} & ({
    type?: 'text' | 'email' | 'password' | 'url' | 'number' | 'date';
    list?: string;
});
type __VLS_PublicProps = {
    modelValue: string | number | undefined;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    default?(_: {}): any;
    default?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    type: string;
    avalablePaste: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | number | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    type: string;
    avalablePaste: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: string | number | undefined) => any) | undefined;
}, {
    type: "text" | "email" | "password" | "url" | "number" | "date";
    avalablePaste: boolean;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
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
//# sourceMappingURL=MaterialInput.vue.d.ts.map