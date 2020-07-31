function welcomeGuest(name, welcomeFunction) {
    welcomeFunction(name);
}
function goodMorning(name) {
    console.log("Good Morning " + name);
}
function goodEvening(name) {
    console.log("Good Evening " + name);
}

welcomeGuest('Prodip', goodEvening);
welcomeGuest('Anik', goodMorning);
