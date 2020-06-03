let context = {
    req: {},
    res: {},
    request: {},
    response: {},
    get Body() {
        this.request.url;
    },
    set Body(val) {
        this.request.body = val;
    }
}