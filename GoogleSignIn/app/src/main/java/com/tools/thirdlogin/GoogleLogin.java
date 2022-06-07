package com.tools.thirdlogin;

import android.app.Activity;
import android.content.Intent;

import com.example.googlesignin.Define;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;

public class GoogleLogin {
    private static final int RC_SIGN_IN = 1000;
    private static final String TAG = "GoogleLogin";

    static GoogleSignInClient mGoogleSignInClient;
    static Activity activity;
    public static void create(Activity activity, String key){
        // Configure sign-in to request the user's ID, email address, and basic
        // profile. ID and basic profile are included in DEFAULT_SIGN_IN.
        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(key)
                .requestEmail()
                .build();

        mGoogleSignInClient = GoogleSignIn.getClient(activity, gso);
    }

    public static void release(){
        activity = null;
        mGoogleSignInClient=null;
    }

    public static void signOut(){
        mGoogleSignInClient.signOut();
    }

    public  static void signIn() {
        Intent signInIntent = mGoogleSignInClient.getSignInIntent();

    }

    public static GoogleSignInAccount getLastSignedInAccount(){
        return  GoogleSignIn.getLastSignedInAccount(activity);
    }
}
