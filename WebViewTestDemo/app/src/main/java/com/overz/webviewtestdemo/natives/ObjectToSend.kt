package com.overz.webviewtestdemo.natives

import android.util.Log
import android.webkit.JavascriptInterface

class ObjectToSend(private val pushData: String) {

    //添加@JavascriptInterface使JS获取到标记位置的getData()方法
    @JavascriptInterface
    fun getData(): String {
        //        Log.d("DATA", "这是安卓中的JSON数据$pushData")
        return pushData
    }
}