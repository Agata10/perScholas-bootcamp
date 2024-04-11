/*
Objective: We are going to create an object Radio!
How to begin:
1. Create a variable called radio and assign as its value an object literal
2. Give it a property called stations and make the value an array of
station objects (at least 2)
3. Give each station object a property called name and songs. Name
should be a string and songs should be an array of song objects (at
least 3).
4. Song objects should have two properties: title and artist
5. Create a method on your radio object that changes the station
randomly (research Math.random and Math.floor)
6. When the station is changed, pick a song from that station. Example:
console.log("Now Playing:" + song.title + "by" + song.artist)
*/

let radio = {
  stations: [
    {
      name: "pop",
      songs: [
        { title: "Perfect", artist: "Ed Sheeran" },
        { title: "The Lazy Song", artist: "Bruno Mars" },
        { title: "Beautiful Things", artist: "Benson Boone" },
      ],
    },
    {
      name: "classical",
      songs: [
        { title: "Symphony No.5", artist: "Beethoven" },
        { title: "The four seasons", artist: "Vivaldi" },
        { title: "The Blue Danube", artist: "Johann Strauss II" },
      ],
    },
    {
      name: "techno",
      songs: [
        { title: "Radiation", artist: "Majlo" },
        { title: "Escape", artist: "Deadmau5" },
        { title: "In my mind", artist: "Amelie Lens" },
      ],
    },
  ],

  randomStation: function () {
    return this.stations[Math.floor(Math.random() * this.stations.length)];
  },

  pickARandomSong: function (randomStation) {
    const randomSong =
      randomStation.songs[
        Math.floor(Math.random() * randomStation.songs.length)
      ];

    console.log(
      "Now Playing: " + randomSong.title + " by " + randomSong.artist
    );
  },
};

console.log(radio.randomStation());
radio.pickARandomSong(radio.randomStation());
