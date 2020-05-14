import { Pagination } from "antd"

export default {
    formateDate(time) {
        return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDay()}   ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    },
    Pagination(data,callback){
        return{
            onchange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total:data.result.total,
            showTotal:()=>{
                return `共${data.result.total}条`
            },
            showQuickJumper:true
        }
    }
}