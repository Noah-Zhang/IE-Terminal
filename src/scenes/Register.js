import React, { Component, PropTypes } from 'react';
import  {  View, Text ,StyleSheet,TextInput, Image,TouchableWithoutFeedback} from 'react-native';
import { Button, Subheader, COLOR } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Register extends React.Component {
    register(){
        var username = this.refs.username._lastNativeText;
        var pwd = this.refs.pwd._lastNativeText;
        var pwdCheck = this.refs.pwdCheck._lastNativeText;
        this.refs.username.clear();
        this.refs.pwd.clear();
        this.refs.pwdCheck.clear();
        if (pwd == pwdCheck) {
          fetch('http://10.10.10.124:3000/register', {
            method: 'POST',
            headers: {
            },
            body: JSON.stringify({
              username: username,
              pwd: pwd,
            })
          }).then(()=>{console.log('sucess')});
        }else{
          console.log('密码输入不符');
        }
        const navigator = this.props.navigator;
        navigator.to('login');
    }
    render() {
        
        return (
            <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                <Image
                  style={styles.style_image}
                  source={require('../img/avatars/1.png')}/>
                <TextInput style={styles.style_user_input}
                  placeholder='请输入用户名'
                  numberOfLines={1}
                  ref='username'
                  autoFocus={true}
                  underlineColorAndroid={'transparent'}
                  textAlign='center'/>
                <View
                     style={{height:1,backgroundColor:'#f4f4f4'}}
                 />
                 <TextInput style={styles.style_pwd_input}
                   placeholder='请输入密码'
                   numberOfLines={1}
                   ref='pwd'
                   secureTextEntry={true}
                   textAlign='center'/>
                <TextInput style={styles.style_pwd_input}
                   placeholder='请再次输入密码'
                   numberOfLines={1}
                   ref='pwdCheck'
                   secureTextEntry={true}
                   textAlign='center'/>
  
                <TouchableWithoutFeedback onPress={() => this.register()}>  
                    <View style={styles.style_view_commit}>  
                        <Text style={{color:'#fff'}}>
                            注册
                        </Text> 
                    </View>  
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  style_image:{
    borderRadius:35,
    height:70,
    width:70,
    marginTop:40,
    alignSelf:'center',
  },
  style_user_input:{
      backgroundColor:'#fff',
      marginTop:10,
      height:35,
  },
   style_pwd_input:{
      backgroundColor:'#fff',
      height:35,
  },
   style_view_commit:{
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      height:35,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  style_view_unlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },
  style_view_register:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  }
});