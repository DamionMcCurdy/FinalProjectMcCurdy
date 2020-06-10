//window.onload=function(){
    document.addEventListener('DOMContentLoaded', function(){
        // we code here
      axios.get("https://www.marines.mil/").then(function(result){
        console.log(result.data)
 
        })
      })