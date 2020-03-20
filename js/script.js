class Worker {
  constructor(
    position,
    name,
    surname,
    middleName,
    age,
    experience,
    organization
  ) {
    this._position = position;
    this._name = name;
    this._surname = surname;
    this._middleName = middleName;
    this._age = age;
    this._experience = experience;
    this._organization = organization;
  }

  set position(newPosition) {
    this._position = newPosition;
  }
  get position() {
    return this._position;
  }
  set name(newName) {
    this._name = newName;
  }
  get name() {
    return this._name;
  }
  set surname(newSurName) {
    this._surname = newSurName;
  }
  get surname() {
    return this._surname;
  }
  set middleName(newMiddleName) {
    this._middleName = newMiddleName;
  }
  get middleName() {
    return this._middleName;
  }
  set age(newAge) {
    this._age = newAge;
  }
  get age() {
    return this._age;
  }
  set experience(newExperience) {
    this._experience = newExperience;
  }
  get experience() {
    return this._experience;
  }
  set organization(newOrganization) {
    this._organization = newOrganization;
  }
  get organization() {
    return this._organization;
  }
}

const positions = {
  FrontendDeveloper: "FrontendDeveloper",
  Manager: "Manager"
};

class FrontendDeveloper extends Worker {
  constructor(
    name,
    surname,
    middleName,
    age,
    experience,
    organization,
    programmingLanguage,
    frameworks
  ) {
    super(
      positions.FrontendDeveloper,
      name,
      surname,
      middleName,
      age,
      experience,
      organization
    );
    this._programmingLanguage = programmingLanguage;
    this._frameworks = frameworks;
  }
  set programmingLanguage(newProgrammingLanguage) {
    this._programmingLanguage = newProgrammingLanguage;
  }
  get programmingLanguage() {
    return this._programmingLanguage;
  }
  set frameworks(newFrameworks) {
    this._frameworks = newFrameworks;
  }
  get frameworks() {
    return this._frameworks;
  }
}

class Manager extends Worker {
  constructor(
    name,
    surname,
    middleName,
    age,
    experience,
    organization,
    englishProficiency,
    education
  ) {
    super(
      positions.Manager,
      name,
      surname,
      middleName,
      age,
      experience,
      organization
    );
    this._englishProficiency = englishProficiency;
    this._education = education;
  }
  set englishProficiency(newEnglishProficiency) {
    this._englishProficiency = newEnglishProficiency;
  }
  get englishProficiency() {
    return this._englishProficiency;
  }
  set education(newEducation) {
    this._education = newEducation;
  }
  get education() {
    return this._education;
  }
}

const mainTable = document.getElementById("container");
const constructor = document.getElementById("container2");
const workerPosition = document.getElementById("position");
const workerProgrammingLanguage = document.getElementById(
  "programmingLanguage"
);
const workerFrameworks = document.getElementById("frameworks");
const workerEnglishProficiency = document.getElementById("englishProficiency");
const workerEducation = document.getElementById("education");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const workers = [];
const workerName = document.getElementById("name");
const workerSurname = document.getElementById("surname");
const workerMiddleName = document.getElementById("middleName");
const workerAge = document.getElementById("age");
const workerExperience = document.getElementById("experience");
const workerOrganization = document.getElementById("organization");
const listProgrammingLanguage = document.getElementById(
  "listProgrammingLanguage"
);
const listFrameworks = document.getElementById("listFrameworks");
const knowEnglish = document.getElementById("knowEnglish");
const listEducation = document.getElementById("listEducation");
const table = document.getElementById("table");
const create = document.getElementById("create");
const dataWorkerAttribute = "data-worker";

const clearForm = () => {
  workerPosition.value = "0";
  workerName.value = "";
  workerSurname.value = "";
  workerMiddleName.value = "";
  workerAge.value = "";
  workerExperience.value = "";
  workerOrganization.value = "";
  listProgrammingLanguage.value = "";
  listFrameworks.value = "";
  knowEnglish.value = "";
  listEducation.value = "";
  workerProgrammingLanguage.style.display = "none";
  workerFrameworks.style.display = "none";
  workerEnglishProficiency.style.display = "none";
  workerEducation.style.display = "none";
};

const clearFormWorker = () => {
  workerName.value = "";
  workerSurname.value = "";
  workerMiddleName.value = "";
  workerAge.value = "";
  workerExperience.value = "";
  workerOrganization.value = "";
  listProgrammingLanguage.value = "";
  listFrameworks.value = "";
  knowEnglish.checked = false;
  listEducation.value = "";
};

