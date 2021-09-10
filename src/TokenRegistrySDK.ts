import axios, {AxiosInstance} from "axios";
import {QueryResponse, QueryRequest} from './Models';

/**
 * An SDK that wraps the Token Registry, as defined here:
 * - https://github.com/input-output-hk/offchain-metadata-tools
 *
 * Mainnet URL: https://tokens.cardano.org/metadata
 */
export class TokenRegistrySDK {
    constructor(
        private baseUrl: string,
        private axiosInstance?: AxiosInstance
    ) {
        this.axiosInstance = axiosInstance || axios.create({
            baseURL: this.baseUrl
        });
    }

    /**
     * Query metadata endpoint.
     *
     * @param request
     */
    public query(request: QueryRequest): Promise<QueryResponse> {
        const response = this.axiosInstance?.get('metadata/' + request.subject)
            .then(resp => resp.data)
            .then(data => data as QueryResponse);

        if (!response)
            throw new Error('Unable to build query.')

        return response;
    }

    /**
     * Given an hashed policy and an asset name, generate a subject.
     *
     * @param policyId The policy id
     * @param assetName The asset name, ex. INDY
     */
    static subject(policyId: string, assetName?: string): string {
        return policyId + (assetName ? this.hash(assetName) : '');
    }

    /**
     * Base16 encode a string.
     *
     * @param s The string to encode
     */
    static hash(s: string): string {
        return Buffer.from(s).toString('hex');
    }
}

/**
 * An instance of the MainnetInstance.
 */
export const MainnetInstance = new TokenRegistrySDK('https://tokens.cardano.org/');
