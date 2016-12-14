import nutils from 'nadapter/utils';

let host = 'prod'; 

const CONFIG = {
    test: 'http://60.195.190.113:8025', //http://custom.aixuexi.com/customer 60.195.190.113:8025
    prod: 'http://c.aixuexi.com',//http://60.195.190.113:8025
    dev: 'http://192.168.199.177:8080'
}

const REQ_TYPE = {
    POST: 'post',
    GET: 'get'
}

const API_URL = nutils.isHB() ? CONFIG[host] + '/api/' : '/api/';

const get = getCurryUrl(API_URL, REQ_TYPE.GET);
const post = getCurryUrl(API_URL, REQ_TYPE.POST);
/**
 * 是否自动更新
 */
const AUTO_LOADING = true;

export default {
    order: {

        /**
         * 获取商品详情
         */
        getDetail: get('order/getDetail', AUTO_LOADING),
        getCartGoods: get('order/getCartGoods', AUTO_LOADING), 
        getCommentList: get('order/getCommentList', AUTO_LOADING),
        getmyList: get('order/getmyList', AUTO_LOADING), 
    }
}

/**
 * 生成请求对象
 */
function getCurryUrl (url, reqType, contentType) {
    return (urlName, loading) => {
        return {
            url: url + urlName,
            type: reqType,
            contentType: contentType,
            loading: loading || false,
            callback: (ret)=>{//ret.status == 0 && ret.errorCode == 'G_10002'
                
            }
        }
    }
}

