const homebutton = document.getElementById("homebutton");
const artworksbutton = document.getElementById("artworksbutton");
const socialsbutton = document.getElementById("socialsbutton");
const blogsbutton = document.getElementById("blogsbutton");

const homecontent = document.querySelectorAll("#homepage, #hometitle");
const artworkscontent = document.querySelectorAll("#artworkspage, #artworkstitle");
const socialscontent = document.querySelectorAll("#socialspage, #socialstitle");
const blogscontent = document.querySelectorAll("#blogspage, #blogstitle");

function showContent(targetGroup) {
    const allButtons = [homecontent, artworkscontent, socialscontent, blogscontent];
    
    allButtons.forEach(group => {
        if (group === targetGroup) {
            group.forEach(remove => remove.classList.remove("hidden"));
        } else {
            group.forEach(add => add.classList.add("hidden"));
        }
    });
}

homebutton.addEventListener('click', () => showContent(homecontent));
artworksbutton.addEventListener('click', () => showContent(artworkscontent));
socialsbutton.addEventListener('click', () => showContent(socialscontent));
blogsbutton.addEventListener('click', () => showContent(blogscontent));