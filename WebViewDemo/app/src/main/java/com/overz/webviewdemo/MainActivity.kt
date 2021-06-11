package com.overz.webviewdemo


import android.content.Intent
import android.os.Bundle
import android.view.KeyEvent
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewdemo.webview.WebviewActivity


class MainActivity : AppCompatActivity() {

    private lateinit var myButton: Button


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //为myButton按钮创建监听
        myButton = findViewById(R.id.myButton)
        myButton.setOnClickListener {
            //从当前Activity跳转到SecondActivity
            val intent = Intent(this, WebviewActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }


    }
//        webView = findViewById(R.id.webview)
//        webView.webViewClient = object : WebViewClient() {
//            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
//                if (url != null) {
//                    view?.loadUrl(url)
//                }
//                return true
//            }
//        }
//        webView.loadUrl("file:android_asset/index/index.html")
//    }
//
//    //设置返回键的监听
//    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
//        if (keyCode==KeyEvent.KEYCODE_BACK){
//            if (webView!!.canGoBack()){
//                webView!!.goBack()  //返回上一个页面
//                return true
//            }else{
//                finish()
//                return true
//            }
//        }
//        return false
//    }
}