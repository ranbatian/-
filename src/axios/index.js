import jsonp from 'jsonp';
export default class Axios{
    static jsonp(options){
       return new Promise((reslove,reject)=>{
           jsonp(options.url,{
               param:'callback'
           },function(err,response){
               // eslint-disable-next-line eqeqeq
               response.status=='success' ? reslove(response) : reject(err);
           })
       }); 
    }
}
