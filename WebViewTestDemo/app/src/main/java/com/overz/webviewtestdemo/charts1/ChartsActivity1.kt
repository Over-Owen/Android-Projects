package com.overz.webviewtestdemo.charts1

import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ProgressBar
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewtestdemo.R
import kotlin.system.exitProcess

//laiwei网络页面
class ChartsActivity1 : AppCompatActivity() {
    private lateinit var webView: WebView
    lateinit var progressBar: ProgressBar
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_charts1)
        progressBar = findViewById<View>(R.id.progress) as ProgressBar
        progressBar.setVisibility(View.VISIBLE)
    }
    @SuppressLint("SetJavaScriptEnabled")
    override fun onStart() {
        super.onStart()
        //调用显示webview
        //获得控件
        webView = findViewById<View>(R.id.wv_webview1) as WebView
        val urlAddress = "http://10.0.2.134:8083/#/smallAllReport?paperId=f5e433a3cb544131aedcd09110f2d3f9&practiceType=1&isInit=1"
        //访问网页
        webView.loadUrl(urlAddress)
        //系统默认会通过手机浏览器打开网页，为了能够直接通过WebView显示网页，则必须设置
        var webSettings = webView!!.settings
//        webSettings.setJavaScriptCanOpenWindowsAutomatically(true) //支持通过JS弹窗
        webSettings.setRenderPriority(WebSettings.RenderPriority.HIGH)
        //设置加载网络缓存
//        webSettings.cacheMode = WebSettings.LOAD_CACHE_ELSE_NETWORK
        //设置允许APP缓存
//        webSettings.setAppCacheEnabled(true)
        //设置布局逻辑 紧凑
        webSettings.layoutAlgorithm = WebSettings.LayoutAlgorithm.NARROW_COLUMNS
        //将图片调整到适合webview的大小
        webSettings.useWideViewPort = true
        //保存表格数据
        webSettings.saveFormData = true
        //平滑切换
//        webSettings.setEnableSmoothTransition(true)
        // 缩放至屏幕的大小
//        webSettings.setLoadWithOverviewMode(true)
        //支持缩放
        webSettings.setSupportZoom(false)

        webSettings.javaScriptEnabled = true  // 开启 JavaScript 交互
//        webSettings.blockNetworkImage = false // 阻止WebView从网络上加载图片
        webSettings.domStorageEnabled = true // 启用或禁用DOM缓存
        webSettings.allowFileAccess = false // 设置可以访问文件
        webSettings.setGeolocationEnabled(false) // 是否使用地理位置

        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
                //使用WebView加载显示url
                view.loadUrl(url)
                //返回true
                return true
            }
            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                progressBar.visibility = View.GONE
            }
        }
    }
}