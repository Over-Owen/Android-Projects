package com.overz.webviewdemo.charts

import android.content.Context
import android.os.Bundle
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewdemo.R
import com.overz.webviewdemo.webview.WebviewActivity
import kotlin.system.exitProcess


class ChartsActivity : AppCompatActivity() {
    private lateinit var webView: WebView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_charts)
        //调用显示webview函数
        showWebView()
    }
    //显示WebView 方法
    fun showWebView(){
        //获得控件
        webView = findViewById<View>(R.id.wv_webview) as WebView
        val urlAddress = "file:android_asset/index3/mix-line-bar.html"
        //访问网页
        webView.loadUrl(urlAddress)
        //系统默认会通过手机浏览器打开网页，为了能够直接通过WebView显示网页，则必须设置
        var webSettings = webView!!.settings
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true) //支持通过JS弹窗
        webSettings.javaScriptEnabled = true  // 开启 JavaScript 交互
//        webSettings.blockNetworkImage = false // 阻止WebView从网络上加载图片
        webSettings.domStorageEnabled = true // 启用或禁用DOM缓存
        webSettings.allowFileAccess = true // 设置可以访问文件
        webSettings.setGeolocationEnabled(true) // 是否使用地理位置
        webView!!.addJavascriptInterface(ChartsActivity.JsInterface(this), "AndroidWebView")
        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
                //使用WebView加载显示url
                view.loadUrl(url)
                //返回true
                return true
            }
        }
        sendInfoToJs()
    }
    //获取JS中的传来数据
    private class JsInterface(private val mContext: Context) {
        //在js中调用window.AndroidWebView.showInfoFromJs(name)，便会触发此方法。
        private lateinit var closePage: String
        @JavascriptInterface
        fun showInfoFromJs(name: String?) {
            //显示从WebView,html网页中传来的字符串
            if (name != null) {
                closePage = name
            }
            if (closePage == "#exit#"){
                //关闭此Activity
                exitProcess(0)
            }
            Toast.makeText(mContext, name, Toast.LENGTH_SHORT).show()
        }
    }

    //在Activity中调用js代码
    fun sendInfoToJs() {
        val msg = "123456"
//        val msg = (findViewById<View>(R.id.input_et) as EditText).text.toString()
        //调用js中的函数：showInfoFromActivity(msg),传入参数
        webView!!.loadUrl("javascript:showInfoFromActivity('$msg')")
    }
}