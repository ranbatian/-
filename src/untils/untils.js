export default {
    formateDate(time) {
        return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDay()}   ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    }
}