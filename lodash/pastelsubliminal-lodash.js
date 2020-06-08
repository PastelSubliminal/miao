var pastelsubliminal = function() {
    return{
        compact, chunk, difference, drop, dropRight, flattenDepth, flatten, flattenDeep, reverse, join, some, every, forEach, countBy, filter, curry, spread, negate, flip, unary, keyBy, isArray, isFinite, isNaN, isNumber, isNull,isString, isBoolean, isObjectLike, isArguments, isDate, isElement, isEmpty, isEqual, isMatch, dropWhile, dropRightWhile, fill, findIndex, identity, findLastIndex, toPairs, fromPairs, head, indexOf, initial, intersection, last, lastIndexOf, nth, pull, sortedIndex, union,iteratee, toPath, get,property,matchesProperty, uniq, uniqBy, zip, unzip, without, xor, find, flatMap,flatten, flatMapDepth, groupBy, map, reduce, reject, size, ceil, max, min, round, defaults, escape, unescape, matches, maxBy, sum, sumBy
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
    //function unionBy(...arrays, predicate){
    //     predicate = iteratee(predicate);
    //     var result = [];


    // }
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
    function zip(array){
        var result = []
        for(var i = 0; i < array[0].length; i++){
            result[i] = [];
            for(var j  = 0; j < array.length; j++){
                result[i][j] = array[j][i]
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
    function flatMap(collection, iteratee){
        return collection.flatMap(iteratee);
    }
    function flatMapDepth(collection, predicate, depth=1){
        predicate = iteratee(predicate);
        // return collection(collection.map(collection, iteratee), n);
    }
    function forEach(collection, predicate){
        predicate = iteratee(predicate);
        for(let key of object.keys(collection)){
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
    // }
    function keyBy(ary, key){
        var result = {};
        ary.forEach(item =>{
            result[item[key]] = item;
        })
        return result;
    }
    function map(collection, transform){
        var mapped = [];
        transform = iteratee(transform)
        for(key in collection){
            mapped.push(transform(collection[key], key, collection))
        }
        return mapped;
    }
    // partition(collection, predicate){

    // }
    // reduce(collection, predicate, accumulator){

    // }
    // reduceRight(collection, iteratee=, accumulator){

    // }
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
    function isEqual(value, other){
        if(value === other) return true;
        if(value === null || other === null || typeof value !== "object" || typeof other !== "object") return false;

        let keysVal = Object.keys(value), keysOth = Object.keys(other);
        if(keysVal.length !== keysOth.length) return false;
        for(let key of keysVal){
            if(!keysOth.includes(key) || !isEqual(value[key], other[key])) return false;
        }
        return true;
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
        return Object.prototype.toString.call(value) === "[object Number]" && isNaN(value);
    }
    //function  isNil(value){

    // }
    function isNull(value){
        return value === null;
    }
    function isNumber(value){
        return typeof value === "number";
    }
    //function isObject(value){

    // }
    //function  isRegExp(value){

    // }
    function isString(val){
        return typeof val == "string" || (isObjectLike(val) && nativeToString(val) == "[object String]");
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
    function get(object, path, defaultValue){
        if (isString(path)) {
            path = toPath(path);
          }
          for (let i = 0; i < path.length; i++) {
            if (object == undefined) {
              return defaultValue;
            }
            object = object[path[i]];
          }
          return object;
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
    }
    //function values(object){

    // }
    //function escape(string=''){

    // }
    //function pad(string='', length=0, chars=' '){

    // }
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
    function curry(func, arity=func.length){

    }
    // memoize(func, [resolver])
    // constant(value)
    // propertyOf(object)

    function identity(...args) {
        return args[0];
    }
    function isObjectLike(value) {
        return typeof value == "object" && value !== null;
      }
    /**
     * 创建一个返回给定对象的 path 的值的函数。
     * @param {String} str
     * @returns {Function} 返回的新函数
     */
    function property(str){
        return function(obj){
        return obj[str];
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
    // function matchesProperty(ary){
    //     return matches(fromPairs(chunk(ary, 2)));
    // }
    function matchesProperty(path, value){
        return function(obj){
            return get(obj, path) === value;
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
          if(typeof predicate === "array"){
            predicate = matchesProperty(predicate)
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
}();