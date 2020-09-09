const play = document.getElementById('play');
const music = document.querySelector('audio');
const image = document.querySelector('img');

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const author = document.querySelector('.author');
const song = document.querySelector('.song');

const songs = [{
        name: "1",
        song: "lotus",
        author: "ayush"
    },
    {
        name: "2",
        song: "fitrat",
        author: "vikas"
    },
    {
        name: "3",
        song: "aarju",
        author: "vivek"
    }
]

let isPlaying = false;
//for play feature
const playmusic = () => {
    music.play();
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause');
    image.classList.add('anime')

};
//for pause feature
const pausemusic = () => {
    music.pause();
    isPlaying = false;
    play.classList.replace('fa-pause', 'fa-play');
    image.classList.remove('anime')

};
play.addEventListener('click', () => {

    isPlaying ? pausemusic() : playmusic()

});
songIndex = 1;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;

    loadSong(songs[songIndex]);
    playmusic();
};
const prevSong = () => {
    songIndex = (songs.length + songIndex - 1) % songs.length;
    loadSong(songs[songIndex]);
    playmusic();
}
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)
//changing the music data
const loadSong = (songs) => {
    song.textContent = songs.song;
    author.textContent = songs.author;
    music.src = "songs/" + songs.name + ".mp3";
    image.src = "images/" + songs.name + ".jpg";
}