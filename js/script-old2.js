document.addEventListener("DOMContentLoaded", function() {

let issuesHidden = document.getElementsByClassName("hidden");
let issueFeatured = document.getElementsByClassName("featured");
let imageFeatured = document.getElementsByClassName("featured-image");



function selectIssue ( ButtonID, SelectorID, ImageID ) {
    var issueButton = document.getElementById(ButtonID);
    var issueDesc = document.getElementById(SelectorID);
    var issueImage = document.getElementById(ImageID);
    issueButton.addEventListener("click", function(){
    issueDesc.classList.remove("hidden");
    issueImage.classList.remove("hidden");
    })};

    selectIssue ( "capitalButton" , "capitalDesc", "capital" );
    selectIssue ( "civilButton" , "civilDesc", "civil" );
    selectIssue ( "criminalButton" , "criminalDesc", "criminal" );


// loop to add hidden to .featured

    for (var i = 0; i < issueFeatured.length; i++){
    
        // Add a click listener on each card
        issueFeatured[i].addEventListener('click',function(){
            
            // Remove the featured class
            for (var q = 0; q < issueFeatured.length; q++){
                issueFeatured[q].classList.add('hidden');
            }
    
          // Add the featured class on the one clicked on
            this.classList.remove('hidden');
    })
}

// loop to add hidden to .featured-image

for (var i = 0; i < imageFeatured.length; i++){
    
    // Add a click listener on each card
    imageFeatured[i].addEventListener('click',function(){
        
        // Remove the featured class
        for (var q = 0; q < imageFeatured.length; q++){
            imageFeatured[q].classList.add('hidden');
        }

      // Add the featured class on the one clicked on
        this.classList.remove('hidden');
})
}
})
