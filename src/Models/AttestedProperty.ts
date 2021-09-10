import { Signature } from './Signature';

/**
 * Wrapper for AttestedProperty from metadata-server.
 */
export interface AttestedProperty<T> {
  value: T;
  signatures: Signature[];
  sequenceNumber: number;
}
