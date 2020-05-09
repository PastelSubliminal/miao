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
        predicate = this.iteratee(predicate);
        for(let i = array.length - 1; i >= 0; i--){
            if(pred(array[i] === false)){
                return array.slice(0, i + 1);
            }
        }
    },
    dropWhile:function(array, predicate){
        predicate = this.iteratee(predicate);
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
            predicate = this.iteratee(predicate);
            if(pred(array[i] === true)){
                return i;
            }
            return -1;
        }
    },
    findLastIndex:function(array, predicate, fromIndex){
        for(var i = array.length - 1; i >= 0; i--){
            predicate = this.iteratee(predicate);
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
            object[key] = value;
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
        if(typeof(fromIndex) === "Undefined") return -1;
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
        return Array.from(new Set(this.flattenDeep(arrays)));
    },
    unionBy:function(arrays){

    },
    unzip:function(array){

    },
    without:function(array, ...values){
        let result = [];
        for(let item of array){
            if(!values.includes(item)){
                result.push(item);
            }
        }
        return result;
    },
    xor:function(...arrays){
        let array = this.flatMapDepth(arrays);
        for(let i = 0; i < array.length; i++){
            if(array[i] = array[i + 1]){
                array.splice(i, i + 2);
            }
        }
    },
    zip:function(...arrays){
        let maxLength = 0;
        arrays.forEach(array => {
            maxLength = Math.max(maxLength, array.length)
        });
        let array = arrays.map((_, i) =>
            array.map((item) =>
                item[i]
            )
        );
        while(array.length > maxLength) array.length--;
        return array;
    },
    countBy:function(collection, iteratee){
        let object = {};
        predicate = this.iteratee(predicate);
        collection = collection.object(it => predicate(it));
        for(let i = 0; i < collection.length; i++){
            if(collection[i] in object) object[collection[i]]++;
            else object[collection[i]] = 1;
        }
        return object;
    },
    every:function(collection, predicate){
        for(let i = 0; i < collection.length; i++){
            if(!this.iteratee(predicate)(array[i], i, array)) return false;
        }
        return true;
    },
    filter:function(collection, predicate){
        let result = [];
        array.forEach(element => {
            if(this.iteratee(predicate)(element)) result.push(element);
        });
        return result;
    },
    find:function(collection, predicate, fromIndex=0){
        predicate = this.iteratee(predicate);
        for(let i = fromIndex; i < collection.length; i++){
            if(predicate(collection[i])) return collection[i];
        }
    },
    flatMap(collection, iteratee){
        return collection.flatMap(iteratee);
    },
    flatMapDepth(collection, iteratee, depth=1){
        return collection(collection.map(collection, iteratee), n);
    },
    forEach(collection, iteratee){

    },
    groupBy(collection, predicate){
        predicate = this.iteratee(predicate);
        let object = new Object;
        for(let i = 0; i < collection.length; i++){
            if(object[iteratee(collection[i])]){
                object[iteratee(collection[i])].push(collection[i]);
            }else{
                object[iteratee(collection[i])] = [collection[i]];
            }
        }
        return object;
    },
    keyBy:function(collection, predicate){
        predicate = this.iteratee(predicate)
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
    iteratee:function(func = this.identity) {
        if (typeof func === "string") {
          return this.property(func);
        }
        if (Array.isArray(func)) {
          return this.matchesProperty(func[0], func[1]);
        }
        if (typeof func === "function") {
          return func;
        } else {
          return this.matches(func);
        }
    },
}
