var pastelsubliminal = function(){
    return{compact, chunk, difference, drop, dropRight, flattenDepth, flatten, flattenDeep, reverse, join, some, every, forEach, countBy, filter, curry, spread, negate, flip, before, after, ary, unary, memerize, keyBy, forOwn, isArray, isFunction, isFinite, isNaN, isNumber, isNull, isNil, isObject, isUndefined,
        isString, isBoolean, isObjectLike, isArguments, isArrayBuffer, isArrayLike, isArrayLikeObject, isDate, isPlainObject, isElement, isEmpty, isEqual, isEqualWith, isError, isInteger, nativeToString, isSet, isMap, isMatch, isMatchWith, isLength, isRegExp, isSafeInteger, isSymbol, isWeakSet, isWeakMap, differenceBy, differenceWith, bindAll, range, dropWhile, dropRightWhile, fill, findIndex, identity, findLastIndex, toPairs, fromPairs, head, indexOf, initial, intersection, intersectionBy, intersectionWith, last, lastIndexOf
        , nth, pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, slice, sortedIndex, sortedIndexBy, sortedIndexOf
        , sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, tail, take, takeRight, takeWhile, takeRightWhile, union, unionBy, unionWith, iteratee, toPath, get,
        property, matchesProperty, forOwnRight, uniq, uniqWith, uniqBy, zip, unzip, unzipWith, add, without, xor, xorBy, xorWith, zipObject, zipObjectDeep, zipWith, baseSet, find, findLast, flatMap, flatMapDeep, flatMapDepth, forEachRight, groupBy, invokeMap, includes, map, toCompareFunc, orderBy, sortBy, partition, reduce, reduceRight, reject, sample, sampleSize, shuffle, size, defer, delay, castArray, conforms, conformsTo, eq, gte, gt, isNative, lt, lte, toArray, ceil, divide, floor
        , assign, max, maxBy, min, minBy, mean, meanBy, sum, sumBy, multiply, round, clamp, inRange, random, defaults, findKey, findLastKey, forIn, forInRight, functions, constant, functionsIn, has, create, hasIn, invert, invertBy, invoke, keys, keysIn, mapKeys, mapValues, omit, pick, result, set, values, escape, pad, padEnd, padStart, repeat, unescape, times, propertyOf, memoize, once, matches, uniqueId, cloneDeep}
}
var pastelsubliminal = {
    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * @param {Array} array The array to process.
     * @param {Number} size The length of each chunk
     * @returns {array} Returns the new array of chunks.
     */
    chunk:function(array, size = 1){
        let index = 0;
        let resIndex = 0;
        let result = new Array(Math.ceil(array.length / size));
        for(let i = 0; i < array.length; i += size){
            result[resIndex++] = array.slice(i, i + size);
        }
        return result;
    },
    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     * @param {Array} array
     * @returns {Array} Returns the new array of filtered values.
     */
    compact:function(array){
        let result = [];
        for(let i = 0; i < array.length; i++){
            if(array[i]) result.push(array[i]);
        }
        return result;
    },
    /**
     * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
     * @param {Array} array
     * @param  {...Array} values
     * @returns {Array} Returns the new array of filtered values.
     */
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
        predicate = iteratee(predicate);
        var result = [];
        for(var i = 0; i < array.length; i++){
            if(predicate(array[i]) === false){
                result.push(array.slice(0, i));
            }
        }
        return result;
    },
    dropWhile:function(array, predicate){
        predicate = iteratee(predicate);
        for(var i = 0; i < array.length; i++){
            if(predicate(array[i] === false)){
                array.slice(i);
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
            predicate = iteratee(predicate);
            if(predicate(array[i] === true)){
                return i;
            }
            return -1;
        }
    },
    findLastIndex:function(array, predicate, fromIndex){
        for(var i = array.length - 1; i >= 0; i--){
            predicate = iteratee(predicate);
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
        return Array.from(new Set(flattenDeep(arrays)));
    },
    // unionBy:function(...arrays, predicate){
    //     predicate = iteratee(predicate);
    //     var result = [];


    // },
    uniq:function(array){
        var result = [];
        for(var item of array){
            if(!result.includes(item)){
                result.push(item);
            }
        }
        return result;
    },
    uniqBy:function(array, predicate){
        var result = [];
        predicate = iteratee(predicate);
        for(var i = 0; i < array.length; i++){
            if(!result.includes(predicate(array[i]))){
                result.push(array[i]);
            }
        }
        return result;
    },
    unzip:function(array){
        var result = []
        for(var i = 0; i < array[0].length; i++){
            result[i] = [];
            for(var j  = 0; j < array.length; i++){
                result[i][j] = array[j][i]
            }
        }
        return result;
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
    zip:function(array){
        var result = []
        for(var i = 0; i < array[0].length; i++){
            result[i] = [];
            for(var j  = 0; j < array.length; i++){
                result[i][j] = array[j][i]
            }
        }
        return result;
    },
    countBy:function(collection, predicate){
        let object = {};
        predicate = iteratee(predicate);
        collection.forEach(item => {
            let key = predicate(item);
            if(!object[key]){
                object[key] = 1;
            }else{
                object[key]++
            }
        });
        return object;
    },
    every:function(collection, predicate){
        for(let i = 0; i < collection.length; i++){
            if(!(iteratee(predicate)(array[i], i, array))) return false;
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
        predicate = iteratee(predicate);
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
    groupBy:function(ary, f){
        var result = {};
        ary.forEach(item =>{
            var key = f(item);
            if(!(key in result)){
                result[key] = [];
            }
            result[key].push(item);
        })
        return result;
    },
    // groupBy(collection, predicate){
    //     predicate = iteratee(predicate);
    //     let object = new Object;
    //     for(let i = 0; i < collection.length; i++){
    //         if(object[iteratee(collection[i])]){
    //             object[iteratee(collection[i])].push(collection[i]);
    //         }else{
    //             object[iteratee(collection[i])] = [collection[i]];
    //         }
    //     }
    //     return object;
    // },
    keyBy:function(ary, key){
        var result = {};
        ary.forEach(item =>{
            result[item[key]] = item;
        })
        return result;
    },
    map(collection, predicate){
        predicate = iteratee(predicate);

    },
    // partition(collection, predicate){

    // },
    // reduce(collection, predicate, accumulator){

    // },
    // reduceRight(collection, iteratee=, accumulator){

    // },
    reject(collection, predicate){
        return filter(collection, negate(predicate));
    },
    // sample(collection){

    // },
    // shuffle(collection){

    // },
    size(collection){
        return collection.length || Object.keys(collection).length;
    },
    some(collection, predicate){
        for(let i = 0; i < collection.length; i++){
            if((iteratee(predicate)(array[i], i, array))) return true;
        }
        return false;
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
    },
    isDate:function(value){
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
    isEqual:function(value, other){
        if(value === other) return true;
        if(value === null || other === null || typeof value !== "object" || typeof other !== "object") return false;

        let keysVal = Object.keys(value), keysOth = Object.keys(other);
        if(keysVal.length !== keysOth.length) return false;
        for(let key of keysVal){
            if(!keysOth.includes(key) || !isEqual(value[key], other[key])) return false;
        }
        return true;
    },
    // isError:function(value){

    // },
    // isFinite:function(value){

    // },
    // isFunction:function(value){

    // },
    isMatch:function(object, source, customizer){
        if(object === source) return true;
        if(object == undefined) return false;
        for(let key of Object.keys(source)){
            if(isObjectLike(source[key])){
                if(!isMatch(object[key], source[key])){
                    return false;
                }
            }else{
                if(!customizer(object[key], source[key], key, object, source)){
                    return false;
                }
            }
        }
        return true;
    },
    isNaN:function(value){
        return Object.prototype.toString.call(value) === "[object Number]" && isNaN(value);
    },
    // isNil:function(value){

    // },
    isNull:function(value){
        return value === null;
    },
    isNumber:function(value){
        return typeof value === "number";
    },
    // isObject:function(value){

    // },
    // isRegExp:function(value){

    // },
    isString:function(value){
        return typeof val == "string" || (isObjectLike(val) && nativeToString(val) == "[object String]");
    },
    // isUndefined:function(value){

    // },
    // toArray:function(value){

    // },
    ceil:function(number, precision=0){
        var t = Math.pow(10, precision);
        return Math.round(number * t ) / t;
    },
    max:function(array){
        if(!array || array.length == 0) return undefined;
         return Math.max(...array);
    },
    // maxBy:function(array, predicate){

    // },
    min:function(array){
        if(!array || array.length == 0) return undefined;
        return Math.min(...array);
    },
    round:function(number, precision=0){
        var t = Math.pow(10, precision);
        return Math.round(number * t ) / t;
    },
    // sumBy:function(array, predicate){

    // },
    // random:function(lower=0, upper=1, floating){

    // },
    // assignIn:function(object, sources){

    // },
    defaults:function(object, sources){
        for(var key in sources){
            if(!object.matchesProperty(key)){
                object[key] = sources[key];
            }
        }
        return object;
    },
    // findKey:function(object, predicate){

    // },
    // forIn:function(object, predicate){

    // },
    // forInRight(object, predicate){

    // },
    // functions:function(object){

    // },
    get:function(object, path, defaultValue){
        if (isString(path)) {
            path = toPath(path);
          }
          for (let i = 0; i < path.length; i++) {
            if (object == undefined) {
              return defaultValue;
            }
            object = object[path[i]];
          }
          if (object == undefined) {
            return defaultValue;
          }
          return object;
    },
    toPath:function(value){
        return value.split(/\.|\[|\]\.|\]\[/g);
    },
    // has:function(object, path){

    // },
    // invert:function(object){

    // },
    // invoke:function(object, path, [args]){

    // },
    // keys:function(object){

    // },
    // mapKeys:function(object, predicate){

    // },
    // mapValues:function(object, predicate){

    // },
    // merge:function(object, [sources]){

    // },
    // omit:function(object, [props]){

    // },
    // pick:function(object, [props]){

    // },
    // result:function(object, path, [defaultValue]){

    // },
    // set:function(object, path, value){

    // },
    toPairs:function(object){
        let result = [];
        for(let [key, value] of Object.entries(object)){
            result.push([key, value])
        }
    },
    // values:function(object){

    // },
    // escape:function(string=''){

    // },
    // pad:function(string='', length=0, chars=' '){

    // },
    // padEnd:function(string='', length=0, chars=' '){

    // },
    // padStart:function(string='', length=0, chars=' '){

    // },
    // unescape:function(string=''){

    // },
    // bindAll:function(object, methodNames){

    // },
    // range:function([start=0], end, [step=1]){

    // },
    // mixin:function([object=lodash], source, [options={}]){

    // },
    // times:function(n, predicate){

    // },
    // uniqueId:function([prefix='']){

    // },
    // cloneDeep:function(value){

    // },
    identity: function(...args) {
        return args[0];
    },
    concat:function(array, ...value){
        return array = array.concat(...value);
    },
    matches:function(source){
        return function(object){
            return isMatch(object, source);
        }
    },
    property:function(path){
        return function(object){
            return get(object, path);
        }
    },
    // negate(predicate)
    // once(func)
    spread:function(func, start=0){
        return function(){
            //调用原函数
            return func(...ary);
        }
    },
    // curry(func, [arity=func.length])
    // memoize(func, [resolver])
    // constant(value)
    // propertyOf(object)
    matchesProperty:function(path, srcValue){
        return function(object){
            return isMatch(property(path)(object), srcValue);
        }
    },

    identity: function(...args) {
        return args[0];
    },
    isObjectLike:function(value) {
        return typeof value == "object" && value !== null;
      },
    // iteratee:function(value){
    //     if(isString(value)){
    //         return property(value);
    //     }
    //     if(isArray(value)){
    //         return matchesProperty(value[0], value[1]);
    //     }
    //     if(isObjectLike(value)){
    //         return matches(value);
    //     }
    //     return value;
    // },
    iteratee:function(value){
        if(Object.prototype.toString.call(value) == '[object Function]'){
            return value;
        }
        if(Object.prototype.toString.call(value) == '[object String]'){
            return function(object){
                return nonmit.get(object, value);
            }
        }
        if(Object.prototype.toString.call(value) == '[object Array]'){
            return function(object){
                return object[value[0]] == value[1];
            }
        }
        if(Object.prototype.toString.call(value) == '[object Object]'){
            return function(object){
                for(let i in value){
                    if(object[i] != value[i])
                        return false;
                }
                return true;
            }
        }
    },
    filter:function(array, test){
        var passed = [];
        for(var i = 0; i < array.length; i++){
            if(test(array[i]))
                passed.push(array[i]);
        }
        return passed;
    },
    map:function(array, transform){
        var mapped = [];
        for(var i = 0; i < array.length; i++){
            mapped.push(transform(array[i]));
        return mapped;
        }
    },
    reduce:function(array, combine, start){
        var current = start;
        for(var i = 0; i < array.length; i++){
            current = combine(current, array[i])
        }
        return current;
    },
    unary:function(func){
        return function(arg){
            return func(arg);
        }
    },
    negate:function(func){
        return function(...args){
            return !func(...args);
        }
    },
    flip:function(func){
        return function(...args){
            return func(...args.reverse());
        }
    },
    // spread:function(func){
    //     return function(ary){
    //         //return func.apply(null, ary);
    //         return func(...ary);
    //     }
    // },
    spread:function(func, ary){
            return func(...ary);
    },
}