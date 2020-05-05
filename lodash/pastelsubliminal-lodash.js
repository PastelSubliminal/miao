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
    concat:function(array, ...value){
        return array = array.concat(...value);
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
        //if predicate is not a function, transform predicate into a function
        predicate = iteratee(predicate);
        for(let i = array.length - 1; i >= 0; i--){
            if(pred(array[i] === false)){
                return array.slice(0, i + 1);
            }
        }
    },
    dropWhile:function(array, predicate){
        predicate = iteratee(predicate);
        for(var i = 0; i < array.length; i++){
            if(pred(array[i] === false)){
                array.slice(i)
            }
        }
    },
    fill:function(array, value, start=0, end=array.length){
        for(var i = start; i < end; i++){
            array[i] = value;
        }
        return array;
    },
    findIndex:function(array, predicate, fromIndex){
        for(var i = 0; i < array.length; i++){
            pred = iteratee(predicate);
            if(pred(array[i] === true)){
                return i;
            }
            return -1;
        }
    },
    findLastIndex:function(array, predicate, fromIndex){
        for(var i = array.length - 1; i >= 0; i--){
            predicate = iteratee(predicate);
            if(pred(array[i] === true)){
                return i;
            }
            return -1;
        }
    },
    head:function(array){
        if(array === []) return undefined;
        return array[0];
    },
    flatten:function(array){
        return array.flat();
    },
    flattenDeep:function(array){
        return array.flat(Infinity);
    },
    flattenDepth:function(array, depth=1){
        return array.flat(depth);
    },
    fromPairs:function(pairs){
        let object = {}
        for(let[key, value] of pairs){
            obj[key] = value;
        }
        return object;
    },
    indexOf:function(array, value, fromIndex=0){
        for(let i = fromIndex; i < array.length; i++){
            if(array[i] == value) return i;
        }
    },
    initial:function(array){
        return array.slice(0, -1)
    },
    intersection(...arrays){
        return arrays[0].filter(item =>
            arrays.every(value =>
                value.includes(item)
                )
            );
    },
    join:function(array, separator=','){
        return array.join(separator);
    },
    last:function(array){
        return array[array.length -1];
    },
    lastIndexOf:function(array, value, fromIndex=array.length-1){
        if(fromIndex == NaN) return -1;
        for(var i = fromIndex; i >= 0; i--){
            if(array[i] == value) return i;
        }
        return -1;
    },
    nth:function(array, n=0){
        if(n < 0) return array[array.length + n];
        return array[n];
    },
    pull:function(array, ...value){
        for(let i = 0; i < array.length; i++){
            if(value.includes(array[i])) array.splice(i, 1);
            i--;
        }
        return array;
    },
    reverse:function(array){
        var result = [];
        for(let i = array.length - 1; i = 0; i--){
            result.push[i];
        }
        return result;
    },
    sortedIndex:function(array, value){
        for(let i = 0; i < array.length; i++){
            if(array[i] >= value) return i;
        }
    },
    union:function(...arrays){
        return Array.from(new Set(flattenDeep(arrays)));
    },
    unionBy:function(arrays){

    },
    unzip:function(array){

    },
    zip:function(...arrays){

    },
    countBy:function(collection, iteratee){
        let object = {};
        predicate = iteratee(predicate);
        collection = collection.object(it => predicate(it));
        for(let i = 0; i < collection.length; i++){
            if(collection[i] in object) object[collection[i]]++;
            else object[collection[i]] = 1;
        }
        return object;
    },
//分割线--------------------------------------------------------
    toPairs:function(object){
        let result = [];
        for(let [key, value] of Object.entries(object)){
            result.push([key, value])
        }
    },
//分割线--------------------------------------------------------
    isNaN:function(value){
        return this.isNumber(value) && value != value;
    },
    isNumber:function(value){
        return typeof value === "number";
    },
    isNull:function(value){
        return value === null;
    },
    iteratee:function(value){
        if (isString(value)){
          return property(value);
        }
        if (isArray(value)){
          return matchesProperty(value[0], value[1]);
        }
        if (isObjectLike(value)){
          return matches(value);
        }
        return value;
    },
}
