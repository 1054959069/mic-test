import * as axios from 'axios';

declare const get: (url: string) => Promise<axios.AxiosResponse<any, any>>;

export { get };
