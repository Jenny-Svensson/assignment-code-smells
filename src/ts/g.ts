/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  const totalNumber = jumpings.reduce((jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump);

    return totalNumber;
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
*/

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {

  student.passed = student.name == "Sebastian" ? student.handedInOnTime ? true : false : false;
  return student.passed ? `${student.name} fick VG` : `${student.name} fick IG`;

};


/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

  class Temp {
    constructor(
      public currentCity: string, 
      public currentDateMS : Date, 
      public currentTemp: number // vad är v?
      ) {}
  }
  
  function averageWeeklyTemperature(temperature: Temp[]) {
    let result = 0; 

    const DAYS_IN_A_WEEK = 7; 
    const CAPITAL_OF_SWEDEN = "Stockholm";
    const MILLISECOND_FOR_A_WEEK = 604800000;
  
    for (let i = 0; i < temperature.length; i++) {
      if (temperature[i].currentCity === CAPITAL_OF_SWEDEN) { 
        if (temperature[i].currentDateMS.getTime() > Date.now() - MILLISECOND_FOR_A_WEEK) { 
          result += temperature[i].currentTemp; 
        }
      }
    }

    let averageTemp = result / DAYS_IN_A_WEEK;
  
    return averageTemp;
  };

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

class Product {
  constructor(
    public name: string,
    public price: number,
    public image: string,
    public parent: HTMLElement,
    public amount?: number,
    public description?: string,
    ) {}
}

function showProduct(product: Product) {
  let container = document.createElement("div");
  let title = document.createElement("h4");
  let cost = document.createElement("strong"); 
  let imageTag = document.createElement("img");

  title.innerHTML = product.name;
  cost.innerHTML = product.price.toString(); 
  imageTag.src = product.image;

  container.appendChild(title);
  container.appendChild(imageTag);
  container.appendChild(cost); 
  // parent.appendChild(container);
};


/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */

  function presentStudents(students: Student[]) {
    let container = document.createElement("div");
    let checkbox = document.createElement("input");
    let listOfStudents = document.querySelector("ul#passedstudents");

    for (const student of students) {
        checkbox.type = "checkbox"; 

        student.handedInOnTime = checkbox.checked ? true : false;

        container.appendChild(checkbox);
        listOfStudents?.appendChild(container);
    }
  };

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */

function concatenateStrings() {
  const text = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
  console.log(text.join(', '));
  }


/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

class userInformation { 
  constructor (
    public name: string,  
    public birthday: Date,
    public email: string, 
    public password: string
) {}
}

function createUser(userInformation: userInformation) { 

const MIN_REQUIRED_AGE = 20;
const YEAR_OF_JS_EPOCH = 1970;

  // Validation
  let ageDiff = Date.now() - userInformation.birthday.getTime(); 
  let ageDate = new Date(ageDiff); 
  let userAge = Math.abs(ageDate.getUTCFullYear() - YEAR_OF_JS_EPOCH);

  console.log(userAge);

  if ((userAge > MIN_REQUIRED_AGE)) { 
    // Logik för att skapa en användare
  } else {
    return `${userInformation.name} är under 20 år`; 
  }
}
