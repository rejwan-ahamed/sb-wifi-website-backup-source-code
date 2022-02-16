const sharebutton = document.querySelector('button');


const title = window.document.title;
const url = window.document.location.href;

sharebutton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: `${title}`,
            url: `${url}`,
            

        }).then(() => {
            console.log('Thanks for sharing');
        } )
    } else {
        console.log('Error');
    }

})