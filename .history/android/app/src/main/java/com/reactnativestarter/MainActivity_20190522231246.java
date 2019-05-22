package com.reactnativestarter;

import com.facebook.react.ReactActivity;
import android.content.Context;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeStarter";
    }
    @Override
    public void onResume() {
        super.onResume();
        //NotificationManager nMgr = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        nMgr.cancelAll();
    }
}
