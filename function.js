const switchs = document.getElementsByClassName('sect')
let strike = document.getElementsByClassName('delete')  
const all = document.querySelector('.all')
const addlist = document.getElementsByClassName('add')
const input = document.getElementsByClassName('hidden')
const err = document.getElementsByClassName('error')
const editContent = document.querySelector('.editable')
const deleteContent = document.querySelector('.deleteli')
const sort = document.querySelector('.sort')
const Buttons = document.querySelectorAll('.Buttons span')


let addSelect;
let section;
inputItems = input.length;
items = switchs.length;
buttonsItems = Buttons.length;
strikeThrough = strike.length;



//---------------------------------------------------------- Set all Opacity to 1 Function
all.addEventListener('click', function (){
  for (var i = 0; i < items; i++) {
    switchs[i].classList.remove('active')
    switchs[i].classList.toggle('active')
    addlist[i].classList.remove('active');
    input[i].classList.remove('active')
    switchs[i].style.cursor = "pointer";
    }
  }
); 


//---------------------------------------------------------- Load Function
window.addEventListener("load", () => {
  sectOpacity(0)
  addList(0)
});

//---------------------------------------------------------- Switching Sections Function

switchs[0].addEventListener('click', function (){
    sectOpacity(0)
    addList(0)
  })

switchs[1].addEventListener('click', function (){
    sectOpacity(1)
    addList(1)
  })
switchs[2].addEventListener('click', function (){
    sectOpacity(2)
    addList(2)
  })
switchs[3].addEventListener('click', function (){
    sectOpacity(3)
    addList(3)
  })

  //---------------------------------------------------------- Adding List Function

  function addList(setList){
    addlist[setList].addEventListener('click',  function (){
      input[setList].classList.add('active')
      listHidden(setList)
    })
  }

  //---------------------------------------------------------- Input Function

function listHidden(addSelect){
  

  $(input[addSelect]).keyup(function (e) {
    if (e.keyCode === 13) {
      var trims = input[addSelect].value
      var trimmed = trims.trim();

      if (trimmed === ""){
        err[addSelect].classList.add('active')
        err[addSelect].innerHTML = 'Please input something.'

        setTimeout(() => err[addSelect].innerHTML = '', 2999);

      }


      else{
       const licreate = document.createElement('li')
       licreate.appendChild(document.createTextNode(input[addSelect].value));
       document.getElementsByClassName("listss")[addSelect].appendChild(licreate);
       input[addSelect].classList.remove('active')
       input[addSelect].value = '' 
       input[addSelect].value.reset()   
      }
    }
  });

}

//---------------------------------------------------------- Removing all active status in it
//                                                           when switching section Function  

function sectOpacity(section) {
  for (var i = 0; i < items; i++) {
    if(i === section){
      switchs[section].classList.add('active');
      addlist[section].classList.add('active');
      switchs[section].style.cursor = "auto";
      continue;
    }
    switchs[i].classList.remove('active')
    addlist[i].classList.remove('active');  
    input[i].classList.remove('active')
    switchs[i].style.cursor = "pointer";
  }

}

// ($(switchs[0]).is('.active')) { alert('Its active!'); }




//
//---------------------------------------------------------- Buttons Function
//


//---------------------------------------------------------- Delete List Function

deleteContent.addEventListener('click', function (){
  removeActiveButtons(0)

});


if (deleteContent.classList.contains('active')){
  $('li').click(function() {
    this.classList.toggle('delete')
  });
}

else{
  $('li').click(function() {
    this.classList.remove('delete')
  });
}


//---------------------------------------------------------- Sort List Function

sort.addEventListener('click', function (){
  removeActiveButtons(1)
});


//---------------------------------------------------------- Edit Content Function




  editContent.addEventListener('click', function (){
    removeActiveButtons(2)

    if (editContent.classList.contains('active')){
    $('li').click(function() {
      this.contentEditable=true
      $(this).on('keypress blur', function(e) {
        if(e.keyCode&&e.keyCode==13||e.type=='blur'){
        this.contentEditable=false
        return false
        }
      });
    });
  }

  else{
    $('li').click(function() {
      this.contentEditable=false
    });
  }

  });

//---------------------------------------------------------- Remove Active Status Function


function removeActiveButtons(buttonNumber) {
  for (var i = 0; i < buttonsItems; i++) {
    if(i === buttonNumber){
      Buttons[buttonNumber].classList.toggle("active");
      continue;
    }
    Buttons[i].classList.remove("active");
  }
 
}