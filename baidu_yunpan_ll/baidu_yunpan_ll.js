// ==UserScript==
// @name         百度网盘文件目录打印脚本996
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  百度网盘文件目录打印脚本，在浏览器控制台打印当前目录的文件
// @author       小明
// @match        https://pan.baidu.com/s/*
// @match        https://pan.baidu.com/disk/*
// @icon         https://pan.baidu.com/m-static/base/static/images/favicon.ico?domain=baidu.com
// @grant        none
// ==/UserScript==

// 根据网速自己设置时间间隔
var bbsInterval = 4000; // 在ADBlock之后运行

(function() {
    'use strict';
    function ppstr(arr){
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
    }

    setTimeout(function(){
        //打印分享页面
        var arr = document.getElementsByClassName('filename');
        ppstr(arr);
        //打印家页面
        arr = document.getElementsByClassName('aouhYOKy');
        ppstr(arr);
    }, bbsInterval)

})();