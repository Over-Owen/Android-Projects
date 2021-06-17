package com.overz.webviewdemo.webview

import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.view.ViewParent
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewdemo.R
import java.lang.Thread.sleep
import kotlin.system.exitProcess


class WebviewActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    @SuppressLint("SetJavaScriptEnabled", "AddJavascriptInterface")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_webview)
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
        sleep(3000)
        val msg = "123456789"
        //调用js中的函数：showInfoFromKotlin(msg),传入参数
        webView!!.loadUrl("javascript:showInfoFromKotlin('$msg')")
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

    //在Kotlin中调用js代码
    fun sendInfoToJs(view: View?) {
//        val msg = (findViewById<View>(R.id.input_et) as EditText).text.toString()
        val msg = "123456789"
        //调用js中的函数：showInfoFromKotlin(msg),传入参数
        webView!!.loadUrl("javascript:showInfoFromKotlin('$msg')")
    }
//
//    override fun onDestroy() {
//        if (webView != null) {
//
//            // 如果先调用destroy()方法，则会命中if (isDestroyed()) return;这一行代码，需要先onDetachedFromWindow()，再
//            // destory()
//            val parent: ViewParent = webView.getParent()
//            if (parent != null) {
//                (parent as ViewGroup).removeView(webView)
//            }
//            webView.stopLoading()
//            // 退出时调用此方法，移除绑定的服务，否则某些特定系统会报错
//            webView.getSettings().setJavaScriptEnabled(false)
//            webView.clearHistory()
//            webView.removeAllViews()
//            webView.destroy()
//        }
//        super.onDestroy()
//    }
}