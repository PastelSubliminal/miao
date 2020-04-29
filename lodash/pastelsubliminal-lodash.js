var pastelsubliminal = {
    chunk:function(array, size=1){
        var index = 0;
        var resIndex = 0;
        var result = new Array(Math.ceil(array.length / size));
        for(var i = 0; i < array.length; i += size){
            result[resIndex++] = array.slice(i, i + size);
        }
        return result;
    },
    compact:function(array){
        var result = [];
        for(var i = 0; i < array.length; i++){
            if(array[i]) result.push(array[i]);
        }
        return result;
    },
    concat:function(array, ...values){

    },
    isNaN:function(value){
        return this.isNumber(value) && value != value;
    },
    isNumber:function(value){
        return typeof value === "number";
    },
    isNull:function(value){
        return value === null;
    },
}
