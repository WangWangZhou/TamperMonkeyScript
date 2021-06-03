// ==UserScript==
// @name         deepin论坛(含uos)--大额头变透明
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  大额头变透明
// @author       小明
// @match        https://bbs.deepin.org/*
// @match        https://bbs.chinauos.com/*
// @icon         https://bbs.deepin.org/favicon.ico?domain=deepin.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //----类似于jQuery库的使用方式，使用className通过正则来添加或者删除class----start----
    function hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }
    
    function addClass(obj, cls) {
        if (!this.hasClass(obj, cls)) {
            obj.className += " " + cls;
        }
    }
    
    function removeClass(obj, cls) {
        if (hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }
    
    /**
     *  toggleClass() 对设置或移除被选元素的一个或多个类进行切换。
     *  该方法检查每个元素中指定的类。如果不存在则添加类，如果已设置则删除之。这就是所谓的切换效果。
     *  不过，通过使用 "switch" 参数，您能够规定只删除或只添加类。
     */
    function toggleClass(obj,cls){
        if(hasClass(obj,cls)){
            removeClass(obj, cls);
        } else {
            addClass(obj, cls);
        }
    }
    //----类似于jQuery库的使用方式，使用className通过正则来添加或者删除class----end----

    setTimeout(function(){
        document.getElementsByClassName('nav')[0].style.background='border-box';
        let childArr = document.getElementsByClassName('nav_list')[0].children;
        let len = childArr.length;
        for(let i=0;i<len;i++){
            //console.info(childArr[i]);
            removeClass(childArr[i],'activeNav');
        }
    }, 2000)

})();