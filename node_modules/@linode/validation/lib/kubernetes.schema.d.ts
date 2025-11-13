export declare const nodePoolSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>>>;
export declare const AutoscaleNodePoolSchema: import("yup/lib/object").OptionalObjectSchema<{
    enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    min: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    max: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    min: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    max: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>>;
export declare const clusterLabelSchema: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
export declare const createKubeClusterSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    region: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    k8s_version: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    node_pools: import("yup").ArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>[] | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>[] | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    region: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    k8s_version: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    node_pools: import("yup").ArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>[] | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>[] | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    region: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    k8s_version: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    node_pools: import("yup").ArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>[] | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        count: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>[] | undefined>;
}>>>;
//# sourceMappingURL=kubernetes.schema.d.ts.map