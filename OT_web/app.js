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
// const Links = {
//     setColor: function(color) {
//         // const links = document.querySelectorAll('a');
//         // for(let i=0; i<links.length; i++) {
//         //     links[i].style.color=color;
//         // }
//         $('a').css('color', color);
//     }
// }
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