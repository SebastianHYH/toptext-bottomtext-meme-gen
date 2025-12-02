const topTexts = [
    "WHEN YOU REALIZE",
    "ONE DOES NOT SIMPLY",
    "SUCCESS KID",
    "Distracted Boyfriend",
    "This is Fine",
    "Change My Mind",
    "",
    "WE HAVE MCDONALDS AT HOME",
    "FORTNITE",
    "GENSHIN IMPACT",
    "VALORANT"
];

const bottomTexts = [
    "IT'S FRIDAY",
    "WALK INTO MORDOR",
    "I MADE IT",
    "LOOKING AT OTHER GIRLS",
    "HOUSE IS ON FIRE",
    "NO",
    "",
    "MCDONALDS AT HOME:",
    "BATTLE ROYALE"
];

async function generateMeme() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        if (data.success) {
            const memes = data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];
            // randomMeme = resizeImage(randomMeme);
            document.getElementById('meme-image').src = randomMeme.url;
        }
    } catch (error) {
        console.error('Error fetching meme:', error);
    }
    
    const topText = topTexts[Math.floor(Math.random() * topTexts.length)];
    const bottomText = bottomTexts[Math.floor(Math.random() * bottomTexts.length)];
    
    document.getElementById('top-text').textContent = topText;
    document.getElementById('bottom-text').textContent = bottomText;
}

function resizeImage(meme) {
    // Implement resizing logic if needed
    return meme;
}