package com.tools.thirdly;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import androidx.activity.result.ActivityResultCallback;

import com.google.android.gms.auth.api.signin.GoogleSignInAccount;

public class MyActivity extends Activity {
    public static final String ACTIVITY_PARAMS = "activity_params";
    static ActivityResultCallback<GoogleSignInAccount> onLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        mCallbackManager = CallbackManager.Factory.create();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
//        mCallbackManager.onActivityResult(requestCode, resultCode, data);
        finish();
    }
}
