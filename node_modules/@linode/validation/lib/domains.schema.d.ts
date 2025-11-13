export declare const importZoneSchema: import("yup/lib/object").OptionalObjectSchema<{
    domain: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    remote_nameserver: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    domain: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    remote_nameserver: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const createDomainSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    domain: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    tags: import("yup/lib/array").OptionalArraySchema<import("yup").AnySchema<any, any, any>, any, any[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    retry_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    expire_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    refresh_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, {
    domain: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    soa_email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    domain: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    tags: import("yup/lib/array").OptionalArraySchema<import("yup").AnySchema<any, any, any>, any, any[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    retry_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    expire_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    refresh_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, {
    domain: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    soa_email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    domain: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    tags: import("yup/lib/array").OptionalArraySchema<import("yup").AnySchema<any, any, any>, any, any[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    retry_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    expire_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    refresh_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, {
    domain: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    soa_email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}>>>;
export declare const updateDomainSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    domain: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    tags: import("yup/lib/array").OptionalArraySchema<import("yup").AnySchema<any, any, any>, any, any[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    retry_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    expire_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    refresh_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, {
    domainId: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    soa_email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    domain: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    tags: import("yup/lib/array").OptionalArraySchema<import("yup").AnySchema<any, any, any>, any, any[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    retry_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    expire_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    refresh_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, {
    domainId: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    soa_email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    domain: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    tags: import("yup/lib/array").OptionalArraySchema<import("yup").AnySchema<any, any, any>, any, any[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    retry_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    master_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    expire_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    refresh_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>, {
    domainId: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    soa_email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    axfr_ips: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}>>>;
//# sourceMappingURL=domains.schema.d.ts.map