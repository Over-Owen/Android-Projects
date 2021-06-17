package com.overz.webviewdemo.webview

import android.webkit.JavascriptInterface
/**
 * 发送对象数据给网页中JavaScript - 类.
 * <p>
 * 本类用于创建包含JSON数据和调用方法的类，通过实例化本类，给JavaScript传递不同的Json数据，在JavaScript代码中调用本类
 * 的方法，获取方法的返回值 JSON数据。
 * </p>
 *
 * @param pushData String，接收外部传来的JSON字符串，并初始化，通过方法传递给JavaScript代码
 *
 * @author zhuyongchao
 * @version 1.0.0
 * @since 2021-6-16 Version 1.0.0
 */
class ObjectToSend(private val pushData: String) {

    /**
     * 获取对象中的数据 - 方法.
     * <p>
     * 用于JavaScript代码调取使用类中的本方法，获取本方法的返回值，JSON数据
     * </p>
     */
    //添加@JavascriptInterface使JS获取到标记位置的getData()方法
    @JavascriptInterface
    fun getData(): String {
        //        Log.d("DATA", "这是安卓中的JSON数据$pushData")
        return pushData
    }
}