var pastelsubliminal = function() {
    return{
        compact, chunk, difference, differenceBy, drop, dropRight, flattenDepth, flatten, flattenDeep, reverse, join, some, every, forEach, countBy, filter, curry, spread, negate, flip, unary, keyBy, isArray, isFinite, isNaN, isNumber, isNull,isString, isBoolean, isObjectLike, isArguments, isDate, isElement, isEmpty, isEqual, isMatch, dropWhile, dropRightWhile, fill, findIndex, identity, findLastIndex, toPairs, fromPairs, head, indexOf, initial, intersection, last, lastIndexOf, nth, pull, sortedIndex, union, unionBy, iteratee, toPath, get,property,matchesProperty, uniq, uniqBy, zip, unzip, without, xor, find, flatMap,flatten, flatMapDepth, groupBy, map, orderBy, reduce, reduceRight, partition, reject, size, ceil, max, min, round, defaults, escape, unescape, matches, maxBy, sum, sumBy, concat, pad, nativeToString, mergeSort, toCompareFunc
    }
    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * @param {Array} array The array to process.
     * @param {Number} size The length of each chunk
     * @returns {array} Returns the new array of chunks.
     */
    function chunk(array, size=1){
        let index = 0;
        let resIndex = 0;
        let result = new Array(Math.ceil(array.length / size));
        for(let i = 0; i < array.length; i += size){
            result[resIndex++] = array.slice(i, i + size);
        }
        return result;
    }
    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     * @param {Array} array
     * @returns {Array} Returns the new array of filtered values.
     */
    function compact(array){
        let result = [];
        for(let i = 0; i < array.length; i++){
            if(array[i]) result.push(array[i]);
        }
        return result;
    }
    /**
     * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
     * @param {Array} array
     * @param  {...Array} values
     * @returns {Array} Returns the new array of filtered values.
     */
    function difference(array, ...value){
        let result = array.slice();
        value = [].concat(...value);
        result = result.filter(n =>
            !value.includes(n)
            )
        return result;
    }
    function differenceBy(array, ...values){
        if(Array.isArray(values.length - 1)){
            return difference(array, ...values);
        }
        var identity = values.pop();
        var func = iteratee(identity);
        var res = [];
        var newValues = flattenDeep(values);
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < newValues.length; j++){
                var sign = true;
                if(isEqual(func(array[i], func(newValues[j])))){
                    sign = false;
                    break;
                }
            }
            if(sign == true){
                res.push(array[i]);
            }
            return res;
        }
    }
    function drop(array, n=1){
        if(n >= array.length) return [];
        return array.slice(n);
    }
    function dropRight(array, n=1){
        // if(n >= array.length) return [];
        // return array.reverse().slice(n).reverse();
        return array.length > n ? array.slice(0, array.length - n) : [];
    }
    function dropRightWhile(array, predicate){
        predicate = iteratee(predicate);
        for(var i = array.length - 1; i >= 0; i--){
            if(predicate(array[i]) === false){
               return array.slice(0, i + 1);
            }
        }
    }
    function dropWhile(array, predicate){
        predicate = iteratee(predicate);
        for(var i = 0; i < array.length; i++){
            if(predicate(array[i]) === false){
                return array.slice(i);
            }
        }
    }
    function fill(array, value, start=0, end=array.length){
        for(var i = start; i < end; i++){
            array[i] = value;
        }
        return array;
    }
    function findIndex(array, predicate, fromIndex=0){
        predicate = iteratee(predicate);
        for(var i = fromIndex; i < array.length; i++){
            if(predicate(array[i]) === true){
                return i;
            }
        }
        return -1;
    }
    function findLastIndex(array, predicate, fromIndex=array.length-1){
        for(var i = fromIndex - 1; i >= 0; i--){
            predicate = iteratee(predicate);
            if(predicate(array[i]) === true){
                return i;
            }
        }
        return -1;
    }
    function head(array){
        if(array === []) return undefined;
        return array[0];
    }
    function indexOf(array, value, fromIndex=0){
        for(let i = fromIndex; i < array.length; i++){
            if(String(array[i]) == String(value)) return i;
        }
    }
    function flatten(array){
        return array.flat();
    }
    function flattenDeep(array){
        return array.flat(Infinity);
    }
    function flattenDepth(array, depth=1){
        return array.flat(depth);
    }
    function fromPairs(pairs){
        let object = {}
        for(let[key, value] of pairs){
            object[key] = value;
        }
        return object;
    }
    function initial(array){
        return array.slice(0, -1)
    }
    function intersection(...arrays){
        return arrays[0].filter(item =>
            arrays.every(value =>
                value.includes(item)
                )
            );
    }
    function join(array, separator=','){
        return array.join(separator);
    }
    function last(array){
        return array[array.length -1];
    }
    function lastIndexOf(array, value, fromIndex=array.length-1){
        if(typeof(fromIndex) === "Undefined") return -1;
        for(var i = fromIndex; i >= 0; i--){
            if(String(array[i]) == String(value)) return i;
        }
        return -1;
    }
    function nth(array, n=0){
        if(n < 0) return array[array.length + n];
        return array[n];
    }
    function pull(array, ...values){
        let result = [];
        for(let value of array){
            if(values.indexOf(value) == -1){
                result.push(value);
            }
        }
        return result;
    }
    function reverse(array){
        var result = [];
        array.forEach(element =>{
            result.unshift(element);
        })
        return result;
    }
    function sortedIndex(array, value){
        for(let i = 0; i < array.length; i++){
            if(array[i] >= value) return i;
        }
    }
    function union(...arrays){
        return Array.from(new Set(flattenDeep(arrays)));
    }
    function unionBy(...arrays){
        let predicate = iteratee(arrays.pop());
        let totalAry = flattenDeep(arrays);
        let cache = [];
        let res = [];
        for(let item of totalAry){
            if(!cache.includes(predicate(item))){
                res.push(item);
                cache.push(predicate(item));
            }
        }
        return res;
    }
    function uniq(array){
        var result = [];
        for(var item of array){
            if(!result.includes(item)){
                result.push(item);
            }
        }
        return result;
    }
    function uniqBy(array, predicate){
        var result = [];
        var compare = []
        predicate = iteratee(predicate);
        for(var i = 0; i < array.length; i++){
            if(!compare.includes(predicate(array[i]))){
                result.push(array[i]);
                compare.push(predicate(array[i]))
            }
        }
        return result;
    }
    function unzip(array){
        var result = [];
        for(var i = 0; i < array[0].length; i++){
            result[i] = [];
            for(var j  = 0; j < array.length; j++){
                result[i][j] = array[j][i]
            }
        }
        return result;
    }
    function without(array, ...values){
        let result = [];
        for(let item of array){
            if(!values.includes(item)){
                result.push(item);
            }
        }
        return result;
    }
    function xor(...arrays){
        let array = arrays.flat();
        return array.filter((item) =>
            array.lastIndexOf(item) === array.indexOf(item));
    }
    function zip(...arrays){
        let result = [];
        let maxLength = Math.max(...arrays.map(item => item.length));
        for(var i = 0; i < maxLength.length; i++){
            result[i] = [];
            for(var j  = 0; j < arrays.length; j++){
                result[i][j] = arrays[j][i]
            }
        }
        return result;
    }
    function countBy(collection, predicate){
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
    }
    function every(ary, predicate){
        for(let i = 0; i < ary.length; i++){
            if(!(iteratee(predicate)(ary[i], i, ary))) return false;
        }
        return true;
    }
    function filter(collection, predicate){
        let result = [];
        collection.forEach(element => {
            if(iteratee(predicate)(element)) result.push(element);
        });
        return result;
    }
    function find(collection, predicate, fromIndex=0){
        predicate = iteratee(predicate);
        for(let i = fromIndex; i < collection.length; i++){
            if(predicate(collection[i])) return collection[i];
        }
    }
    function flatMap(collection, predicate){
        var res = [];
        predicate = iteratee(predicate);
        collection.forEach(item =>{
            res.push(predicate(item));
        })
        return flattenDeep(res);
    }
    function flatMapDepth(collection, predicate, depth=1){
        var res = [];
        predicate = iteratee(predicate);
        collection.forEach(item =>{
            res.push(predicate(item));
        })
        return res.flat(depth);
    }/**
     * 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。注意: 与其他"集合"方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用 _.forIn 或者 _.forOwn 代替。
     * @param {Array|Object} collection
     * @param {Function} predicate
     * @returns {*} 返回集合collection
     */
    function forEach(collection, predicate){
        predicate = iteratee(predicate);
        for(let key of Object.keys(collection)){
            if(predicate(collection[key], key, collection) == false){
                break;
            }
        }
        return collection
    }
    function groupBy(ary, f){
        f = iteratee(f);
        var result = {};
        ary.forEach(item =>{
            var key = f(item);
            if(!(key in result)){
                result[key] = [];
            }
            result[key].push(item);
        })
        return result;
    }
    function keyBy(ary, predicate){
        var result = {};
        let predicate = iteratee(predicate);
        for(let key in ary){
            obj[predicate(ary[i])] = ary[i];
        }
        return result;
    }
    function map(collection, transform){
        var mapped = [];
        transform = iteratee(transform)
        for(let [k, v] of Object.entries(collection)){
            if(!isNaN(k)){
                k = Number(k);
            }
            mapped.push(transform(v, k, collection));
        }
        return mapped;
    }
    function orderBy(collection, predicate, orders){

    }
    function partition(collection, predicate){
        let res = [[], []];
        let predicate = iteratee(predicate);
        for(let i = 0; i < collection.length; i++){
            if(predicate(collection[i]) == true){
                res[0].push(predicate[i]);
            }else{
                res[1].push(collection[i]);
            }
        }
    }
    function reduce(collection, predicate, accumulator){
        for(let i in collection){
            accumulator = predicate(accumulator, collection[i], i, collection)
        }
        return accumulator;
    }
    function reduceRight(collection, predicate){
        predicate = iteratee(predicate);
        for(let i = collection.length;  i > 0; i++){
            res = predicate(res, collection[i], i)
        }
        return res;
    }
    function reject(collection, predicate){
        return filter(collection, negate(predicate));
    }
    // sample(collection){

    // }
    // shuffle(collection){

    // }
    function size(collection){
        return collection.length || Object.keys(collection).length;
    }
    function some(collection, predicate){
        for(let i = 0; i < collection.length; i++){
            if((iteratee(predicate)(collection[i], i, collection))) return true;
        }
        return false;
    }
    // sortBy(collection, predicate){

    // }
    // defer(func, args){

    // }
    // delay(func, wait, args){

    // }
    function isArguments(value){
        return Object.prototype.toString.call(value) === "[object Arguement]";
    }
    function isArray(value){
        return Array.isArray(value);
    }
    function isBoolean(value){
        return Object.prototype.toString.call(value) === "[object Boolean]";
    }
    function isDate(value){
        return Object.prototype.toString.call(value) === "[object Date]";
    }
    function isElement(value){
        return Object.prototype.toString.call(value) === "[object Element]";
    }
    function isEmpty(value){
        let i = 0;
        for(let key in value){
            i++
        }
        return i == 0;
    }
    function isEqual(val, other) {
        if(typeof value!="object"&&typeof other!="object"){
            return value===other?true:false;
          }else if(typeof value=="object"&&value!="null"){
                if(typeof other!="object"){
                  return false;
                }
                var valKey=Object.keys(value);
                var othKey=Object.keys(other);
                if(valKey.length!=othKey.length){
                  return false
                }
                for(var key in value){
                  if(!isEqual(value[key],other[key])){
                    return false;
                  }
                }
                return true;
          }
      }
    //function isError(value){

    // }
    /**
     * 检查 value 是否是原始有限数值。
     * @param {*} value
     * @returns {boolean} 如果 value 是一个有限数值，那么返回 true，否则返回 false。
     */
    function isFinite(value){
        if(typeof(value) == "string") return false;
        return Number(value) !== Infinity;
    }
    //function isFunction(value){

    // }
    function isMatch(object, source, customizer){
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
    }
    function isNaN(value){
        //如果是new Number()构造出的数字，先将其转换为原始类型的数字
        return isNumber(value) && +value !== +value;
    }
    //function  isNil(value){

    // }
    function isNull(value){
        return value === null;
    }
    function isNumber(value){
        return typeof value == "number" || (isObjectLike(value) && nativeToString(value) == "[object Number]");
    }
    function nativeToString(value) {
        return Object.prototype.toString.call(value);
      }
    //function isObject(value){

    // }
    //function  isRegExp(value){

    // }
    function isString(val){
        return Object.prototype.toString.call(val) === "[object String]";
    }
    //function isUndefined(value){

    // }
    //function toArray(value){

    // }

    /**
     * 根据 precision（精度） 向上舍入 number。（ precision（精度）可以理解为保留几位小数。）
     * @param {number} number 要向上舍入的值。
     * @param {number} precision 要向上舍入精度。
     */
    function ceil(number, precision=0){
        var t = Math.pow(10, precision);
        return Math.ceil(number * t ) / t;
    }
    function max(array){
        if(!array || array.length == 0) return undefined;
         return Math.max(...array);
    }
    /**
     * 这个方法类似 _.max 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。
     * @param {Array} array
     * @param {Function} predicate
     * @returns {*} 返回最大的值
     */
    function maxBy(array, predicate){
        var res = [];
        predicate = iteratee(predicate);
        array.forEach(item => {
            res.push(predicate(item));
        });
        return array[res.indexOf(max(res))];
    }
    function min(array){
        if(!array || array.length == 0) return undefined;
        return Math.min(...array);
    }
    function round(number, precision=0){
        var t = Math.pow(10, precision);
        return Math.round(number * t ) / t;
    }
    function sum(array){
        var res = 0;
        for(var i = 0; i < array.length; i++){
            res += array[i];
        }
        return res
    }
    function sumBy(array, predicate){
        var res = 0;
        predicate = iteratee(predicate);
        array.forEach(item => {
            res += predicate(item);
        });
        return res;
    }
    //function random(lower=0, upper=1, floating){

    // }
    //function assignIn(object, sources){

    // }
    function defaults(object, sources){
        for(var key in sources){
            if(!object.matchesProperty(key)){
                object[key] = sources[key];
            }
        }
        return object;
    }
    //function findKey(object, predicate){

    // }
    //function forIn(object, predicate){

    // }
    // forInRight(object, predicate){

    // }
    //function functions(object){

    // }
    /**
     * 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
     * @param {Object} object 要检索的对象。
     * @param {Array|String} path 要获取属性的路径。
     * @param {*} defaultValue 如果解析值是 undefined ，这值会被返回。
     */
    function get(obj, path, defaultValue) {
        if(typeof path=="string"){
            path = toPath(path);
         }
         for(var i=0;i<path.length;i++){
            if(obj==undefined){
              return defaultValue
            }
             obj=obj[path[i]]
         }
         return obj
      }
    /*
        例子：
        var object = { 'a': [{ 'b': { 'c': 3 } }] };

        _.get(object, 'a[0].b.c');
        // => 3

        _.get(object, ['a', '0', 'b', 'c']);
        // => 3

        _.get(object, 'a.b.c', 'default');
        // => 'default'
    */
   /**
    * 转化 value 为属性路径的数组 。
    * @param {*} value
    * @returns {Array} 返回包含属性路径的数组。
    */
    function toPath(value){
        return value.split(/\.|\[|\]\.|\]\[/g);
    }
    //function has(object, path){

    // }
    //function invert(object){

    // }
    //function invoke(object, path, [args]){

    // }
    //function keys(object){

    // }
    //function mapKeys(object, predicate){

    // }
    //function mapValues(object, predicate){

    // }
    //function merge(object, [sources]){

    // }
    //function omit(object, [props]){

    // }
    //function pick(object, [props]){

    // }
    //function result(object, path, [defaultValue]){

    // }
    //function set(object, path, value){

    // }
    function toPairs(object){
        let result = [];
        for(let [key, value] of Object.entries(object)){
            result.push([key, value])
        }
        return result
    }
    //function values(object){

    // }
    //function escape(string=''){

    // }
    function pad(string='', length=0, chars=' '){
        if(string.length >= length){
            return string;
        }
        let left = "";let right = "";
        while(string.length + left.length + right.length < length){
            left += chars;
            right += chars;
        }
        let diff = left.length + right.length + string.length - length;
        if(diff % 2 == 0){
            left = left.slice(0, left.length - (diff / 2));
            right = right.slice(0, right.length - (diff / 2));
        }else{
            left = left.slice(0, left.length - ((diff + 1) / 2));
            right = right.slice(0, right.length - ((diff - 1)/ 2));
        }
        return left + string + right;
    }
    //function padEnd(string='', length=0, chars=' '){

    // }
    //function padStart(string='', length=0, chars=' '){

    // }
    //function unescape(string=''){

    // }
    //function bindAll(object, methodNames){

    // }
    //function range([start=0], end, [step=1]){

    // }
    //function mixin([object=lodash], source, [options={}]){

    // }
    //function times(n, predicate){

    // }
    //function uniqueId([prefix='']){

    // }
    //function cloneDeep(value){

    // }
    function identity(...args) {
        return args[0];
    }
    function concat(array, ...value){
        return array = array.concat(...value);
    }
    // negate(predicate)
    // once(func)
    function spread(func, start=0){
        return function(){
            //调用原函数
            return func(...ary);
        }
    }
    //返回一个函数用于接收剩下的参数
    function curry(func, length=func.length){
        return function(...args){
            if(args.length >= length){
                return func(...args)
            }else{
                return curry(func.bind(null, ...args), length -args.length);
            }
        }
    }

    // memoize(func, [resolver])
    // constant(value)
    // propertyOf(object)

    function identity(...args) {
        return args[0];
    }
    function isObjectLike(value) {
        return typeof val == "object" && val !== null;
      }
    /**
     * 创建一个返回给定对象的 path 的值的函数。
     * @param {String} str
     * @returns {Function} 返回的新函数
     */
    function property(path){
        return function(obj){
        return get(obj, path);
        }
    }
    /*
    例子：
        var objects = [
          { 'a': { 'b': 2 } },
          { 'a': { 'b': 1 } }
        ];

        _.map(objects, _.property('a.b'));
        // => [2, 1]

        _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
        // => [1, 2]
    */

    /**
     *创建一个深比较的方法来比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false。注意: 创建的函数相当于 _.isMatch应用 source 。
     * @param {Object} source
     * @returns {Function}
     */
    function matches(source){
        return function(obj){
            for(var key in source){
              if(obj[key] !== source[key]){
                return false;
              }
            }
            return true;
        }
    }
    /*
        例子：
        var objects = [
          { 'a': 1, 'b': 2, 'c': 3 },
          { 'a': 4, 'b': 5, 'c': 6 }
        ];

        _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
        // => [{ 'a': 4, 'b': 5, 'c': 6 }]
    */

    /**
     * 创建一个深比较的方法来比较给定对象的 path 的值是否是 Value。如果是返回 true，否则返回 false 。
     * @param {Array|string} ary
     * @returns {Function} 返回新的函数
     */
    function matchesProperty(path, val){
        return function (obj) {
            return isEqual(get(obj, path), val);
          }
    }
    /*
        例子：
        var objects = [
          { 'a': 1, 'b': 2, 'c': 3 },
          { 'a': 4, 'b': 5, 'c': 6 }
        ];

        _.find(objects, _.matchesProperty('a', 4));
        // => { 'a': 4, 'b': 5, 'c': 6 }
    */
    function iteratee(predicate){
        if(typeof predicate === "string"){
            predicate = property(predicate);
          }
          if(Array.isArray(predicate)){
            return function (object) {
                for (var i = 0; i < predicate.length - 1; i += 2) {
                    if (object[predicate[i]] !== predicate[i + 1]) {
                        return false
                    }
                }
                return true
            }
          }
          if(typeof predicate === "object"){
            predicate = matches(predicate);
          }
          return predicate;
    }
    function filter(array, test){
        test = iteratee(test);
        var passed = [];
        for(var i = 0; i < array.length; i++){
            if(test(array[i]))
                passed.push(array[i]);
        }
        return passed;
    }

    function reduce(array, combine, start){
        var current = start;
        for(var i = 0; i < array.length; i++){
            current = combine(current, array[i])
        }
        return current;
    }
    function unary(func){
        return function(arg){
            return func(arg);
        }
    }
    function negate(func){
        func = iteratee(func);
        return function(...args){
            return !func(...args);
        }
    }
    function flip(func){
        return function(...args){
            return func(...args.reverse());
        }
    }
    //function spread(func){
    //     return function(ary){
    //         //return func.apply(null, ary);
    //         return func(...ary);
    //     }
    // }
    function spread(func, ary){
            return func(...ary);
    }
    function merge(left, right){
        let [l, r, res] = [0, 0, []];
        while(l < left.length && r < right.length){
            res.push(
                left[l] < right[r] ? left[l++] : right[r++]
            );
        }
        return res.concat(l < left.length ? left.slice(l) : right.slice(r));
    }
    function mergeSort(ary, length = ary.length){
        if(length > 1){
            //找到数组的中间位，然后分成两个小数组left和right，然后递归至left和right长度大小为1
            const mid = Math.floor(length / 2);
            const left = mergeSort(ary.slice(0, mid));
            const right = mergeSort(ary.slice(mid, length));
            ary = merge(left, right)
        }
        return ary;
    }
    function toCompareFunc(funcs, orders) {
        return function compare(obj1, obj2) {
          for (let i = 0; i < funcs.length; i++) {
            let f = iteratee(funcs[i]);
            let res1 = f(obj1);
            let res2 = f(obj2);
            let flag = orders[i] === "desc" ? -1 : 1;
            if (res1 > res2) {
              return flag * 1;
            } else if (res1 < res2) {
              return flag * -1;
            }
          }
          return 0;
        }
      }
}();