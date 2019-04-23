<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use Carbon\Carbon;

class UserController extends Controller
{
    //
    
    public static function login(Request $request){
        
        $username=$request->username;
        $password=$request->password;
        
        if(Auth::attempt['email'=>$username, 'password'=>$password]){
            //user login is valid and account is active
            
            if(Auth::user()->active==1){
                
                $response=[
                    'user_id'=>Auth::user()->id,
                    'username'=>Auth::user()->username,
                    'email'=>Auth::user()->email,
                    'phone'=>Auth::user()->phone,
                    'last_login'=>Auth::user()->last_login,
                    'status'=>true,
                    'message'=>'login successful'
                ];
                
                Auth::user()->last_login=Carbon::now();
                Auth::user()->save();
                
            }
            else{
                
                $response=[
                    'user_id'=>Auth::user()->id,
                    'username'=>Auth::user()->username,
                    'email'=>Auth::user()->email,
                    'phone'=>Auth::user()->phone,
                    'last_login'=>Auth::user()->last_login,
                    'status'=>false,
                    'message'=>'Unable to login, Account disabled'
                ];
                
            }
            
        }else{
            $response=[
                'status'=>false,
                'message'=>'Incorrect login credentials'
            ];
            
        }
        
        return $response;
        
    }
}
