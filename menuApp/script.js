//employee registration
class Developer {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe = () => {
        return `${this.name} plays ${this.position}`;
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.developers = [];
    }
    addDeveloper = (developer) => {
        if (developer instanceof Developer) {
            this.developers.push(developer);
        } else {
            throw new Error('You can only add an instance of a Developer.')
        }
    }

    describe = () => {
        return `${this.name} has ${this.developers.length} developers.`;
    }
}


class Menu {
    constructor() {
        this.companies = [];
        this.selectedCompany = null;
    }

    start = () => {
        let selection = null;
        while (selection !== 0) {
            selection = this.showMainMenuOptions();
            switch (selection) {
                case '1':
                    this.createCompany();
                    break;
                case '2':
                    this.viewCompany();
                    break;
                case '3':
                    this.deleteCompany();
                    break;
                case '4':
                    this.displayCompany();
                    break;
                default:
                    selection = 0;
            }
        }
        alert('Have a nice day!');
    }
    showMainMenuOptions = () => {
        return prompt(`
        0) Exit
        1) Create New Company
        2) View Company
        3) Delete Company
        4) Display all Companies
        `)
    }

    showTeamMenuOptions = (companyInfo) => {
        return prompt(`
        0) Go Back
        1) Enter developer
        2) Delete developer
        ${companyInfo}
        `);
    }

    displayCompanies = () => {
        let companyString = '';
        this.companies.forEach((company, index) => {
            companyString += index + ') ' + company.describe() + '\n';
        })
        alert(companyString);
    }

    createCompany = () => {
        let name = prompt('Enter name for new company: ');
        this.companies.push(new Company(name));
    }

    viewCompany = () => {
        let index = prompt('Enter the index of the company you wish to view: ');
        if (index > -1 && index < this.companies.length) {
            this.selectedCompany = this.companies[index];
            let description = 'Company Name : ' + this.selectedCompany.name + '\n'
            this.selectedCompany.developer.forEach((developer, i) => {
                description += i + ') ' + developer.describe() + '\n';
            })

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case 1:
                    this.createDeveloper();
                    break;
                case 2:
                    this.deleteDeveloper();
                    break;
            }
        }
    }

    deleteCompany() {
        let index = prompt('Enter the index of the company you wish to delete: ');
        if (index > -1 && index < this.companies.length) {
            this.companies.splice(index, 1);
        }
    }
    createDeveloper() {
        let name = prompt('Enter name for new developer: ');
        let position = prompt('Enter position for new developer: ');
        this.selectedCompany.developers.push(new Developer(name, position));
    }
    deletePlayer() {
        let index = prompt('Enter index of player you wish to delete: ');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedCompany.developers.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();