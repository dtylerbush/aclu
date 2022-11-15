let issueSelect = document.getElementsByClassName("issue-desc-item");



document.addEventListener('DOMContentLoaded', function(event) {

  document.querySelector("#capital").addEventListener('click',function(e){
    e.preventDefault();
    let issueView = document.querySelectorAll('#capital');

    for(let n=0;n<issueView.length;n++){
        issueView[n].classList.toggle('issue-desc-featured');
    }

});


//Advanced Version
// for (let i = 0; i < truliaCards.length; i++){
//     truliaCards[i].onclick = function(){
//         for (var q = 0; q < truliaCards.length; q++){
//             truliaCards[q].classList.remove('trulia-featured-grid-item');
//         } 
//         this.classList.add('trulia-featured-grid-item');
//     };
// }

// Loop through all the buttons
for (var i = 0; i < issueSelect.length; i++){
    
  // Add a click listener on each button
  issueSelect[i].addEventListener('click',function(){
      
      // Remove the featured class
      for (var q = 0; q < issueSelect.length; q++){
        issueSelect[q].classList.remove('issue-desc-featured');
      } 

      // Add the featured class on the one clicked on
      this.classList.add('issue-desc-featured');
  });
}

  });  


  function issueDesc ( ButtonID, SelectorID ) {
    var issueDescButton = document.querySelector(ButtonID);
    var issueDescSelector = document.querySelector(SelectorID);
    issueDescButton.addEventListener("click", function(){
    issueDescSelector.classList.toggle("issue-desc-featured");
    });
    }
    issue-desc-featured ( "#capitalButton" , "#capitalDesc" );