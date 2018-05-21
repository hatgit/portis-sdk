// Generated by dts-bundle v0.7.3

export class PortisProvider {
    portisClient: string;
    requests: {
        [id: string]: {
            payload: Payload;
            cb;
        };
    };
    queue: {
        payload: Payload;
        cb;
    }[];
    iframe: Promise<HTMLIFrameElement>;
    authenticated: boolean;
    account: string | null;
    network: string | null;
    isPortis: boolean;
    referrerAppOptions: any;
    constructor(opts: {
        apiKey: string;
        network?: Network;
    });
    sendAsync(payload: Payload, cb: any): void;
    send(payload: Payload): {
        id: number;
        jsonrpc: string;
        result: any;
    };
    isConnected(): boolean;
}

export interface Payload {
    id: number;
    jsonrpc: string;
    method: string;
    params: any[];
}
export type Network = 'mainnet' | 'ropsten' | 'kovan' | 'rinkeby';
