// 1. Import the all three objects (Song, Musician, Playlist) that you created in the MusicData.js module file
const myPlaylist = {
    getInfo(){Playlist},
   
    
        song1: {
            title: "House Music",
            artist: {
                name: "Slauson Malone 1",
            },
            album: "EXCELSIOR",
            Description: "This song is trippy and interesting.",
                Musician: {
                     name: "Jasper Marsalis",
                     instrument: "Guitar, Computer",
                     genre: "Electronic",
                     Description: "He makes music combing MAX msp and ableton and a guiatar to make wierd things.",
                },
            },

        song2: {
             title: "Village Ghetto Land",
             artist: {
                name: "Stevie Wonder"
             },
                album: "Songs In The Key of Life",
                Description: "This song is very calming and confusing but enjoyable at the same time.",
                Musician: {
                     name: "Stevland Morris",
                     instrument: "Everything",
                     genre: "Funk",
                     Description: "He is blind and can play all instruments",
                    },
                },

        song3: {
            title: "Marie",
             artist: {
                name: "Mach Hommy",
             },
                album: "Pray For Haiti",
                Description: "This is a very nice hiphop beat with good raps to go with it.",
                Musician: {
                     name: "Mach Hommy",
                     instrument: "Rap",
                     genre: "HipHop",
                     Description: "He makes empowering hiphop music.",
                    },
        },
    };





// 2. declare a new constant and assign to it a new musician object to describe the musician for the first song.



// 3. declare a new constant and assign to it a new musician object to describe the musician for the second song.




// 4. declare a new constant and assign to it a new musician object to describe the musician for the third song.


// 5. declare a new constant and assign to it a new Song object to describe the first song
// (make sure to use the Musician object from step 2 in creating this Song object



// 6. declare a new constant and assign to it a new Song object to describe the second song
// (make sure to use the Musician object from step 3 in creating this Song object


// 7. declare a new constant and assign to it a new Song object to describe the third song
// (make sure to use the Musician object from step 4 in creating this Song object


// 8. declare a new constant called myPlaylist and assign to it a new Playlist object and make sure to use the three Song objects
//from steps 5, 6, & 7 when creating it.
//It must be called myPlaylist
//It must be called myPlaylist


//9. call the .getInfo() method on myPlaylist


//DO NOT EDIT BELOW THIS LINE
//the code below here will insert the Playlist data into the webpage.
const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;
