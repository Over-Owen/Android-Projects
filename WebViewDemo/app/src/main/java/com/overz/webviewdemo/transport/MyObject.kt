package com.overz.webviewdemo.transport

import android.content.Context
import android.util.Log
import android.webkit.JavascriptInterface
import com.google.gson.Gson
import java.util.*

class MyObject(c: Context, private val data: String) {
    private val mContext: Context

    /**
     * 获取person字符串传Html
     * @return
     */
    @JavascriptInterface
    fun getData(): String {
        val mlist: MutableList<Person> = ArrayList<Person>()
        for (i in 0..9) {
            mlist.add(Person("姓名$i", i.toString() + "", "工作单位$i"))
        }
        val gson = Gson()
        val d = gson.toJson(mlist)



        Log.d(TAG, "getData: dddd$d")
        return d
    }

    companion object {
        val TAG = MyObject::class.java.simpleName
    }

    init {
        Log.e(TAG, "MyObject: $data")
        mContext = c
    }
}