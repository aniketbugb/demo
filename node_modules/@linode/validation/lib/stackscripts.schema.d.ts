export declare const stackScriptSchema: import("yup/lib/object").OptionalObjectSchema<{
    script: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    images: import("yup/lib/array").RequiredArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    is_public: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    rev_note: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    script: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    images: import("yup/lib/array").RequiredArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    is_public: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    rev_note: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const updateStackScriptSchema: import("yup/lib/object").OptionalObjectSchema<{
    script: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    images: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    is_public: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    rev_note: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    script: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    images: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    description: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    is_public: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    rev_note: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
//# sourceMappingURL=stackscripts.schema.d.ts.map