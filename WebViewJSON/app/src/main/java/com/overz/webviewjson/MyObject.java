package com.overz.webviewjson;

import android.content.Context;
import android.util.Log;
import android.webkit.JavascriptInterface;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zzzzz on 2017/2/13.
 */

public class MyObject {
    public static final String TAG = MyObject.class.getSimpleName() ;

    public MyObject(Context c,String data){
        Log.e(TAG, "MyObject: "+data );
    }

    /**
     * 获取person字符串传Html
     * @return
     */
    @JavascriptInterface
    public String getData(){

        List<Person> mlist = new ArrayList<>();
        for (int i = 0; i <10 ; i++) {
            mlist.add(new Person("姓名"+i,i+"","工作单位"+i));
        }
        Gson gson = new Gson();
        String d = gson.toJson(mlist);
        Log.d(TAG, "getData: dddd"+d);
        return d;
    }
}