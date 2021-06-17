package com.overz.webviewdemo.webview

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ProgressBar
import com.overz.webviewdemo.R

/**
 * 本地WebView所在的Activity - 类.
 * <p>
 * 本类(Activity)用于显示WebView控件，由MainActivity点击跳转进入，用于与WebView中加载的本地网页的JavaScript交互，
 * 使用传递对象的方式，传递JSON数据至JavaScript中。JavaScript处理数据后渲染显示在网页中。同时，这也是一个Echarts的
 * Demo，用来演示如何从Android端获取图表需要的JSON数据，传递给JavaScript代码，进过JavaScript处理，渲染到HTML页面上。
 * </p>
 * @author zhuyongchao
 * @version 1.0.0
 * @since 2021-6-16 Version 1.0.0
 */
class NativeActivity : AppCompatActivity() {
    //延迟初始化 进度条控件，用于WebView页面加载时的等待加载栏
    lateinit var progressBar: ProgressBar
    /**
     * Activity创建时进行的操作 - 方法.
     * <p>
     * 用于初始化一些变量的值，如页面布局文件的位置
     * </p>
     *
     * @param savedInstanceState  Bundle，保存Activity的状态
     *
     */
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //查找当前Activity的布局文件
        setContentView(R.layout.activity_native)
        //初始化progressBar，为布局中id为的progress的进度条控件
        progressBar = findViewById<View>(R.id.progress) as ProgressBar
        //设置显示(可见)等待加载栏
        progressBar.visibility = View.VISIBLE
    }

    /**
     * Activity开始时进行的操作 - 方法.
     * <p>
     * 用于调取控件以及其他在开始运行时的方法
     * </p>
     */
    override fun onStart() {
        super.onStart()
        //调用运行显示WebView的方法
        showWebView()
    }
    //显示WebView 方法
    @SuppressLint("SetJavaScriptEnabled")               //注解 在此方法中支持JavaScript使用
    fun showWebView() {
        //找到WebView的id，并实例化
        val webView = findViewById<WebView>(R.id.chartWebView)

        //访问本地页面的路径
        val url = "file:///android_asset/nativeChart/index.html"
        //调用loadUrl()方法，访问页面
        webView.loadUrl(url)

        //对webView进行设置的方法
        val settings = webView.settings
        settings.javaScriptEnabled = true                           //设置允许使用JavaScript处理数据
        settings.javaScriptCanOpenWindowsAutomatically = true       //支持JavaScript弹窗

        //初始化要发送给页面JS的格式化的JSON数据
        val dataToSend = """{
    "tooltip": {
        "trigger": "axis", 
        "axisPointer": {
            "type": "cross", 
            "crossStyle": {
                "color": "#999"
            }
        }
    }, 
    "toolbox": {
        "feature": {
            "dataView": {
                "show": true, 
                "readOnly": false
            }, 
            "magicType": {
                "show": true, 
                "type": [
                    "line", 
                    "bar"
                ]
            }, 
            "restore": {
                "show": true
            }, 
            "saveAsImage": {
                "show": true
            }
        }
    }, 
    "legend": {
        "data": [
            "蒸发量", 
            "降水量", 
            "平均温度"
        ]
    }, 
    "xAxis": [
        {
            "type": "category", 
            "data": [
                "1月", 
                "2月", 
                "3月", 
                "4月", 
                "5月", 
                "6月", 
                "7月", 
                "8月", 
                "9月", 
                "10月", 
                "11月", 
                "12月"
            ], 
            "axisPointer": {
                "type": "shadow"
            }
        }
    ], 
    "yAxis": [
        {
            "type": "value", 
            "name": "水量", 
            "min": 0, 
            "max": 250, 
            "interval": 50, 
            "axisLabel": {
                "formatter": "{value} ml"
            }
        }, 
        {
            "type": "value", 
            "name": "温度", 
            "min": 0, 
            "max": 25, 
            "interval": 5, 
            "axisLabel": {
                "formatter": "{value} °C"
            }
        }
    ], 
    "series": [
        {
            "name": "蒸发量", 
            "type": "bar", 
            "data": [
                2, 
                4.9, 
                7, 
                23.2, 
                25.6, 
                76.7, 
                135.6, 
                162.2, 
                32.6, 
                20, 
                6.4, 
                3.3
            ]
        }, 
        {
            "name": "降水量", 
            "type": "bar", 
            "data": [
                2.6, 
                5.9, 
                9, 
                26.4, 
                28.7, 
                70.7, 
                175.6, 
                182.2, 
                48.7, 
                18.8, 
                6, 
                2.3
            ]
        }, 
        {
            "name": "平均温度", 
            "type": "line", 
            "yAxisIndex": 1, 
            "data": [
                2, 
                2.2, 
                3.3, 
                4.5, 
                6.3, 
                10.2, 
                20.3, 
                23.4, 
                23, 
                16.5, 
                12, 
                6.2
            ]
        }
    ]
}""".replace("\\s".toRegex(), "")           //去格式化  去除字符串内所有的空格
        //实例化MyObject类，并传入将sendData作为参数传入
        val sendObject = ObjectToSend(dataToSend)
        //实现Android与JavaScript交互的方法，传入java对象，并设置对象的别名为 sendData，与JavaScript中获取的对象名一致
        webView.addJavascriptInterface(sendObject, "sendData")

        //WebViewClient：辅助WebView处理各种通知与请求事件
        webView.webViewClient = object : WebViewClient() {
            /**
             * 当页面加载完毕，执行 onPageFinished - 方法.
             * <p>
             * 页面加载完毕时运行的方法，如无另外添加的功能，可不写此方法
             * </p>
             *
             * @param view WebView，引入当前的WebView参数，指定方法控制的WebView
             * @param url String，引入当前的URL链接(本地文件)
             *
             */
            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                //设置不显示(隐藏)等待加载栏
                progressBar.visibility = View.GONE
            }
        }
    }
}