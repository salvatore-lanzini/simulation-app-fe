export enum HttpMethodEnum{
    GET="GET",
    POST="POST",
    PUT="PUT",
    DELETE="DELETE"
}

export namespace HttpMethodEnum {
    export function toString(httpMethodEnum: HttpMethodEnum): string {
        return HttpMethodEnum[httpMethodEnum];
    }

    export function parse(httpMethodEnum: string): HttpMethodEnum {
        return HttpMethodEnum[httpMethodEnum];
    }
}