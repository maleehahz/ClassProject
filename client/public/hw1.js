// function done(){
// 	document.getElementById("AJAXButton").addEventListener("click", makeRequest)
// }

function getDate(){
	return document.getElementById('dateInput').value
}


function getRequest(){
	const apiKey = "api_key=pDLMHwLvf4Bpe9Ubr18UhZLbatbWUMQ761z2dYXx"
	let date = getDate()
	date = (date !== "")?`date=${date}`:""

	return "https://api.nasa.gov/planetary/apod?" + apiKey + "&" + date.toString()
}

function makeRequest(){

	const reqUrl = getRequest()
	let httpRequest = new XMLHttpRequest()
	httpRequest.onreadystatechange = handleRequest;
	httpRequest.open("GET", reqUrl)
	httpRequest.send()

	function handleRequest(){
		if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
			let data = JSON.parse(httpRequest.responseText)
			const {url, copyright, date, explanation, hurl, media_type, service_version, title} = data
			document.getElementById('imgHolder').src = url
			document.getElementById('desc').textContent = explanation
		}

	}

}

function openTab(tabName){	

	var content = document.getElementsByClassName("content")
	for (var i = 0; i < content.length; i++) {
		if (content[i].id === tabName) {
			content[i].style.display = "block"
			content[i].style.color = "white"
			content[i].style.background = "#bfd5e2ff"
		} else {
			content[i].style.display = "none"
			content[i].style.color = "white"
		}
	}
}

// document.getElementById("default").click();