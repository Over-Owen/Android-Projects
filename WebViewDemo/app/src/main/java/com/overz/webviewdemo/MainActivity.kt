package com.overz.webviewdemo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.overz.webviewdemo.webview.NativeActivity

/**
 * MainActivity 主界面 - 类.
 * <p>
 * 本类(Activity)作为主界面跳转到其他Activity，提供按钮点击事件跳转
 * </p>
 * @author zhuyongchao
 * @version 1.0.0
 * @since 2021-6-16 Version 1.0.0
 */
class MainActivity : AppCompatActivity() {
    //Button 延迟初始化nativeChart按钮控件
    private lateinit var nativeChart: Button
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
        setContentView(R.layout.activity_main)

        //为myButton按钮赋值
        nativeChart = findViewById(R.id.nativeChartButton)
        //设置按钮点击的监听事件
        nativeChart.setOnClickListener {
            //从当前Activity跳转到NativeActivity
            val intent = Intent(this, NativeActivity::class.java)
            //startActivity()方法用于启动Activity
            //接受一个Intent参数
            startActivity(intent)
        }
    }
}