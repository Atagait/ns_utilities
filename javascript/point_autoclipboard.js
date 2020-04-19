$(".approve").click(function(){
    //Create a variable with the nation's URL
    var NationLink = "https://www.nationstates.net"+$(".mediumname")[0].attributes["href"].value
    //Copy the nation URL to the clipboard
    navigator.clipboard.writeText(NationLink)
})
