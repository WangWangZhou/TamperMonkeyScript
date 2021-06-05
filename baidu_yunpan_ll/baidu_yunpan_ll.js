// ==UserScript==
// @name         百度网盘文件目录打印脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  百度网盘文件目录打印脚本，在浏览器控制台打印当前目录的文件
// @author       小明
// @match        https://pan.baidu.com/s/*
// @icon         https://pan.baidu.com/m-static/base/static/images/favicon.ico?domain=baidu.com
// @grant        none
// ==/UserScript==

// 根据网速自己设置时间间隔
var bbsInterval = 4000; // 在ADBlock之后运行

(function() {
    'use strict';

    setTimeout(function(){
        var arr = document.getElementsByClassName('filename');
        if(arr!=null && arr.length>0){
            var str='';

            for(var i=0;i<arr.length;i++){
                var item = arr[i];
                //console.info(item.innerText);
                str += item.innerText + '\n';
            }
            console.info('');
            console.info(str);
        }
    }, bbsInterval)

})();