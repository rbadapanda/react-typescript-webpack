console.log('*** Fetching data via --> top level await...');

const developer = await fetch("https://reqres.in/api/users/2");
const topLevelAsyncData = await developer.json();

console.log('*** Module topLevelAwait Exporting:', topLevelAsyncData);

export {topLevelAsyncData};