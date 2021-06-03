// ==UserScript==
// @name         UC大鱼号文章过滤广告
// @namespace    http://tampermonkey.net/
// @license      MIT
// @icon         https://image.uc.cn/favicon.ico
// @version      0.4
// @description  UC大鱼号文章过滤广告，方便保存文章
// @author       WangWangZhou
// @match        https://mparticle.uc.cn/*
// @grant        none
// @run-at       document-end
// ==/UserScript==


// 根据网速自己设置时间间隔
var bbsInterval = 4000; // 在ADBlock之后运行

(function() {
    'use strict';
    var currentURL = window.location.href;
    var article = /article.html/;
    //若为大鱼号,则：
    if(article.test(currentURL)){
        setTimeout(function () {
            //展开
            $(".ShowContent__openIcon__1444e97c23").click();
            //隐藏分享
            $('.share-import-title').hide();
            //隐藏脚
            $('.Footer').hide();
            //隐藏推荐
            $('.Recommend').hide();
            //隐藏声明
            $('.pages-article-opinion').hide();
            //隐藏疫情追踪
            $('.UtpAd__wrapper__486987ff7a').hide();

        }, bbsInterval);
    }
})();