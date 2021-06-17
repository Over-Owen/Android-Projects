package com.overz.webviewdemo


import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.WebView
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewdemo.charts.ChartsActivity
import com.overz.webviewdemo.login.LoginActivity
import com.overz.webviewdemo.webview.WebviewActivity


class MainActivity : AppCompatActivity() {

    private lateinit var myButton: Button
    private lateinit var edText: Button


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

        //为edText Button按钮创建监听
        edText = findViewById(R.id.edText)
        edText.setOnClickListener {
            //从当前Activity跳转到SecondActivity
            val intent = Intent(this, ChartsActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }

    }
}