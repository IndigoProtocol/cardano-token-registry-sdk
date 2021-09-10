import { AttestedProperty } from './AttestedProperty';

/**
 * A wrapper for the JSON response from the metadata-server.
 */
export interface QueryResponse {
    subject: string;
    policy: string;
    name: AttestedProperty<string>;
    description: AttestedProperty<string>;
    url: AttestedProperty<string>;
    ticker: AttestedProperty<string>;
    decimals: AttestedProperty<number>;
    logo: AttestedProperty<string>;
}
