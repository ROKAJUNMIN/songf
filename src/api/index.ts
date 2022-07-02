import ky from 'ky'
import { KyInstance } from 'ky/distribution/types/ky'

const url = 'https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=z00mni&api_key=b717053a9518e9fd6e19a4dd6be4321f&format=json'
export enum Method {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH'
}

const Api = (method: Method = Method.GET, body?: any) => {
    const Ky: KyInstance = ky.create({
        method: method,
        body: body,
        headers: {
            accept: 'application/json'
        }
    })
    const getAlbum = async () => {
        return await Ky(url)
    }

    return {
        getAlbum
    }

}


export default Api