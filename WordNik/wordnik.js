$(document).ready(function(){
let backgroundPage = chrome.extension.getBackgroundPage();
	let word = backgroundPage.word;
	console.log(word);
	$('#selectedWord').html(word);
	var url = "https://api.wordnik.com/v4/word.json/"+word+"/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=YOURAPIKEY"
	$.ajax({
      url: url,
      type: "GET",
      datatype: "json",
      success: function(data){
      		if(data[0].text!=""){
      			$('#definition').html(data[0].text);
      		}
      		else{
      			$('#definition').html("Definition Not Found!!!");
      		}
      },
      error: function(e){
      	console.log(e);
      }
  });
    
});