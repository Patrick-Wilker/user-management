class Utils {
    static dateFormat(date){
        let dia = date.getDate()
        let mes = date.getMonth() + 1
        if(dia < 10) {
            dia = '0'+ dia
        }
        if(mes < 10){
            mes = '0'+mes
        }
        return dia+'/'+mes+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()
    }
}