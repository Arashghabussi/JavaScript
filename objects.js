function User(ip, location, level, label){
    this.ip = ip;
    this.location = location;
    this.level = level;
    this.label = label;
    // can be called
    this.levelUp = function(){
        return(this.level++);
    };
}

var users = [
    new User(`10.20.30:27015`, `USA`, 100, `admin`),
    new User(`10.20.30:27016`, `UK`, 0, `user`)
];

console.log(users[0]);