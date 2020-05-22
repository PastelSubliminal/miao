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
            if(predicate(array[i] === false)){
                return array.slice(0, i + 1);
            }
        }
    },
    dropWhile:function(array, predicate){
        predicate = this.iteratee(predicate);
        for(var i = 0; i < array.length; i++){
            if(predicate(array[i] === false)){
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
            if(predicate(array[i] === true)){
                return i;
            }
            return -1;
        }
    },
    findLastIndex:function(array, predicate, fromIndex){
        for(var i = array.length - 1; i >= 0; i--){
            predicate = this.iteratee(predicate);
            if(predicate(array[i] === true)){
                return i;
            }
            return -1;
        }
    },
    head:function(array){
        if(array === []) return undefined;
        return array[0];
    },
    indexOf:function(array, value, fromIndex=0){
        for(let i = fromIndex; i < array.length; i++){
            if(String(array[i]) == String(value)) return i;
        }
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
            if(String(array[i]) == String(value)) return i;
        }
        return -1;
    },
    nth:function(array, n=0){
        if(n < 0) return array[array.length + n];
        return array[n];
    },
    pull:function(array, ...values){
        let result = [];
        for(let value of array){
            if(values.indexOf(value) == -1){
                result.push(value);
            }
        }
        return result;
    },
    reverse:function(array){
        var result = [];
        array.forEach(element =>{
            result.unshift(element);
        })
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
        let array = arrays.flat();
        return array.filter((item) =>
            array.lastIndexOf(item) === array.indexOf(item));
    },
    zip:function(...arrays){
        let maxLength = 0;
        arrays.forEach(element => {
            maxLength = Math.max(maxLength, element.length)
        });
        var array = arrays.map((_, i) =>
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
            if(!iteratee(predicate)(array[i], i, array)) return false;
        }
        return true;
    },
    filter:function(collection, predicate){
        let result = [];
        collection.forEach(element => {
            if(iteratee(predicate)(element)) result.push(element);
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
        let hash = {}
    },
    map(collection, predicate){
        predicate = this.iteratee(predicate);

    },
    // partition(collection, predicate){

    // },
    // reduce(collection, predicate, accumulator){

    // },
    // reduceRight(collection, iteratee=, accumulator){

    // },
    // reject(collection, predicate){

    // },
    // sample(collection){

    // },
    // shuffle(collection){

    // },
    size(collection){
        return collection.length || Object.keys(collection).length;
    },
    some(collection, predicate){
        predicate = this.iteratee(predicate);
    },
    // sortBy(collection, predicate){

    // },
    // defer(func, args){

    // },
    // delay(func, wait, args){

    // },
    isArguments:function(value){
        return Object.prototype.toString.call(value) === "[object Arguement]";
    },
    isArray:function(value){
        return Array.isArray(value);
    },
    isBoolean:function(value){
        return Object.prototype.toString.call(value) === "[object Boolean]";
    },isDate:function(value){
        return Object.prototype.toString.call(value) === "[object Date]";
    },
    isElement:function(value){
        return Object.prototype.toString.call(value) === "[object Element]";
    },
    isEmpty:function(value){
        let i = 0;
        for(let key in value){
            i++
        }
        return i == 0;
    },
    isEqual(value, other){

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
    isEqual:function(value, other){
        if(value === other) return true;
        if(value === null || other === null || typeof value !== "object" || typeof other !== "object") return false;

        let keysVal = Object.keys(value), keysOth = Object.keys(other);
        if(keysVal.length !== keysOth.length) return false;
        for(let key of keysVal){
            if(!keysOth.includes(key) || !this.isEqual(value[key], other[key])) return false;
        }
        return true;
    },
    isMatch:function(object, source){
        if(typeof source !== "object" || typeof object !== "object") return source === object;
        for(let key in source){
            if(!(key in object) || !this.isMatch(object[key], source[key])) return false;
        }
        return true;
    },
    matches:function(source){
        return object =>
            this.isMatch(object, source);
    },
    property:function(path){
        return function(object){
            return get (object, path);
        }
    },
    matchesProperty:function(path, srcValue){
        return function(object){
            return this.isMatch(this.property(path)(object), srcValue);
        }
    },
    identity: function(...args) {
        return args[0];
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
