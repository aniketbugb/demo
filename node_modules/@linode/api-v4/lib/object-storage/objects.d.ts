import { ACLType, ObjectStorageObjectACL, ObjectStorageObjectURL, ObjectStorageObjectURLOptions } from './types';
/**
 * Gets a URL to upload/download/delete Objects from a Bucket.
 */
export declare const getObjectURL: (clusterId: string, bucketName: string, name: string, method: 'GET' | 'PUT' | 'POST' | 'DELETE', options?: ObjectStorageObjectURLOptions) => Promise<ObjectStorageObjectURL>;
/**
 *
 * getObjectACL
 *
 * Gets the ACL for a given Object.
 */
export declare const getObjectACL: (clusterId: string, bucketName: string, name: string) => Promise<ObjectStorageObjectACL>;
/**
 *
 * updateObjectACL
 *
 * Updates the ACL for a given Object.
 */
export declare const updateObjectACL: (clusterId: string, bucketName: string, name: string, acl: Omit<ACLType, 'custom'>) => Promise<ObjectStorageObjectACL>;
//# sourceMappingURL=objects.d.ts.map