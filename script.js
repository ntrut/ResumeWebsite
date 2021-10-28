function getCatPicture()
{
        var image = document.getElementById('pic')
        data = getTags();

        //randomly select a tag

        if(data === "")
        {
            //random cat picture
            image.src = "https://cataas.com/cat"
        }
        else
        {
            //choose a random tag from tags and display that cat picture
            var random = Math.floor((Math.random() * data.length - 1) + 0)
            image.src = "https://cataas.com/cat" + "/" + data[random]
        }

        
}

function setJokes()
{
    var quote = document.getElementById('quote')
    var text = getJokes()["joke"]

    if(text === "")
    {
        quote.innerHTML = "No Joke Found!"
    }
    else
    {
        quote.innerHTML = text
    }
}

function setInspirationalQuote()
{
    var quote = document.getElementById('inspirationalquote')
    var data = getInspirationalQuote()

    if(data === "")
    {
        quote.innerHTML = "Not Found"
    }
    else
    {
        var random = Math.floor((Math.random() * data.length - 1) + 0)
        quote.innerHTML = data[random]["text"]
    }
   
}

/*Get all of the tags from the get*/ 
function getTags()
{

    var data = new XMLHttpRequest();
    data.open( "GET", "https://cataas.com/api/tags", false ); // false for synchronous request
    data.send( null );
    
    if(data.readyState === XMLHttpRequest.DONE)
    {
        if(data.status != 200)
        {
            return ""
        }
        const hel = JSON.parse(data.responseText)
        
        return hel
    }
    else
    {
        return ""
    }
        
    

}

/*Get all of the tags from the get*/ 
function getJokes()
{

    var data = new XMLHttpRequest();
    data.open( "GET", "https://v2.jokeapi.dev/joke/Programming?type=single", false ); // false for synchronous request
    data.send( null );
    
    if(data.readyState === XMLHttpRequest.DONE)
    {
        if(data.status != 200)
        {
            return ""
        }
        const hel = JSON.parse(data.responseText)
        
        return hel
    }
    
    return ""
    
}


function getInspirationalQuote()
{

    var data = new XMLHttpRequest();
    data.open( "GET", "https://type.fit/api/quotes", false ); // false for synchronous request
    data.send(null);
    
    if(data.readyState === XMLHttpRequest.DONE)
    {
        if(data.status != 200)
        {
            return ""
        }
        const hel = JSON.parse(data.responseText)
        
        return hel
    }
    
    return ""
}




