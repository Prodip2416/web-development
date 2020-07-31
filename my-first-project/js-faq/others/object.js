var school = {
    name : 'Kaitora Sarkari Prothomik Biadaloy',
    location : 'Manikgonj, Dhaka, Bangladesh',
    established : '1933',
    displayInfo : function(){
        console.log(`${school.name} was established in ${school.established} at ${school.location}`);
    }
}

console.log(school.established);
school.displayInfo();