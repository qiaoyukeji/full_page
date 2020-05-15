/*
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-05-14 23:51:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 13:53:05
 */
$(function () {
    // 当前屏幕高度
    var h = $(window).height();
    // 控制2屏-> 3屏动画
    var flag = false;
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
            if (index == 2 && flag == false) {
                $(".search").show().animate({ "right": 383 }, 1500, function () {
                    //中间搜索框沙发图片显示
                    $(".search_1").animate({ "opacity": 1 }, 300, function () {
                        $(".search").hide();
                        // 搜索框向右上角移动
                        $(".search_2").show().animate({ "height": 30, "right": 250, "bottom": 452 }, 500)
                    })
                    // $(".soft2_2").show().animate({ "height": 218 }, 3500)
                    // 中间大沙发图片慢慢变大
                    $(".soft2_2").animate({ "opacity": 1, "height": 218 }, 3000)
                    // $(".pic2_3").hide();
                    // 图片顶上文字慢慢显示
                    $(".pic2_4").animate({ "opacity": 1 }, 1000, function () {
                        // 当2屏文字显示出来后(2屏所有动画执行完成)，才能执行2屏->3屏动画
                        flag = true;
                    })
                })
            }
        },
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 && flag == true) {
                // 当2屏->3屏，沙发向下第三屏 
                $(".pic2-3_4").show().animate({ "bottom": -(h - 250), "width": 207, "left": 260 }, 1500);
                $(".cover").show();
                $("pic3_4").show();

            }
        }
    });
});