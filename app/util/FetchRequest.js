'use strict';
import {
	NativeModules,
	NativeEventEmitter
}from 'react-native';

const TAG = "FetchRequest: ";
const NO_NETWORK = 1; // 获取网络数据失败
const FETCH_DATA_FAIL = 2; // 网络数据错误
const DATA_READY = 3; // 获取数据成功

/*
* path url前缀
* paramsMap 非公共参数 Map
* baseUrl 公共参数
* 返回请求 URL=buildURL
*/
var buildURL = (path,baseUrl,paramsMap) =>{
	path+=baseUrl;
  if(paramsMap){
    path+='&';
    let paramsArray=[];
    for(let key of paramsMap.keys()){
      paramsArray.push(key+'='+paramsMap.get(key));
    }
      path+=paramsArray.join('&');
  }
	console.log(TAG+"URL= "+path);
  return path;
}

var get=function(path,baseUrl,params){
  let url=buildURL(path,baseUrl,params);
  var promise=new Promise((resolve,reject)=>{
  var headers=new Headers();
  headers.append('Accept','application/json');
  headers.append('Content-Type','application/json');
  var init = {
    method:'GET',
    headers:headers
    };
  fetch(url,init)
	.then((response)=>{
    if(response.ok){
      return response.json();
    }else{
      reject(NO_NETWORK)
    }
  })
	.then((jsonData)=>{
		if ((jsonData.code == 'A00000') && (jsonData.data != null)) {
			resolve(jsonData)
		} else {
			reject(FETCH_DATA_FAIL)
		}
	})
	.catch((error)=>{
		reject(FETCH_DATA_FAIL)
	})
});
  return promise;
}

var post=function(path,baseUrl,params){
  let url=buildURL(path,baseUrl,params);
  var promise=new Promise((resolve,reject)=>{
		var headers=new Headers();
	  headers.append('Accept','application/json');
	  headers.append('Content-Type','application/json');
	  var init = {
	    method:'POST',
	    headers:headers
	    };
	  fetch(url,init)
		.then((response)=>{
	    if(response.ok){
	      return response.json();
	    }else{
	      reject(NO_NETWORK)
	    }
	  })
		.then((jsonData)=>{
			if ((jsonData.code == 'A00000') && (jsonData.data != null)) {
				resolve(jsonData)
			} else {
				reject(FETCH_DATA_FAIL)
			}
		})
		.catch((error)=>{
			reject(FETCH_DATA_FAIL)
		})
	});
  return promise;
}
var getJsonData=function(path,baseUrl,params){
  let url=buildURL(path,baseUrl,params);
  var promise=new Promise((resolve,reject)=>{
  var headers=new Headers();
  headers.append('Accept','application/json');
  headers.append('Content-Type','application/json');
  var init = {
    method:'GET',
    headers:headers
    };
  fetch(url,init)
	.then((response)=>{
    if(response.ok){
      return response.json();
    }else{
      reject(NO_NETWORK)
    }
  })
	.then((jsonData)=>{
		resolve(jsonData)
	})
	.catch((error)=>{
		reject(FETCH_DATA_FAIL)
	})
});
  return promise;
}
export {
	NO_NETWORK,
	FETCH_DATA_FAIL,
	DATA_READY,
  get,
	getJsonData,
  post,
  buildURL,
};
