console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title1, artist1, yearPublished1){
    title1 = {
        title: title1,
        artist: artist1,
        yearPublished: yearPublished1
    }
    collection.push(title1);
    return title1;
}
function showCollection(array){
    console.log('The number of albums in this collection: ', array.length);
    for(let i=0; i<array.length; i++){
        console.log(array[ i ].title, 'by', array[ i ].artist, 'published in', array[ i ].yearPublished );
    }
}
function findByArtist(artist2, array1){
    let artistAlbums = [];
    for(let i=0; i<array1.length; i++){
        if(array1[ i ].artist == artist2){
            artistAlbums.push(array1[ i ]);
        }
    return console.log(artistAlbums);
    }
}
console.log('I added this album to the playlist: ', addToCollection('Recovery', 'Eminem', 2010));
console.log('I added this album to the playlist: ', addToCollection('Reputation', 'Taylor Swift', 2017));
console.log('I added this album to the playlist: ', addToCollection('The Wall', 'Pink Floyd', 1980));
console.log('I added this album to the playlist: ', addToCollection('Confessions', 'Usher', 2004));
console.log('I added this album to the playlist: ', addToCollection('Fearless', 'Taylor Swift', 2009));
console.log('I added this album to the playlist: ', addToCollection('21', 'Adele', 2011));
console.log('This is my collection of albums: ', collection);
showCollection(collection);
console.log('finding an artist', findByArtist('Taylor Swift', collection));
