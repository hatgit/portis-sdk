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
    elements: Promise<{
        wrapper: HTMLDivElement;
        iframe: HTMLIFrameElement;
    }>;
    iframeReady: boolean;
    account: string | null;
    network: string | null;
    isPortis: boolean;
    referrerAppOptions: any;
    events: {
        eventName: string;
        callback;
    }[];
    portisViewportMetaTag: any;
    dappViewportMetaTag: any;
    constructor(opts: {
        apiKey: string;
        network?: Network;
        infuraApiKey?: string;
        providerNodeUrl?: string;
        scope?: ScopeType[];
    });
    sendAsync(payload: Payload, cb: any): void;
    send(payload: Payload, cb?: any): {
        id: number;
        jsonrpc: string;
        result: any;
    } | undefined;
    isConnected(): boolean;
    setDefaultEmail(email: string): void;
    showPortis(callback: any): void;
    on(eventName: string, callback: any): void;
}

export interface Payload {
    id: number;
    jsonrpc: string;
    method: string;
    params: any[];
}
export type Network = 'mainnet' | 'ropsten' | 'kovan' | 'rinkeby' | 'core' | 'sokol';
export type ScopeType = 'email';

