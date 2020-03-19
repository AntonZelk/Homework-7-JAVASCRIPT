class Worker {
    constructor (name, surname, middleName, age, experience, organization) {
        this._name = name;
        this._surname = surname;
        this._middleName = middleName;
        this._age = age;
        this._experience = experience;
        this._organization = organization;
    }
    set name  (newName) {
        this._name = newName;
    }
    get name () {
        return this._name;
    }
    set surname (newSurName) {
        this._surname = newSurName;
    }
    get surname () {
        return this._surname;
    }
    set middleName (newMiddleName) {
        this._middleName = newMiddleName;
    }
    get middleName () {
        return this._middleName;
    }
    set age (newAge) {
        this._age = newAge;
    }
    get age () {
        return this._age;
    }
    set experience (newExperience) {
        this._experience = newExperience;
    }
    get experience () {
        return this._experience;
    }
    set organization (newOrganization) {
        this._organization = newOrganization;
    }
    get organization () {
        return this._organization;
    }
}

class FrontendDeveloper extends Worker {
    constructor (name, surname, middleName, age, experience, organization, programmingLanguage, frameworks) {
        super(name, surname, middleName, age, experience, organization);
        this._programmingLanguage = programmingLanguage;
        this._frameworks = frameworks;
    }
    set programmingLanguage (newProgrammingLanguage) {
        this._programmingLanguage = newProgrammingLanguage;
    }
    get programmingLanguage () {
        return this._programmingLanguage;
    }
    set frameworks (newFrameworks) {
        this._frameworks = newFrameworks;
    }
    get frameworks () {
        return this._frameworks;
    }
}

class Manager extends Worker {
    constructor (name, surname, middleName, age, experience, organization, englishProficiency, education ) {
        super(name, surname, middleName, age, experience, organization);
        this._englishProficiency = englishProficiency;
        this._education = education; 
    }
    set englishProficiency (newEnglishProficiency) {
        this._englishProficiency = newEnglishProficiency;
    }
    get englishProficiency () {
        return this._englishProficiency;
    }
    set education (newEducation) {
        this._education = newEducation;
    }
    get education () {
        return this._education;
    }
}    

let mainTable = document.getElementById('container');
let constructor = document.getElementById('container2');
let workerPosition = document.getElementById('position');
let workerProgrammingLanguage = document.getElementById('programmingLanguage');
let workerFrameworks = document.getElementById('frameworks');
let workerEnglishProficiency = document.getElementById('englishProficiency');
let workerEducation = document.getElementById('education');
let save = document.getElementById('save');
let clear = document.getElementById('clear');
let workers = [];
let workerName = document.getElementById('name');
let workerSurname = document.getElementById('surname');
let workerMiddleName = document.getElementById('middleName');
let workerAge = document.getElementById('age');
let workerExperience = document.getElementById('experience');
let workerOrganization = document.getElementById('organization');
let listProgrammingLanguage = document.getElementById('listProgrammingLanguage');
let listFrameworks = document.getElementById('listFrameworks');
let knowEnglish = document.getElementById('knowEnglish');
let listEducation = document.getElementById('listEducation');
let table = document.getElementById('table');
let create = document.getElementById('create');
let frontendDeveloper;
let manager;



let clearForm = () => {
    workerPosition.value = '0';
    workerName.value = '';
    workerSurname.value = '';
    workerMiddleName.value = '';
    workerAge.value = '';
    workerExperience.value = '';
    workerOrganization.value = '';
    listProgrammingLanguage.value = '';
    listFrameworks.value = '';
    knowEnglish.value = '';
    listEducation.value = '';
    workerProgrammingLanguage.style.display = 'none';
    workerFrameworks.style.display = 'none'; 
    workerEnglishProficiency.style.display = 'none';
    workerEducation.style.display = 'none';
};

let clearFormWorker = () => {
    if (workerPosition.value === '1' || workerPosition.value === '0') {
        workerName.value = '';
        workerSurname.value = '';
        workerMiddleName.value = '';
        workerAge.value = '';
        workerExperience.value = '';
        workerOrganization.value = '';
        listProgrammingLanguage.value = '';
        listFrameworks.value = '';
    } else if (workerPosition.value === '2' || workerPosition.value === '0') {
        workerName.value = '';
        workerSurname.value = '';
        workerMiddleName.value = '';
        workerAge.value = '';
        workerExperience.value = '';
        workerOrganization.value = '';
        knowEnglish.checked = false;
        listEducation.value = '';
    }
};

