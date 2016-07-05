function ajax(url,fnSucc,fnFaild){
  if(window.XMLHttpRequest){
  		var oAjax=new XMLHttpRequest();
  	}
  	else
  	{
      var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
  	}
  	oAjax.open('GET',url,true);
  	oAjax.send();
  	oAjax.onreadystatechange=function(){
  		if(oAjax.readyState==4){
  			if(oAjax.status==200){
          fnSucc(oAjax.responseText);
  				//alert('成功：'+oAjax.responseText);
  			}
  			else
  			{
          if(fnFaild){
              fnFailed(oAjax.status);
          }
  				//alert('失败：'+oAjax.status);
  			}
  		}
  	}
  }