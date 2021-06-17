package com.overz.webviewdemo.webview

import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewdemo.R
import kotlin.system.exitProcess


class WebviewActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    @SuppressLint("SetJavaScriptEnabled", "AddJavascriptInterface")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_webview)
    }

    //页面启动时，加载webview
    @SuppressLint("SetJavaScriptEnabled")
    override fun onStart() {
        super.onStart()
        //通过id查找到webView，并初始化
        webView = findViewById<View>(R.id.webView) as WebView
        //设置WebView支持JavaScript
        webView!!.settings.javaScriptEnabled = true
        //设置本地网页链接
//        var url = "https://echarts.apache.org/examples/zh/editor.html"
        val url = "file:android_asset/index2/index.html"
        webView!!.loadUrl(url)
        //在js中调用本地Kotlin方法
        webView!!.addJavascriptInterface(JsInterface(this), "AndroidWebView")
        //添加客户端支持
        webView!!.webChromeClient = WebChromeClient()
        webView!!.setWebViewClient(object : WebViewClient() {
            override fun onPageFinished(view: WebView, url: String) {
                Log.e(
                    "finish", "onPageFinished 页面加载完成显示 "
                )
                sendStringToJS()
            }
        })
    }

    //获取JS中的传来数据
    private class JsInterface(private val mContext: Context) {
        //在js中调用window.AndroidWebView.showInfoFromJs(name)，便会触发此方法。
        private lateinit var closePage: String

        @JavascriptInterface
        fun showInfoFromJs(name: String?) {
            //显示从WebView,html网页中传来的字符串
            if (name == "#exit#") {
                //关闭此Activity
                exitProcess(0)
            }
            Toast.makeText(mContext, name, Toast.LENGTH_SHORT).show()
        }
    }

    //在Kotlin中调用js代码
    fun sendStringToJS(){
        val msg = "99999999999999999999999999999999999999999999999"
        webView!!.loadUrl("javascript:showInfoFromActivity('$msg')")
    }

}