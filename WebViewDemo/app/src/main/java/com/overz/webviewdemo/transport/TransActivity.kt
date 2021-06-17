package com.overz.webviewdemo.transport

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewdemo.R


class TransActivity : AppCompatActivity() {
    var webView: WebView? = null
    var webSettings: WebSettings? = null
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_trans)

        val wv = findViewById<WebView>(R.id.wv)
        val settings = wv.settings
        settings.javaScriptCanOpenWindowsAutomatically = true //支持通过JS弹窗

        wv.settings.javaScriptEnabled = true
        //调用WebView关联的WebSettings中setJavaScriptEnable(true)方法。
        wv.loadUrl("file:///android_asset/naindex/index.html")
        //调用WebView关联的WebSettings中addJavaScriptInterface
        wv.addJavascriptInterface(MyObject(this, "dd"), "my")
    }


}
