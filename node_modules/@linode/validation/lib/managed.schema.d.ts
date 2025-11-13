export declare const createServiceMonitorSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    service_type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    timeout: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    credentials: any;
    notes: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    consultation_group: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    service_type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    timeout: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    credentials: any;
    notes: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    consultation_group: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    service_type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    timeout: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    credentials: any;
    notes: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    consultation_group: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>>;
export declare const sshSettingSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>>>;
export declare const updateManagedLinodeSchema: import("yup/lib/object").OptionalObjectSchema<{
    ssh: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    ssh: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        access: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        user: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>>;
}>>;
export declare const credentialLabel: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
export declare const credentialPassword: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
export declare const credentialUsername: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
export declare const createCredentialSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    password: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    password: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    password: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>>;
export declare const updateCredentialSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const updatePasswordSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const createContactSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    phone: any;
    group: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    phone: any;
    group: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    phone: any;
    group: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>>>;
//# sourceMappingURL=managed.schema.d.ts.map