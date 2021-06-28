class XMLHttpService {}

class Http {
    xmlHttpService: XMLHttpService
    constructor(xmlHttpService: XMLHttpService) {}
    get(url: string, options: any) {
        this.xmlHttpService.request(url, 'GET', options);
    }
    post(url: string, options: any) {
        this.xmlHttpService.request(url, 'POST', options);
    }
}


