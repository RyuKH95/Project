//공통
function Tawk_API() {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/61d28d92c82c976b71c47a83/1fof7i1cs';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
}

//1.html
function reference() {
    const referenceList = {
        "생활코딩" : "https://opentutorials.org/course/1" //첫번째방법
    }
    referenceList['노마드코더']="https://nomadcoders.co/"; //두번째방법
    referenceList.unsplash="https://unsplash.com/"; //세번째방법
    
    referenceList.showAll = function() {
        for(const key in referenceList) {
            if(key === 'showAll')
                continue;
            else
                document.write('<li>', key, ' - <a href="', referenceList.key, '" target="_blank">', referenceList[key], '</a></li>');
        }
    }

    referenceList.showAll();
}


// 3.html
const Body = {
    setColor: function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
const Links = {
    setColor: function(color) {
        // const links = document.querySelectorAll('a');
        // for(let i=0; i<links.length; i++) {
        //     links[i].style.color=color;
        // }
        $('a').css('color', color);
    }
}
function Toggle(self) {
    if(self.value=='Day') {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='Night';

        Links.setColor('blue');
    }
    else {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='Day';

        Links.setColor('powderblue');
    }
}