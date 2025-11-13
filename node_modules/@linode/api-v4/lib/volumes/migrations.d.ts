import { VolumesMigrationQueue } from './types';
/**
 * getVolumesMigrationQueue
 *
 * Returns the number of Linodes and Volumes in the migration queue for a region.
 *
 */
export declare const getVolumesMigrationQueue: (region: string) => Promise<VolumesMigrationQueue>;
/**
 * migrateVolumes
 *
 * Adds the specified Volumes to the migration queue
 *
 * @param volumes - array of the ids of the volumes you intend to migrate
 */
export declare const migrateVolumes: (volumes: number[]) => Promise<{}>;
//# sourceMappingURL=migrations.d.ts.map