const addTr = worker => {
  const newTr = document.createElement("tr");
  const id = workers.length - 1;
  newTr.setAttribute("id", `worker${id}`);

  const newTd1 = document.createElement("td");
  const newTd2 = document.createElement("td");
  const newTd3 = document.createElement("td");
  const newTd4 = document.createElement("td");
  const newTd5 = document.createElement("td");
  const newTd6 = document.createElement("td");
  const newTd7 = document.createElement("td");
  const newTd8 = document.createElement("td");
  const newSpan = document.createElement("span");
  newSpan.setAttribute("id", `edit${id}`);

  const newP = document.createElement("p");
  newP.id = "newP";

  newP.addEventListener("click", () => {
    const remove = confirm("Вы уверены?");
    if (remove) {
      const row = document.querySelector(`tr#worker${id}`);
      row.remove();
    }
  });

  table
    .appendChild(newTr)
    .append(newTd1, newTd2, newTd3, newTd4, newTd5, newTd6, newTd7, newTd8);
  newTd8.append(newSpan, newP);

  changeRowData(id, worker);

  newSpan.innerHTML = "Редактировать";
  newP.innerHTML = "Удалить";
};

const changeRowData = (id, worker) => {
  const tds = document.querySelectorAll(`tr#worker${id} td`);
  const edit = document.querySelector(`#edit${id}`);

  tds[0].innerHTML = worker.position;
  tds[1].innerHTML = worker.name;
  tds[2].innerHTML = worker.surname;
  tds[3].innerHTML = worker.middleName;
  tds[4].innerHTML = worker.age;
  tds[5].innerHTML = worker.experience;
  tds[6].innerHTML = worker.organization;

  edit.addEventListener("click", () => {
    constructor.children[0].innerHTML = "Подробная информация";
    constructor.style.display = "block";
    mainTable.style.display = "none";
    save.setAttribute(dataWorkerAttribute, id);

    workerName.value = worker.name;
    workerSurname.value = worker.surname;
    workerMiddleName.value = worker.middleName;
    workerAge.value = worker.age;
    workerExperience.value = worker.experience;
    workerOrganization.value = worker.organization;

    workerPosition.value = worker.position;

    if (worker.position === positions.FrontendDeveloper) {
      listProgrammingLanguage.value = worker.programmingLanguage;
      listFrameworks.value = worker.frameworks;
      workerProgrammingLanguage.style.display = "block";
      workerFrameworks.style.display = "block";
    } else if (worker.position === positions.Manager) {
      knowEnglish.value = worker.englishProficiency;
      listEducation.value = worker.education;
      workerEnglishProficiency.style.display = "block";
      workerEducation.style.display = "block";
    }
  });
};

workerPosition.onchange = () => {
  if (workerPosition.value === positions.FrontendDeveloper) {
    workerProgrammingLanguage.style.display = "block";
    workerFrameworks.style.display = "block";
    workerEnglishProficiency.style.display = "none";
    workerEducation.style.display = "none";
  } else if (workerPosition.value === positions.Manager) {
    workerProgrammingLanguage.style.display = "none";
    workerFrameworks.style.display = "none";
    workerEnglishProficiency.style.display = "block";
    workerEducation.style.display = "block";
  }
};

knowEnglish.onchange = () => {
  if (knowEnglish.checked === true) {
    knowEnglish.value = "true";
  } else {
    knowEnglish.value = "false";
  }
};

save.addEventListener("click", e => {
  e.preventDefault();
  let worker;
  if (workerPosition.value === positions.FrontendDeveloper) {
    worker = new FrontendDeveloper();
    worker.programmingLanguage = listProgrammingLanguage.value;
    worker.frameworks = listFrameworks.value;
  } else if (workerPosition.value === positions.Manager) {
    worker = new Manager();
    worker.englishProficiency = knowEnglish.value;
    worker.education = listEducation.value;
  } else {
    return;
  }

  worker.name = workerName.value;
  worker.surname = workerSurname.value;
  worker.middleName = workerMiddleName.value;
  worker.age = workerAge.value;
  worker.experience = workerExperience.value;
  worker.organization = workerOrganization.value;
  workers.push(worker);

  constructor.style.display = "none";
  mainTable.style.display = "block";

  const id = save.getAttribute(dataWorkerAttribute);
  if (!id) {
    addTr(worker);
    
  } else {
    changeRowData(id, worker);
  }
  clearForm();

  save.setAttribute(dataWorkerAttribute, "");
});

clear.addEventListener("click", () => {
  clearFormWorker();
});

create.addEventListener("click", () => {
  constructor.style.display = "block";
  mainTable.style.display = "none";
  constructor.children[0].innerHTML = "Новый работник:";
});
