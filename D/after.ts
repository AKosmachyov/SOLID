interface Connection {
    request(url: string, type: 'POST' | 'GET' | 'PUT', options: any)
}

class Http {
    httpConnection: Connection
    constructor(httpConnection: Connection) { }
    get(url: string, options: any) {
        this.httpConnection.request(url, 'GET', options);
    }
    post(url: string, options: any) {
        this.httpConnection.request(url, 'POST', options);
    }
}



class NodeHttpService implements Connection {
    request(url: string, type: 'POST' | 'GET' | 'PUT', options: any) {
        //...
    }
}

class MockHttpService implements Connection {
    request(url: string, type: 'POST' | 'GET' | 'PUT', options: any) {
        //...
    }
}

