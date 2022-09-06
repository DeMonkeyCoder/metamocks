export declare function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[];
export declare function isTheSameAddress(address1: string, address2: string): boolean;
export declare function sleep(ms: number): Promise<unknown>;
