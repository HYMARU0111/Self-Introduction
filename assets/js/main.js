$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

const abilitiesLiEffect = (document) => {
    const divSkills = document.querySelector("div.skills");
    const skillArr = divSkills.querySelectorAll("div.skills-box");
    skillArr.forEach((div) => {
      const img = div.querySelector("img");
      div.addEventListener("mouseenter", function () {
        img.style.height = "10rem";
      });
      div.addEventListener("mouseleave", function () {
        img.style.height = "8rem";
      });
    });
  };
  
  abilitiesLiEffect(document);


(function(window, document){
    'use strict';

    consoleText([
        'a web developer.',
        'a hardworker.',
        'a challenger.',
        'a person of action.'
    ], 'text');

    var $stackList = document.querySelectorAll('div.stacks');
    console.log($stackList);
    $stackList.forEach(li =>{
        li.addEventListener('mouseenter', function (e) { e.target.querySelector('h3.stack-title').classList.add('show')});
        li.addEventListener('mouseenter', function (e) { e.target.querySelector('h3.stack-title').classList.remove('show')});
        })
}) (window, document)

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#1a7fe4'];
    var visible = true;
    var cons = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {
        
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            visible = false;
        } else {
            visible = true;
        }
    }, 400)
    
}

