export class HelperCommonMethod {

    constructor(){

    }
    /**
     * 
     * @method resetNGModalValue
     * @param {any} resetObject 
     * @memberof HelperCommonMethod
     */
    resetNGModalValue(ngModal: any) {
        for (let key in ngModal) {
            if (Array.isArray(ngModal[key])) {
                ngModal[key] = [];
            }
            else {
                ngModal[key] = "";
            }
        }
    }   
}