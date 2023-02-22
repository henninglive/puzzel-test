declare module "@puzzel/widget-api-lib" {
    
    export class Api {
        on(event: string, handler: (...args: any[]) => void): void;
        ready(): void;
    }
    
    export function connect(): Promise<Api>;
}