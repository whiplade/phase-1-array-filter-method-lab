function findMatching(list, name){

    return list.filter(function (driverName){
        return driverName.toUpperCase() === name.toUpperCase();

    });
}

function fuzzyMatch(list, nameBegin){

    let fullName = nameBegin.length;
    return list.filter(function(driverName){
        return driverName.slice(0, fullName) === nameBegin;

    });

}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(list, name){

    return list.filter(function(driver){
        return driver[`name`].toLowerCase() === name.toLowerCase();

    });
  }