const movieNight = (startingGroup) => {
    let groupThatGoes = [];
    
        // Priya will attend only if Ming goes.
        // David loves popcorn and will go to the movies under any circumstance
        // Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
        // Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
        // Breanna loves to be around people and will only go if there are at least 2 others going

    // console.log(startingGroup.includes('David'))

    if ( startingGroup.includes('Ming') ) {
        groupThatGoes.push('Ming');
        groupThatGoes.push('Priya');
    }
    if ( startingGroup.includes('David') && (! startingGroup.includes('Alex'))) {
        groupThatGoes.push('Alex');
        // groupThatGoes.splice(groupThatGoes.indexOf('Ming'),1);
        // groupThatGoes.splice(groupThatGoes.indexOf('Priya'),1)
    }
    if ( ! startingGroup.includes('David') && startingGroup.includes('Priya') ) {
        groupThatGoes.push('Ming')
    }
    if ( groupThatGoes.length >= 2 ) {
        groupThatGoes.push('Breanna');
    }

    return groupThatGoes;
}

console.log( movieNight(['Priya', 'David', 'Alex']) );
/* 

['Priya', 'David', 'Alex'] = ['David', 'Alex', 'Breanna']
['Priya', 'David', 'Ming'] = ['David', 'Alex', 'Breanna']
['Priya', 'Breanna', 'Alex'] = ['Priya', 'Ming', 'Breanna']
['Priya', 'Breanna', 'Ming'] = ['Priya', 'Ming', 'Breanna']
['Breanna', 'Alex', 'Ming'] = ['Priya', 'Ming', 'Breanna']
['David', 'Breanna', 'Alex'] = ['David', 'Alex', 'Breanna']
['David', 'Alex', 'Ming'] = ['David', 'Alex', 'Breanna']
['Alex', 'Ming', 'Priya'] = ['Priya', 'Ming', 'Breanna']
['David', 'Breanna', 'Ming'] = ['David', 'Alex', 'Breanna']
['Priya', 'David', 'Breanna'] = ['David', 'Alex', 'Breanna']

*/