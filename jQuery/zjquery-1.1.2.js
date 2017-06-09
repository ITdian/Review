/**
 * Created by Administrator on 2017/3/27.
 */

(function (window,undefined) {

    //1 工厂方法, 用于创建jQ实例
    var jQuery = function( selector ) {
        return new jQuery.fn.init(selector);
    }
    /*2.设置原型*/
    jQuery.prototype = {
        constructor:jQuery,
        init: function (selector) {
            /*2.1判断是否是第一种情况*/
            //*0 ,'' false NaN undefined null
            if(!selector){
                return this;
            }
            /*2.2设置字符串*/
            else if(jQuery.isString(selector)){
                /*2.2.1html片段*/
                if(jQuery.isHtml(selector)){
                    /*2.211取出以及元素*/
                    /*创建一个div元素,把selector作为他的innerHmtl,然后取出对应的子节点*/
                    var temp = document.createElement('div');
                    /*  <span><li></li></span><li></li>*/
                    temp.innerHTML = selector;

                    /*取出的子节点作为this的属性放在this中*/
                    // for(var i = 0,len = temp.children.length;i < len;i++){
                    //     this[i] = temp.children[i];
                    //
                    // }
                    // /*设置length属性*/
                    // this.length = temp.children.length;
                    /*需要把原来的this改为jQuery实例,也就是this*/
                    [].push.apply(this,temp.children);
                    return this;

                }
                /*2.22表示选择器*/
                else {
                    /*2.221取出所有符合条件的节点*/
                    var nodes = document.querySelectorAll(selector);
                    // for(var i = 0,len = nodes.length;i< len;i++){
                    //     this[i] = nodes[i];
                    // }
                    // /*设置length属性*/
                    // this.length = nodes.length;
                    [].push.apply(this,nodes);
                    return this;



                }
            }

            /*3.判断数组和伪数组*/
            /*3.1数组和维数组都是对象
             * 不是函数
             * 不是window*/
            if(jQuery.isObject(selector)&&!jQuery.isFunction(selector)&& !jQuery.isWindow(selector)){

                //
                // /*3.2判断是否是真数组或者是假数组*/
                // /*取出数组中的每一元素作为返回对象的属性*/
                // if(({}).toString.call(selector)==='[object Array]'){
                //     // alert(0);//表示真数组
                //     for(var i= 0,len = selector.length;i< len;i ++){
                //         this[i] = selector[i];
                //     }
                //     this.length = selector.length;
                //     return this;
                //    
                //    
                // }
                // /*伪数组*/
                //     /*如果对应的selector中有length属性和length-1属性
                //     * 就表示一个伪数组*/
                //
                // else if( 'length' in selector && selector.length - 1 in  selector ){
                //     for(var i= 0,len = selector.length;i< len;i ++){
                //         this[i] = selector[i];
                //     }
                //     this.length = selector.length;
                //     return this;
                //
                //
                // }

                /*3.2判断是否是真伪数组*/
                if(jQuery.isLikeArray(selector)){
                    // for(var i= 0,len = selector.length;i< len;i ++){
                    //     this[i] = selector[i];
                    // }
                    // this.length = selector.length;

                    /*在ie8以下不能转化自定义的伪数组,我们可以把伪数组转化成真的数组在转化
                     * */
                    /*3.21无论真数组还是伪数组我们都转化成真数组*/
                    var temp= [].slice.call(selector);
                    /*3.22用真数组进行添加转化*/
                    [].push.apply(this,temp);
                    return this;
                }
            }


            /*4.I其他情况*/
            /*把对应的传入的东西作为返回实例的属性*/
            this[0] = selector;
            this.length = 1;
            return this;

        }
      

    }
    // var init = function (selector) {
    //     /*2.1判断是否是第一种情况*/
    //     //*0 ,'' false NaN undefined null
    //     if(!selector){
    //         return this;
    //     }
    //     /*2.2设置字符串*/
    //     else if(init.isString(selector)){
    //         /*2.2.1html片段*/
    //         if(init.isHtml(selector)){
    //             /*2.211取出以及元素*/
    //             /*创建一个div元素,把selector作为他的innerHmtl,然后取出对应的子节点*/
    //             var temp = document.createElement('div');
    //             /*  <span><li></li></span><li></li>*/
    //             temp.innerHTML = selector;
    //
    //             /*取出的子节点作为this的属性放在this中*/
    //             // for(var i = 0,len = temp.children.length;i < len;i++){
    //             //     this[i] = temp.children[i];
    //             //
    //             // }
    //             // /*设置length属性*/
    //             // this.length = temp.children.length;
    //             /*需要把原来的this改为jQuery实例,也就是this*/
    //             [].push.apply(this,temp.children);
    //             return this;
    //
    //         }
    //         /*2.22表示选择器*/
    //         else {
    //             /*2.221取出所有符合条件的节点*/
    //           var nodes = document.querySelectorAll(selector);
    //             // for(var i = 0,len = nodes.length;i< len;i++){
    //             //     this[i] = nodes[i];
    //             // }
    //             // /*设置length属性*/
    //             // this.length = nodes.length;
    //             [].push.apply(this,nodes);
    //             return this;
    //            
    //
    //
    //         }
    //     }
    //
    //     /*3.判断数组和伪数组*/
    //     /*3.1数组和维数组都是对象
    //     * 不是函数
    //     * 不是window*/
    //     if(init.isObject(selector)&&!init.isFunction(selector)&& !init.isWindow(selector)){
    //
    //         //
    //         // /*3.2判断是否是真数组或者是假数组*/
    //         // /*取出数组中的每一元素作为返回对象的属性*/
    //         // if(({}).toString.call(selector)==='[object Array]'){
    //         //     // alert(0);//表示真数组
    //         //     for(var i= 0,len = selector.length;i< len;i ++){
    //         //         this[i] = selector[i];
    //         //     }
    //         //     this.length = selector.length;
    //         //     return this;
    //         //    
    //         //    
    //         // }
    //         // /*伪数组*/
    //         //     /*如果对应的selector中有length属性和length-1属性
    //         //     * 就表示一个伪数组*/
    //         //
    //         // else if( 'length' in selector && selector.length - 1 in  selector ){
    //         //     for(var i= 0,len = selector.length;i< len;i ++){
    //         //         this[i] = selector[i];
    //         //     }
    //         //     this.length = selector.length;
    //         //     return this;
    //         //
    //         //
    //         // }
    //        
    //         /*3.2判断是否是真伪数组*/
    //         if(init.isLikeArray(selector)){
    //                 // for(var i= 0,len = selector.length;i< len;i ++){
    //                 //     this[i] = selector[i];
    //                 // }
    //                 // this.length = selector.length;
    //            
    //             /*在ie8以下不能转化自定义的伪数组,我们可以把伪数组转化成真的数组在转化
    //             * */
    //             /*3.21无论真数组还是伪数组我们都转化成真数组*/
    //             var temp= [].slice.call(selector);
    //             /*3.22用真数组进行添加转化*/
    //             [].push.apply(this,temp);
    //                 return this;
    //         }
    //     }
    //
    //    
    //     /*4.I其他情况*/
    //     /*把对应的传入的东西作为返回实例的属性*/
    //     this[0] = selector;
    //     this.length = 1;
    //     return this;
    //
    // };
    // /*2.0设置原型的init方法为我们外面的方法*/
    // jQuery.prototype.init = init;

    /*2.1设置fn为原型*/

    jQuery.fn = jQuery.prototype;
    /*3.赋值原型*/
    jQuery.fn.init.prototype = jQuery.fn;



    /*4.把对应的jQuery传递出去*/
    window.jQuery = window.$ = jQuery;

    /*5.抽取常用一些函数*/
    /*采用动态添加方法的方式*/
    /*5.1判断是否是字符*/
    /*当抽取完成后,原型中中init方法不能访问我们抽取的方法
    * 所以我们可以把init方法放在和抽取的方法同一级
    * */
    // init.isString = function (str) {
    //     return typeof str === 'string';
    // };
    // /*5.2判断是否是html片段*/
    // init.isHtml = function (Html) {
    //     return Html.charAt(0)=='<'&&Html.charAt(Html.length -1)=='>' && Html.length >=3
    //
    // }
    // /*5.3判断是否是一个对象*/
    // init.isObject = function (obj) {
    //
    //    return  obj !== null && typeof obj ==='object';
    //    
    // }
    // /*5.4判断是否是一个h函数*/
    // init.isFunction = function (fn) {
    //
    //     return  typeof fn ==='function'
    //
    // }
    // /*5.5判断是否是一个window*/
    // init.isWindow = function (w) {
    //
    //     return  w === window.window
    //
    // }
    // /*5.6判断是否是真伪数组*/
    // init.isLikeArray = function (arr) {
    //     if(({}).toString.call(arr)==='[object Array]'){
    //         return true;
    //     }else  if('length' in arr && arr.length - 1 in  arr){
    //         return true;
    //     }
    //     return false;
    //    
    //    
    // }
    
    /*Dom处理的函数
    * css处理的函数*/
    /*因为jQuery中的函数很多,我们最好给他分类,所以我们需要使用extend来分类*/
    /*使用extend来扩展方法*/
    jQuery.extend = jQuery.fn.extend = function (obj) {
        for(var key in obj){
            this[key] = obj[key];
        }
    }
    /*抽取函数的原则
    * 如果可以抽取成静态方法就抽取成静态方法，静态方法调用方便而且效率高
    * 注意:只有当前的方法没有使用当前对象的一些属性的时候才可以*/
    
    /*经过分析后,我们init中的所有方法没有用到对象中的属性所以我么可以把它抽取成静态方法
    * 所以我们可以通过函数来调用extend方法*/
    jQuery.extend({
        isString:function (str) {
        return typeof str === 'string';
    },
    /*5.2判断是否是html片段*/
    isHtml :function (Html) {
        return Html.charAt(0)=='<'&&Html.charAt(Html.length -1)=='>' && Html.length >=3

    },
    /*5.3判断是否是一个对象*/
    isObject: function (obj) {

        return  obj !== null && typeof obj ==='object';

    },
    /*5.4判断是否是一个h函数*/
    isFunction : function (fn) {

        return  typeof fn ==='function'

    },
    /*5.5判断是否是一个window*/
    isWindow :function (w) {

        return  w === window.window

    },
    /*5.6判断是否是真伪数组*/
    isLikeArray: function (arr) {
        if(({}).toString.call(arr)==='[object Array]'){
            return true;
        }else  if('length' in arr && arr.length - 1 in  arr){
            return true;
        }
        return false;


    }
        
    })
    
    






})(window);
