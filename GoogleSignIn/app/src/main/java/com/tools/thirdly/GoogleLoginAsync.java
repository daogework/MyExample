package com.tools.thirdly;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import androidx.activity.ComponentActivity;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;

public class GoogleLoginAsync {
    private static final String TAG = "GoogleLogin";

    static GoogleSignInClient googleSignInClient;
    static Activity context;
    static ActivityResultLauncher<Intent> launcher;
    static ActivityResultCallback<GoogleSignInAccount> onLogin;

    public static void create(ComponentActivity activity, String key){

        context = activity;

        // Configure sign-in to request the user's ID, email address, and basic
        // profile. ID and basic profile are included in DEFAULT_SIGN_IN.
        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(key)
                .requestEmail()
                .build();

        googleSignInClient = GoogleSignIn.getClient(activity, gso);

        launcher = activity.registerForActivityResult(new ActivityResultContracts.StartActivityForResult(),
                result -> {
                    if (result.getResultCode() == Activity.RESULT_OK) {
                        Intent data = result.getData();
                        Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
                        try {
                            GoogleSignInAccount account = task.getResult(ApiException.class);
                            if(onLogin !=null){
                                onLogin.onActivityResult(account);
                            }
                            Log.i(TAG, "===========Signed in successfully:"+account.getDisplayName()+"=============");
                        } catch (ApiException e) {
                            Log.w(TAG, "signInResult:failed code=" + e.getMessage());
                        }
                    }
                });
    }

    public static void release(){
        context = null;
        googleSignInClient =null;
        onLogin=null;
    }

    public static void signOut(){
        googleSignInClient.signOut();
    }

    public static void signIn(ActivityResultCallback<GoogleSignInAccount> callback) {
        GoogleSignInAccount account = getLastSignedInAccount();
        if(account!=null){
            callback.onActivityResult(account);
            return;
        }

        Intent signInIntent = googleSignInClient.getSignInIntent();
        launcher.launch(signInIntent);
        onLogin = callback;
    }

    public static GoogleSignInAccount getLastSignedInAccount(){
        return GoogleSignIn.getLastSignedInAccount(context);
    }
}
