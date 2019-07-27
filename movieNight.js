const movieNight = (startingGroup) => {
    let going = [];
    const add = name => going.push(name);
    
    // don't need drop subfxn anymore but JIC decide to modify original array again, will leave for now
    // const drop = (name) => going.splice(startingGroup.indexOf(name));

    const yes = name => startingGroup.includes(name);
    const d = yes('David');
    const m = yes('Ming');
    const p = yes('Priya');
    const a = yes('Alex');
    const b = yes('Breanna');

    // David loves popcorn and will go to the movies under any circumstance
    // Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
    // if David, add Alex to final group
    // if Alex and !David, don't add (i.e. do nothing)
    if (d) {
        add('David');
        add('Alex');
    }
    // Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
    // if Ming && David, don't add Ming to final group
    // i.e. if Ming && !David, add Ming to final group
    // if Priya, add Ming
    if ((p || m) && !d) {
        add('Ming');
    }
    // if (p && !d && !m) {
    //     add('Ming');
    // }
    // Priya will attend only if Ming goes.
    // if Ming and !Priya, add Priya
    if ((p && !d) || (m && !p && !d)) {
        add('Priya');
    }
    // Breanna loves to be around people and will only go if there are at least 2 others going
    // if there's 2 or more people, add Breanna
    if (going.length >= 2) {
        add('Breanna');
    }

    return going;
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
    movieNight(['Priya', 'David', 'Breanna']), "</span>"
);
/*


*/