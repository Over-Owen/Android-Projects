package com.overz.webviewtestdemo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.overz.webviewtestdemo.charts.ChartsActivity
import com.overz.webviewtestdemo.charts1.ChartsActivity1
import com.overz.webviewtestdemo.charts2.ChartsActivity2
import com.overz.webviewtestdemo.natives.NativeActivity
//首页按钮跳转
class MainActivity : AppCompatActivity() {
    private lateinit var myButton: Button
    private lateinit var nativeChart: Button
    private lateinit var myButton1: Button
    private lateinit var myButton2: Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //为Button按钮创建监听
        myButton = findViewById(R.id.chart)
        myButton.setOnClickListener {
            //从当前Activity跳转到ChartsActivity
            val intent = Intent(this, ChartsActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }

        //为Button按钮创建监听
        nativeChart = findViewById(R.id.nativeChartButton)
        nativeChart.setOnClickListener {
            //从当前Activity跳转到NativeActivity
            val intent = Intent(this, NativeActivity::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }

        //为Button按钮创建监听
        myButton1 = findViewById(R.id.chart1)
        myButton1.setOnClickListener {
            //从当前Activity跳转到ChartsActivity1
            val intent = Intent(this, ChartsActivity1::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }

        //为Button按钮创建监听
        myButton2 = findViewById(R.id.chart2)
        myButton2.setOnClickListener {
            //从当前Activity跳转到ChartsActivity1
            val intent = Intent(this, ChartsActivity2::class.java)
            //startActivity()方法专门用于启动Activity
            //他接受一个Intent参数
            startActivity(intent)
        }


    }
}