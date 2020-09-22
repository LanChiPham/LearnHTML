console.log("hello")
function addprevent(event) {
    event.preventDefault();
  
    let url = document.getElementById("imgurl").value;
    let img= <img width="250" height="400"alt="picture" src="+ url +" class="img-fluid float-left"/>;
    document.getElementById("mycol").innerHTML += img;
  }
  

  function checkLinks( code, searchString )
{

    var url;

    // We need to create an HTML document element so we can use javascript dom functions on it.
    var doc = document.createElement("html");
    doc.innerHTML = code; // put the code into the document

    // Get all  links in the code
    var links = doc.getElementsByTagName("a")

    // Loop over all links
    for (var i=0; i<links.length; i++) {
        // Check if the search string (e.g "google.com") is found in the href of the link
        if(  links[i].getAttribute("href").indexOf(searchString) != -1 ) {
            // Set it to the return value
            url = links[i].getAttribute("href");
            // stop looping
            break;
        }
    }

    return url;
}