// oop
/*
dvd player
-----------------
height
weight
width
color

play
fast forward
rewind
pause


DVD
------
movie length
image
size
\



////classes



*/ 

console.log(`Classes
each class should do 1 thing
-----------------------------------`)


class Student {
    constructor(firstName,lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce(){
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber} `);
    }

}

let student1 = new Student('Camille','West', '4087281977', 'A+');
let student2 = new Student('Sheyla', 'De Paz', '7027937636', 'C+');

student1.introduce();
student2.introduce();

console.log(`Inheritance
-------------------------------------`)
class NotificationSender {
    constructor(status){
        this.status = status;
    }
    
    sendNotification(noti){
        console.log('sending: ' + noti);
    }

    findUsersWithStatus(status){
        let users = getUsers(status);
        return users;
    }
}

class Promo extends NotificationSender {
    constructor(status){
        super(status);

    }
    

    calculateDiscount(status){
        if (status === 'GOLD'){
            return .3;
        }else if (status === 'SILVER'){
            return .15;
        }
        return 0;

    }
}

class Collect extends NotificationSender{
    constructor(status){
        super(status);

    }

    calculateFee(status){
        if (status === 'OVERDUE'){
            return 10;
        }else if(status === 'DELIQUENT'){
            return 25;
        }
        return 5;
    }

}

let collection = new Collect('OVERDUE');
//how to call a method from inside a class while the object from class is declared

console.log(`Handling exceptions
-----------------------------
wrap try/catch when handing exceptions from others code
code you have no control of
-----------------------------`)

try{
    list.push('hello');
}catch(err){
    console.log(err);
}

console.log('goodbye');




/////////////////////////////////////////////////////////////////////////////////////////////////


console.log(`Menu app
-------------------------`)

class Player{
    constructor(name,position){
        this.name = name;
        this.position = position;
    }

    describe(){
        return `${this.name} plays ${this.position}`;
    }
}

class Team {
    constructor(name){
        this.name = name;
        this.players = [];
    }

    addPlayer(player){
        if (player instanceof Player) {
            this.players.push(player);
        }else{
        throw new Error(`You can only add an instance of Player.`)
        }
    }

    describe(){
        return `${this.name} has ${this.players.length} players`
    }


}


class Menu{
    constructor(){
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeam();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert(`goodbye!`)
    }

    showMainMenuOptions(){
        return prompt(`
        0)exit
        1) Create new Team
        2) View team
        3) Delete team
        4) Display all teams
        `);
    }

    showTeamMenuOptions(teamInfo){
        return prompt(`
        0) back
        1) create player
        2) delete player
        ---------------------
        ${teamInfo}
        `);
    }


    displayTeam() {
        let teamString = '';
        for (let i = 0 ; i< this.teams.length; i++){
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam(){
        let name = prompt('Enter name for new team');
        this.teams.push(new Team(name));
    }

    viewTeam(){
        let index = prompt('Enter Index of team you wish to view');
        if (index > -1 && index < this.teams.length){
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0 ; i < this.selectedTeam.players.length; i++){
                description += i + ') ' + this.selectedTeam.players[i].name + ' - '
                 + this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection){
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    createPlayer(){
        let name = prompt('Enter Name of player: ');
        let position = prompt('Enter position of player');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer(){
        let index = prompt('Enter index of player you wish to delete: ');
        if (index > -1 && index < this.selectedTeam.players.length){
            this.selectedTeam.players.splice(index, 1);
        }
    }

}

let menu = new Menu();
//menu.start()



//////////////////// class notes

// arrow functions can't use this keyword

//extends keyword needs a constructor keyword

class Animal {
    constructor(name){
        this.name = name;
        this.alive = true
        this.location = randomNum(0,1000)
    }
}

class Prey extends Animal{
    constructor(name){
        super(name);
    }
}

class Predator extends Animal{
    constructor(name){
        super(name);
    }
    


    function hunt(animals) {
        let animalToEat;
        for(let animal of animals){
            console.log(this.location);
            console.log(animals.location);
            let preyClosest = Math.abs(this.loction - prey.location);
            closest = Math.abs(this.location - prey.location);
            if(closest > preyClosest ){
                closest = preyClosest;
                animalToEat = prey;
            }
        
        }
        animalToEat.alive = false;
        console.log(animalToEat + ' was eaten')
    }
}

class Tiger extends Predator{
    constructor(name){
        super(name);
    }
}

let camille = new Prey('Camille');
let sheyla = new Predator('Sheyla');

animals = [camille,sheyla]