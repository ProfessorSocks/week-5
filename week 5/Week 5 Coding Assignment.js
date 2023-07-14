class Person{
    constructor(name,sex,hobby){
        this.name = name;
        this.sex = sex;
        this.hobby = hobby;
    }

    talk(){
        console.log(`${this.name} says I'm a ${this.sex} and I like ${this.hobby}`);
    }

}

class Relationship{
    constructor(name ,quality, time){
        this.name = name
        this.quality = quality
        this.time = time
        this.partners = [];
    }

    addPartner(partner){
        if (partner instanceof Person) {
            this.partners.push(partner);
        }else{
        throw new Error(`You can only add an instance of Person.`);
        }
    }

    describe(){
        console.log(`${this.partners[0]} and ${this.partners[1]} are in a relationship and it is ${this.quality}`);
    } 

}

class Menu{
    constructor(){
        this.relationships = [];
        this.selectedRelationship = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createRelationship();
                    break;
                case '2':
                    this.viewRelationship();
                    break;
                case '3':
                    this.deleteRelationship();
                    break;
                case '4':
                    this.displayRelationship();
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
        1) Create new relationship
        2) View relationship
        3) Delete a relationship
        4) Display relationships
        `);
    }

    showRelationshipMenuOptions(relationshipInfo){
        return prompt(`
        0) back
        1) create partner
        2) delete partner
        ---------------------
        ${relationshipInfo}
        `);
    }

    displayRelationship(){
        let relationshipString = '';
        for (let i = 0 ; i< this.relationships.length; i++){
            relationshipString += i + ') ' + this.relationships[i].name1
             + '\n';
        }
        alert(relationshipString);  
    }

    createRelationship(){
        let name = prompt('Enter name')
        let quality = prompt('Enter quality of relationship');
        let time = prompt('Enter time in months')
        this.relationships.push(new Relationship(name,quality,time));
    }
        
    viewRelationship(){
        let index = prompt('Enter Index of relationship you wish to view');
        if (index > -1 && index < this.relationships.length){
            this.selectedRelationship = this.relationships[index];
            let description = this.selectedRelationship.name + '\n'

            for (let i = 0 ; i < this.selectedRelationship.partners.length; i++){
                description += i + ') ' + this.selectedRelationship.partners[i].name + ' - '
                 + this.selectedRelationship.partners[i].sex + this.selectedRelationship.partners[i].hobby + '\n';
            }

            let selection = this.showRelationshipMenuOptions(description);
            switch (selection){
                case '1':
                    this.createPartner();
                    break;
                case '2':
                    this.deletePartner();
            }
        }
    }

    createPartner(){
        let name = prompt('Enter Name of partner: ');
        let sex = prompt('Enter gender of partner');
        let hobby = prompt('Enter hobby of partner')
        this.selectedRelationship.partners.push(new Person(name, sex, hobby));
    }

    deletePartner(){
        let index = prompt('Enter index of partner you wish to break up with: ');
        if (index > -1 && index < this.selectedRelationship.partners.length){
            this.selectedRelationship.partners.splice(index, 1);
        }
    }

}

let menu = new Menu();
menu.start()