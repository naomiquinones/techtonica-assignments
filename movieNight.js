
const movieNight = (theGroup) => {
    const add = (name) => theGroup.push(name);
    const drop = (name) => theGroup.splice(theGroup.indexOf(name));
    const d = theGroup.includes('David');
    const m = theGroup.includes('Ming');
    const p = theGroup.includes('Priya');
    const a = theGroup.includes('Alex');
    const b = theGroup.includes('Breanna');
        // Priya will attend only if Ming goes.
        // David loves popcorn and will go to the movies under any circumstance
        // Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
        // Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
        // Breanna loves to be around people and will only go if there are at least 2 others going

    // console.log(theGroup.includes('David'))

    if ( d ) {
        if ( !a ) {
            add('Alex');
        }
        if ( m ) {
            drop('Ming');
        }
    }
    if ( m && (!p) ) {
        add('Priya');
    }
    if ( p && (!m) ) {
        add('Ming');
    }
    if ( a && !d) {
        drop('Alex');
    }
    if ( theGroup.length >= 2 && !b) {
        add('Breanna');
    }

    return theGroup;
}


document.write( 
    "['Priya', 'David', 'Alex'] = ['David', 'Alex', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['Priya', 'David', 'Alex']),
    "</span><br><br>['Priya', 'David', 'Ming'] = ['David', 'Alex', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['Priya', 'David', 'Ming']),
    "</span><br><br>['Priya', 'Breanna', 'Alex'] = ['Priya', 'Ming', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['Priya', 'Breanna', 'Alex']),
    "</span><br><br>['Priya', 'Breanna', 'Ming'] = ['Priya', 'Ming', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['Priya', 'Breanna', 'Ming']),
    "</span><br><br>['Breanna', 'Alex', 'Ming'] = ['Priya', 'Ming', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['Breanna', 'Alex', 'Ming']),
    "</span><br><br>['David', 'Breanna', 'Alex'] = ['David', 'Alex', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['David', 'Breanna', 'Alex']),
    "</span><br><br>['David', 'Alex', 'Ming'] = ['David', 'Alex', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['David', 'Alex', 'Ming']),
    "</span><br><br>['Alex', 'Ming', 'Priya'] = ['Priya', 'Ming', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['Alex', 'Ming', 'Priya']),
    "</span><br><br>['David', 'Breanna', 'Ming'] = ['David', 'Alex', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>",
    movieNight(['David', 'Breanna', 'Ming']),
    "</span><br><br>['Priya', 'David', 'Breanna'] = ['David', 'Alex', 'Breanna'] &nbsp;&nbsp;<span style='color:red'>", 
    movieNight(['Priya', 'David', 'Breanna']),"</span>"  
);
/* 


*/