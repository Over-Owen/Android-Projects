package com.overz.webviewtestdemo.natives

import android.annotation.SuppressLint
import android.graphics.Bitmap
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ProgressBar
import com.overz.webviewtestdemo.R
//本地Echarts android传对象给JS
class NativeActivity : AppCompatActivity() {
    lateinit var progressBar: ProgressBar
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_native)
        progressBar = findViewById<View>(R.id.progress) as ProgressBar
        progressBar.visibility = View.VISIBLE
    }
    override fun onStart() {
        super.onStart()
        showWebView()
    }
    //显示WebView 方法
    @SuppressLint("SetJavaScriptEnabled")
    fun showWebView() {
        val webView = findViewById<WebView>(R.id.chartWebview)

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

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                //设置不显示(隐藏)等待加载栏
                progressBar.visibility = View.GONE
            }
        }
    }
}