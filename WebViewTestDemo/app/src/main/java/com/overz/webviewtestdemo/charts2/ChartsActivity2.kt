package com.overz.webviewtestdemo.charts2

import android.annotation.SuppressLint
import android.graphics.Bitmap
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ProgressBar
import com.overz.webviewtestdemo.R
//laiwei本地页面dist2
@Suppress("DEPRECATION")
class ChartsActivity2 : AppCompatActivity() {
    lateinit var progressBar: ProgressBar
    private lateinit var webView: WebView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_charts2)
        progressBar = findViewById<View>(R.id.progress) as ProgressBar
        progressBar.visibility = View.VISIBLE
    }

    override fun onStart() {
        super.onStart()
        //调用显示webview函数
        showWebView()
    }

    //显示WebView 方法
    @SuppressLint("SetJavaScriptEnabled")
    fun showWebView() {
        //获得控件
        webView = findViewById<View>(R.id.wv_webview2) as WebView
        val urlAddress = "file:android_asset/dist2/index.html"
        //访问网页
        webView.loadUrl(urlAddress)
        //系统默认会通过手机浏览器打开网页，为了能够直接通过WebView显示网页，则必须设置
        val webSettings = webView.settings
//        webSettings.setJavaScriptCanOpenWindowsAutomatically(true) //支持通过JS弹窗
        webSettings.setRenderPriority(WebSettings.RenderPriority.HIGH)
        //设置加载网络缓存
        webSettings.cacheMode = WebSettings.LOAD_CACHE_ELSE_NETWORK
        //设置允许APP缓存
        webSettings.setAppCacheEnabled(true)
        //设置布局逻辑 紧凑
        webSettings.layoutAlgorithm = WebSettings.LayoutAlgorithm.NARROW_COLUMNS
        //将图片调整到适合webview的大小
        webSettings.useWideViewPort = true
        //保存表格数据
        webSettings.saveFormData = true
        //平滑切换
        webSettings.setEnableSmoothTransition(true)
        // 缩放至屏幕的大小
        webSettings.loadWithOverviewMode = true
        //支持缩放
        webSettings.setSupportZoom(false)

        webSettings.javaScriptEnabled = true  // 开启 JavaScript 交互
//        webSettings.blockNetworkImage = false // 阻止WebView从网络上加载图片
        webSettings.domStorageEnabled = true // 启用或禁用DOM缓存
        webSettings.allowFileAccess = false // 设置可以访问文件
        webSettings.setGeolocationEnabled(false) // 是否使用地理位置
        webView.webViewClient = object : WebViewClient() {
            override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                super.onPageStarted(view, url, favicon)

            }

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