package com.overz.webviewdemo


import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.overz.webviewdemo.charts.ChartsActivity
import com.overz.webviewdemo.login.LoginActivity
import com.overz.webviewdemo.natweb.NawebActivity
import com.overz.webviewdemo.transport.TransActivity
import com.overz.webviewdemo.webview.WebviewActivity


class MainActivity : AppCompatActivity() {

    private lateinit var chartsAct: Button
    private lateinit var webviewAct: Button
    private lateinit var loginAct: Button
    private lateinit var nawebAct: Button
    private lateinit var myWebview: Button



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //为chartsActButton按钮创建监听
        chartsAct = findViewById(R.id.chartsActButton)
        chartsAct.setOnClickListener {
            //从当前Activity跳转到SecondActivity
            val intent = Intent(this, ChartsActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }
        //为webviewActButton按钮创建监听
        webviewAct = findViewById(R.id.webviewActButton)
        webviewAct.setOnClickListener {
            //从当前Activity跳转到SecondActivity
            val intent = Intent(this, WebviewActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }
        //为loginActButton按钮创建监听
        loginAct = findViewById(R.id.loginActButton)
        loginAct.setOnClickListener {
            //从当前Activity跳转到SecondActivity
            val intent = Intent(this, LoginActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }
        //为loginActButton按钮创建监听
        nawebAct = findViewById(R.id.nawebActButton)
        nawebAct.setOnClickListener {
            //从当前Activity跳转到SecondActivity
            val intent = Intent(this, NawebActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }
        //为myWebviewButton按钮创建监听
        myWebview = findViewById(R.id.myWebviewButton)
        myWebview.setOnClickListener {
            //从当前Activity跳转到SecondActivity
            val intent = Intent(this, TransActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }



    }
}