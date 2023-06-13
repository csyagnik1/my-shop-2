import {takeEvery,put} from 'redux-saga/effects'
import {  PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';


function* getProducts(){
     let data = yield fetch("https://api.jsonbin.io/v3/b/647ef2e49d312622a36b3219");
    
    data = yield data.json();
    data = data.record.product;
    console.log("Data from bin",data);

    
    yield put({type:SET_PRODUCT_LIST,data:data})
}

function* searchProducts(data){
    let result = yield fetch("https://api.jsonbin.io/v3/b/647ef2e49d312622a36b3219");
    result = yield result.json();
    console.log("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data:result})

}

function* productSaga()
{
 yield takeEvery(PRODUCT_LIST, getProducts)
 yield takeEvery(SEARCH_PRODUCT, searchProducts)

}


export default productSaga;