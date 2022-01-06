function reference() {
    document.write('<ul>');
    document.write('참고')
    const referenceList = {}
    referenceList['생활코딩']="https://opentutorials.org/course/1";
    referenceList['노마드코더']="https://nomadcoders.co/";
    referenceList['unsplash']="https://unsplash.com/";
    for(const key in referenceList) {
        document.write('<li>');
        document.write(key, ' - <a href="', referenceList[key],'" target="_blank">', referenceList[key], '</a>');
        document.write('</li>');
    }
    document.write('</ul');
}

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

// 3.html
function Toggle(t) {
    const target = document.querySelector('body').style;
    const links = document.querySelectorAll('a');
    if(t.value=='Day') {
        target.backgroundColor='white';
        target.color='black';
        t.value='Night';
        for(let i=0; i<links.length; i++) {
            links[i].style.color='blue';
        }
    }
    else {
        target.backgroundColor='black';
        target.color='white';
        t.value='Day';
        for(let i=0; i<links.length; i++) {
            links[i].style.color='powderblue';
        }
    }
}