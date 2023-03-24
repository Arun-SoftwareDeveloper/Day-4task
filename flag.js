var api=new XMLHttpRequest();
api.open("Get","https://restcountries.com/v3.1/all");
api.responseType="json";
api.send();
api.onload=function(){
    var responseobj=api.response;
    console.log(responseobj);
    for(var i=0;i<responseobj.length;i++){
      console.log(responseobj[i].flag);
      console.log(responseobj[i].name.common);
    }
  
}
