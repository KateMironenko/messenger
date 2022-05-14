export class BaseAPI {
    create(arg: any): any{ throw new Error('Not implemented'+arg); }

    request(arg: any): any{ throw new Error('Not implemented'+arg); }

    update(arg: any) { throw new Error('Not implemented'+arg); }

    delete(arg: any): any { throw new Error('Not implemented'+arg); }
}