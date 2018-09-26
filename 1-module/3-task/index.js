'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let strLength = str.length;
    let Min = 0;
    let Max = 0;
    let Concotinate="";

    for (let i = 0; i < strLength; i++) {
        let Symb = str.charAt(i);
        let NumberStr="1234567890-.";
        if(NumberStr.indexOf(Symb) != -1){
            Concotinate = Concotinate+Symb;
        }
        else{
            if (parseFloat(Concotinate)>=Max){
                Max = parseFloat(Concotinate);
            }
            if (parseFloat(Concotinate)<=Min){
                Min = parseFloat(Concotinate);
            }
            Concotinate ="";
        }

        if (parseFloat(Concotinate)>=Max){
            Max = parseFloat(Concotinate);
        }
        if (parseFloat(Concotinate)<=Min){
            Min = parseFloat(Concotinate);
        }
    }
    return {
        min: +Min,
        max: +Max};
}

