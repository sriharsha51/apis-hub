import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class APIService {

    // MAILBOXLAYER_API_KEY: '8ed78578dffa6ccae89db0f072e9144f',
    // MAILBOXLAYER_API_URL: 'http://apilayer.net/api/check?access_key=',
    // NUM_VERIFY_API_URL:'http://apilayer.net/api/validate?access_key=',
    // NUM_VERIFY_API_KEY:'e2007c7110fff3439179b5b655004b1e',
    // LANGUAGE_LAYER_API_URL:'http://apilayer.net/api/detect?access_key=',
    // LANGUAGE_LAYER_API_KEY:'8d2d2537f1dbb47d78458537799e9351'

    private query: string;
    private pixabay_API_KEY: string = environment.PIXABAY_API_KEY;
    private pixabay_API_URL: string = environment.PIXABAY_API_URL;// to hide our api and url, useful when we share a file.
    private pixabayURL: string = this.pixabay_API_URL + this.pixabay_API_KEY + '&q=';
    private perPage: string = '&per_page=20';

    private cdnjsURL: string ="https://api.cdnjs.com/libraries?search=";

    private mailBoxLayer_API_URL: string = 'https://apilayer.net/api/check?access_key=';
    private mailBoxLayer_API_KEY: string = '8ed78578dffa6ccae89db0f072e9144f';
    private mailBoxLayerURL: string = this.mailBoxLayer_API_URL + this.mailBoxLayer_API_KEY + '&email=';
    private mailBoxLayerURL_Format:string = '&smtp=1&format=1';

    private numVerify_API_URL: string = 'http://apilayer.net/api/validate?access_key=';
    private numVerify_API_KEY: string = 'e2007c7110fff3439179b5b655004b1e';
    private numVerify_URL: string = this.numVerify_API_URL + this.numVerify_API_KEY + '&number=';
    private format: string = '&format=1';

    private languageLayer_API_URL: string = 'http://apilayer.net/api/detect?access_key=';
    private languageLayer_API_KEY: string = '8d2d2537f1dbb47d78458537799e9351';
    private languageLayer_URL: string = this.languageLayer_API_URL + this.languageLayer_API_KEY + '&query=';

    constructor(private _http: Http){ }

    getImage(query) {
        return this._http.get(this.pixabayURL + query + this.perPage).map(res => res.json())
    }

    getcdns(query) {
        return this._http.get(this.cdnjsURL + query).map(res => res.json())
    }

    checkEmail(query) {
        return this._http.get(this.mailBoxLayerURL + query + this.mailBoxLayerURL_Format).map(res => res.json())
    }

    checkNumber(number) {
        return this._http.get(this.numVerify_URL + number + this.format).map(res => res.json())
    }

    checkLanguage(query) {
        return this._http.get(this.languageLayer_URL + query + this.format).map(res => res.json())
    }
}