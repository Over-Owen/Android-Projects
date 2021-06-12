package com.overz.webviewdemo.login

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONPObject
import com.overz.webviewdemo.R
import com.overz.webviewdemo.webview.WebviewActivity
import java.util.*

class LoginActivity : AppCompatActivity() {
    private lateinit var userLogin: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        val editTextName = findViewById<EditText>(R.id.et_username)
        val editTextPassword = findViewById<EditText>(R.id.et_password)
        //为userLogin按钮创建监听
        userLogin = findViewById(R.id.login)


        //设置点击事件 跳转Activity
        userLogin.setOnClickListener {
//            通过登录点击事件
//            处理用户名和密码，目前是直接显示toast
//            Toast.makeText(this, editTextName.text, Toast.LENGTH_SHORT).show()
//            Toast.makeText(this, editTextPassword.text, Toast.LENGTH_SHORT).show()
//            val map = mapOf<String,String>()
            var map = TreeMap<String,String>()
            map["用户名"] = "zhuyongchao"
            map["密码"] = "12345678"
            //测试用的map集合转为json字符串
            val jsonString = JSON.toJSONString(map)
            //传参定义
            val bundle = Bundle()
            //bundle绑定json字符串
            bundle.putString("data",jsonString)
//            bundle.putString("data",editTextName.text.toString())
//            bundle.putInt("Int", 2)
            //意图跳转到WebviewActivity
            val intent = Intent(this, WebviewActivity::class.java)
            //，并传值
            intent.putExtras(bundle)
            //开始跳转
            startActivity(intent)
        }
    }
}