/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "Break",
    "Esto Esta Rico",
    "Frontline",
    "In The End",
];


var artist = [
    "Three Days Grace",
    "Bad Bunny",
    "Pillar",
    "Linkin Park",
];


var images_links = [
    "https://upload.wikimedia.org/wikipedia/en/4/41/Three_days_grace_break.png",
    "https://i.scdn.co/image/d858eb4c9d939d4a9a2f70cd573d0426ea21a342",
    "https://i.ytimg.com/vi/r6WVb6rXnkE/hqdefault.jpg",
    "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/linkinpark-hero-156670900.jpg?itok=o5e35W6u",
];



var links = [
    "https://www.youtube.com/watch?v=_4VCpTZye10",
    "https://www.youtube.com/watch?v=--BHuKeveg4",
    "https://www.youtube.com/watch?v=jTEkfsGnRTA",
    "https://www.youtube.com/watch?v=eVTXPUF4Oz4",
];


var song_length = [
    212,
    281,
    192,
    217,
];

function displaySongInfo() {
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>");
    });


    artist.forEach(function(artists) {
        $("#artists").append("<p>" + artists + "</p>");
    });


    images_links.forEach(function(image) {
        $("#images").append("<img src='" + image + "'> </img>");
    });


    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'>Watch Youtube Video! </a>");
    });


    song_length.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>");
    });


}


function emptySongInfo() {
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo() {
    // BELOW write the code to add new items to each of the arrays.
    $("#add").click(function() {
        var newSong = $("#song").val();
        var songLength2 = $("#length").val();
        var songLink = $("#link").val();
        var newArtist = $("#artist").val();
        var newImage = $("#image").val();

        songs.push(newSong);
        song_length.push(songLength2);
        links.push(songLink);
        artist.push(newArtist);
        images_links.push(newImage);


        emptySongInfo();
        displaySongInfo();

    });


}
addSongInfo();
displaySongInfo();
