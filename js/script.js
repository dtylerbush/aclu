document.addEventListener("DOMContentLoaded", function() {

let imageFeatured = document.getElementsByClassName("featured-image");
let issueFeatured = document.getElementsByClassName("featured-issue");
let issueButton = document.getElementsByClassName("issue-button");

function displayIssue(e) {
    // get id of what i clicked on
    let theTopic = this.id;

    // loop through all images

    for (var i = 0; i < imageFeatured.length; i++){

        // if image has class show it / else hide it

        if (imageFeatured[i].classList.contains(theTopic)){
            imageFeatured[i].classList.remove('hidden');
        } else {
            imageFeatured[i].classList.add('hidden');
        }
    }

    // same thing / loop through all articles

    for (var i = 0; i < issueFeatured.length; i++){

        // if article has class show it / else hide it

        if (issueFeatured[i].classList.contains(theTopic)){
            issueFeatured[i].classList.remove('hidden');
        } else {
            issueFeatured[i].classList.add('hidden');
        }
    }

    // loop through all buttons

    for (var i = 0; i < issueButton.length; i++){

        // if button has class show it / else hide it

        if (issueButton[i].classList.contains(theTopic)){
            issueButton[i].classList.add('selected-button');
        } else {
            issueButton[i].classList.remove('selected-button');
        }
    }

}

// let theButton = document.getElementsByClassName("issue-button");

for (var i = 0; i < issueButton.length; i++){

 issueButton[i].addEventListener('click', displayIssue)
}



    // selectIssue ( "capitalButton" , "capitalDesc", "capital" );
    // selectIssue ( "civilButton" , "civilDesc", "civil" );
    // selectIssue ( "criminalButton" , "criminalDesc", "criminal" );


// loop to add .hidden to others .featured

//     for (var i = 0; i < issueFeatured.length; i++){
    
//         // Add a click listener on each button
//         issueFeatured[i].addEventListener('click',function(){
            
//             // add the hidden class
//             for (var q = 0; q < issueFeatured.length; q++){
//                 issueFeatured[q].classList.add('hidden');
//             }
    
//           // remove the hidden class on the one clicked on
//             this.classList.remove('hidden');
//     })
// }

// loop to add hidden to .featured-image


})
