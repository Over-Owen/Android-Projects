package com.overz.webviewdemo.natweb

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import com.overz.webviewdemo.R

class NawebActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_naweb)

    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onStart() {
        super.onStart()
        val wv = findViewById<WebView>(R.id.chartWebview)
        val settings = wv.settings
        settings.javaScriptCanOpenWindowsAutomatically = true //支持通过JS弹窗
        wv.settings.javaScriptEnabled = true
        //调用WebView关联的WebSettings中setJavaScriptEnable(true)方法。
        wv.loadUrl("file:///android_asset/index3/index.html")
        //调用WebView关联的WebSettings中addJavaScriptInterface
        wv.addJavascriptInterface(MyObject(this, "dd"), "my")
    }
}