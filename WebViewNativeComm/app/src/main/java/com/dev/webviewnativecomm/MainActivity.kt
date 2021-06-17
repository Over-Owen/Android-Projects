package com.dev.webviewnativecomm

import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    lateinit var mEditText : EditText
    lateinit var mButtonSend : Button
    private val mFilePath = "file:///android_asset/sampleweb.html"

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        mEditText = findViewById(R.id.editInput)
        webViewSample.settings.javaScriptEnabled = true
        webViewSample.addJavascriptInterface(JSBridge(this,mEditText),"JSBridge")
        webViewSample.loadUrl(mFilePath)
        mButtonSend = findViewById(R.id.sendData)
        mButtonSend.setOnClickListener {
            sendDataToWebView()
        }
    }

    /**
     * Receive message from webview and pass on to native.
     */
    class JSBridge(val context: Context, val editTextInput: EditText){
        @JavascriptInterface
        fun showMessageInNative(message:String){
            Toast.makeText(context,message, Toast.LENGTH_LONG).show()
            editTextInput.setText(message)
        }
    }

    /**
     * Send data to webview through function updateFromNative.
     */
    private fun sendDataToWebView(){
        webViewSample.evaluateJavascript(
            "javascript: " +"updateFromNative(\"" + mEditText.text + "\")",
            null)
//        val sendData ="""{"tooltip":{"trigger":"axis","axisPointer":{"type":"cross","crossStyle":{"color":"#999"}}},"toolbox":{"feature":{"dataView":{"show":true,"readOnly":false},"magicType":{"show":true,"type":["line","bar"]},"restore":{"show":true},"saveAsImage":{"show":true}}},"legend":{"data":["蒸发量","降水量","平均温度"]},"xAxis":[{"type":"category","data":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"axisPointer":{"type":"shadow"}}],"yAxis":[{"type":"value","name":"水量","min":0,"max":250,"interval":50,"axisLabel":{"formatter":"{value} ml"}},{"type":"value","name":"温度","min":0,"max":25,"interval":5,"axisLabel":{"formatter":"{value} °C"}}],"series":[{"name":"蒸发量","type":"bar","data":[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{"name":"降水量","type":"bar","data":[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{"name":"平均温度","type":"line","yAxisIndex":1,"data":[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}]}"""
//        webViewSample.evaluateJavascript(
//            "javascript: updateFromNative(\"$sendData\")",
//            null)
        val sendData ="123123123123"
        webViewSample.evaluateJavascript(
            "javascript: updateFromNative(\"$sendData\")",
            null)
    }
}
