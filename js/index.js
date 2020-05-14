/*
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-05-14 23:51:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 02:33:29
 */
$(function () {
    // fullpage 方法接收对象形式
    $('#fullpage').fullpage({
        //是否显示项目导航
        navigation: true,
        //是否设置键盘方向导航
        keyboardScrolling: true,
        //滚动速度(ms)
        scrollingSpeed: 1200,

        //回调函数
        //滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function (anchoLink, index) {
            if (index == 2) {
                $(".search").show().animate({ "right": 383 }, 1500, function () {
                    //中间搜索框沙发图片显示
                    $(".search_1").animate({ "opacity": 1 }, 300, function () {
                        $(".search").hide();
                        $(".search_2").show().animate({ "height": 30, "right": 250, "bottom": 452 }, 500)
                    })
                    // $(".soft2_2").show().animate({ "height": 218 }, 3500)
                    $(".soft2_2").animate({ "opacity": 1, "height": 218 }, 3000)
                    // $(".pic2_3").hide();
                    $(".pic2_4").animate({ "opacity": 1 }, 1000)
                })
            }
        }
    });
});