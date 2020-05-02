var pastelsubliminal = {
    chunk:function(array, size=1){
        let index = 0;
        let resIndex = 0;
        let result = new Array(Math.ceil(array.length / size));
        for(let i = 0; i < array.length; i += size){
            result[resIndex++] = array.slice(i, i + size);
        }
        return result;
    },
    compact:function(array){
        let result = [];
        for(let i = 0; i < array.length; i++){
            if(array[i]) result.push(array[i]);
        }
        return result;
    },
    concat:function(array, ...values){
        return array = array.concat(...values);
    },
    difference:function(array, ...value){
        let result = array.slice();
        value = [].concat(...value);
        result = result.filter(n =>
            !value.includes(n)
            )
        return result;
    },
    drop:function(array, n=1){
        if(n >= array.length) return [];
        return array.slice(n);
    },
    dropRight:function(array, n=1){
        // if(n >= array.length) return [];
        // return array.reverse().slice(n).reverse();
        return array.length > n ? array.slice(0, array.length - n) : [];
    },
    dropRightWhile:function(array, predicate){

    },
    dropWhile:function(array, predicate){

    },
    fill:function(array, value, start=0, end=array.length){
        for(var i = start; i < end; i++){
            array[i] = value;
        }
        return array;
    },
    findIndex:function(array, predicate, fromIndex){
        for(var i = 0; i < array.length; i++){

        }
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
