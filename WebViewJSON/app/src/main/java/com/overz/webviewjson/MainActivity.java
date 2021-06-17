package com.overz.webviewjson;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.util.Log;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
//使用Gson，生成unit
public class MainActivity extends AppCompatActivity {
    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView wv = findViewById(R.id.wv);
        WebSettings settings = wv.getSettings();
        settings.setJavaScriptCanOpenWindowsAutomatically(true); //支持通过JS弹窗
        wv.getSettings().setJavaScriptEnabled(true);
        //调用WebView关联的WebSettings中setJavaScriptEnable(true)方法。
        settings.setJavaScriptEnabled(true);
        wv.loadUrl("file:android_asset/index.html");
        //调用WebView关联的WebSettings中addJavaScriptInterface
        wv.addJavascriptInterface(new MyObject(this,"dd"),"my");
    }
}
