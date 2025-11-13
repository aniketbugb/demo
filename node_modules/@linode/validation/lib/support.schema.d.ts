export declare const createSupportTicketSchema: import("yup/lib/object").OptionalObjectSchema<{
    summary: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    description: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    domain_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    linode_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    longviewclient_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    nodebalancer_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    volume_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    summary: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    description: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    domain_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    linode_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    longviewclient_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    nodebalancer_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    volume_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>>;
export declare const createReplySchema: import("yup/lib/object").OptionalObjectSchema<{
    description: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    description: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
//# sourceMappingURL=support.schema.d.ts.map