let addTr = () => {
    let newTr = document.createElement('tr');
    let newTd1 = document.createElement('td');
    let newTd2 = document.createElement('td');
    let newTd3 = document.createElement('td');
    let newTd4 = document.createElement('td');
    let newTd5 = document.createElement('td');
    let newTd6 = document.createElement('td');
    let newTd7 = document.createElement('td');
    let newTd8 = document.createElement('td');
    let newSpan = document.createElement('span');
    newSpan.id = 'newSpan';
    newSpan.addEventListener('click', () => {
        constructor.children[0].innerHTML = 'Подробная информация';
        constructor.style.display = 'block';
        mainTable.style.display = 'none';
        if(newTd1.textContent = 'FrontendDeveloper') {
            workerPosition.value = '1';
            workerName.value = frontendDeveloper.name;
            workerSurname.value = frontendDeveloper.surname;
            workerMiddleName.value = frontendDeveloper.middleName;
            workerAge.value = frontendDeveloper.age;
            workerExperience.value = frontendDeveloper.experience;
            workerOrganization.value = frontendDeveloper.organization;
            listProgrammingLanguage.value = frontendDeveloper.programmingLanguage;
            listFrameworks.value = frontendDeveloper.frameworks;
            workerProgrammingLanguage.style.display = 'block';
            workerFrameworks.style.display = 'block';
        } else if (newTd1.textContent = 'manager') {
            workerPosition.value = '2';
            workerName.value = manager.name;
            workerSurname.value = manager.surname;
            workerMiddleName.value = manager.middleName;
            workerAge.value = manager.age;
            workerExperience.value = manager.experience;
            workerOrganization.value = manager.organization;
            knowEnglish.value = manager.englishProficiency;
            listEducation.value = manager.education;
            workerEnglishProficiency.style.display = 'block';
            workerEducation.style.display = 'block'; 
        }
       
    });
    let newP = document.createElement('p');
    newP.id = 'newP';
    table.appendChild(newTr).append(newTd1, newTd2, newTd3, newTd4, newTd5, newTd6, newTd7, newTd8);
    newTd8.append(newSpan,newP);
    if (workerPosition.value == '1') {
        newTd1.innerHTML = 'FrontendDeveloper';
        newTd2.innerHTML = frontendDeveloper.name;
        newTd3.innerHTML = frontendDeveloper.surname;
        newTd4.innerHTML = frontendDeveloper.middleName;
        newTd5.innerHTML = frontendDeveloper.age;
        newTd6.innerHTML = frontendDeveloper.experience;
        newTd7.innerHTML = frontendDeveloper.organization;
        newSpan.innerHTML = 'Редактировать';
        newP.innerHTML = 'Удалить';
    } else if (workerPosition.value == '2') {
        newTd1.innerHTML = 'manager';
        newTd2.innerHTML = manager.name;
        newTd3.innerHTML = manager.surname;
        newTd4.innerHTML = manager.middleName;
        newTd5.innerHTML = manager.age;
        newTd6.innerHTML = manager.experience;
        newTd7.innerHTML = manager.organization;
        newSpan.innerHTML = 'Редактировать';
        newP.innerHTML = 'Удалить';
    } 
};




workerPosition.onchange = () => {
    if (workerPosition.value == '1') {
        workerProgrammingLanguage.style.display = 'block';
        workerFrameworks.style.display = 'block';
        workerEnglishProficiency.style.display = 'none';
        workerEducation.style.display = 'none';  
    } else if (workerPosition.value == '2') {
        workerProgrammingLanguage.style.display = 'none';
        workerFrameworks.style.display = 'none'; 
        workerEnglishProficiency.style.display = 'block';
        workerEducation.style.display = 'block'; 
    }
}

knowEnglish.onchange = () => {
    if (knowEnglish.checked === true) {
        knowEnglish.value = 'true';
    } else {
        knowEnglish.value= 'false';
    }
}

save.addEventListener('click', () => {
    if (workerPosition.value == '1') {
        frontendDeveloper = new FrontendDeveloper();
        workers.push(frontendDeveloper);
        frontendDeveloper.name = workerName.value;
        frontendDeveloper.surname = workerSurname.value;
        frontendDeveloper.middleName = workerMiddleName.value;
        frontendDeveloper.age = workerAge.value;
        frontendDeveloper.experience = workerExperience.value;
        frontendDeveloper.organization = workerOrganization.value;
        frontendDeveloper.programmingLanguage = listProgrammingLanguage.value;
        frontendDeveloper.frameworks = listFrameworks.value;
        console.log(workers);
    } else if (workerPosition.value == '2') {
        manager = new Manager();
        workers.push(manager);
        manager.name = workerName.value;
        manager.surname = workerSurname.value;
        manager.middleName = workerMiddleName.value;
        manager.age = workerAge.value;
        manager.experience = workerExperience.value;
        manager.organization = workerOrganization.value;
        manager.englishProficiency = knowEnglish.value;
        manager.education = listEducation.value;
        console.log(workers);
    } else if (workerPosition.value == '0') {
     
    }
    constructor.style.display = 'none';
    mainTable.style.display = 'block';
    addTr();
    clearForm();
});

clear.addEventListener('click', () => {
    clearFormWorker();
});


create.addEventListener('click', () => {
    constructor.style.display = 'block';
    mainTable.style.display = 'none';
    constructor.children[0].innerHTML = 'Новый работник:';
});

// let worker = new Worker('Антон', 'Дударчик', 'Сергеевич', 22, 2, 'Минскавтодор');
// let webDeveloper = new WebDeveloper('Антон', 'Дударчик', 'Сергеевич', 22, 6, 'Минскавтодор');
