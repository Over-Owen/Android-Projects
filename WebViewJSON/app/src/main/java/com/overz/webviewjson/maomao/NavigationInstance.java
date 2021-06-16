package com.overz.webviewjson.maomao;

import android.util.Log;
import org.json.JSONObject;
import static android.content.ContentValues.TAG;

public class NavigationInstance {

    public JSONObject GetManeuverInfo() {
        try{
            JSONObject test=new JSONObject();
            test.put("maomao", "value");
            return test;
//return new JSONObject(bean.ManeuverInfo);
        }catch(Exception e){
            Log.e(TAG, "",e);
        }
        return null;
    }
}
