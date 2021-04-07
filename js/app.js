/*'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let seattle = {
  branchName: 'seattle',
  maxCoustomer: 65,
  minCoustomer: 23,
  avgCookies: 6.3,
  coustomerHour: [],
  cookiesHour: [],
  total:0,

  calcCoustomerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.coustomerHour.push(random(this.minCoustomer, this.maxCoustomer))

    }
  },
  calcCookiesHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHour.push(Math.floor(this.coustomerHour[i] * this.avgCookies));
    this.total += this.cookiesHour[i];
    console.log(this.total);
  }
  },
  render: function () {
    let parent = document.getElementById('parent');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.branchName;

    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.cookiesHour[i]} cookies`;


    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    
    totalLi.textContent=`Total:  ${this.total} cookies `;
  }

};

seattle.calcCoustomerHour();
seattle.calcCookiesHour();
seattle.render();
console.log(seattle);

let tokyo = {
  branchName: 'Tokyo',
  maxCoustomer: 24,
  minCoustomer: 3,
  avgCookies: 1.2,
  coustomerHour: [],
  cookiesHour: [],
  total:0,

  calcCoustomerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.coustomerHour.push(random(this.minCoustomer, this.maxCoustomer))

    }
  },
  calcCookiesHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHour.push(Math.floor(this.coustomerHour[i] * this.avgCookies));
    this.total += this.cookiesHour[i];
    console.log(this.total);
  }
  },
  render: function () {
    let parent = document.getElementById('parent');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.branchName;

    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.cookiesHour[i]} cookies`;


    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    
    totalLi.textContent=`Total:  ${this.total} cookies `;
  }

};

tokyo.calcCoustomerHour();
tokyo.calcCookiesHour();
tokyo.render();
console.log(tokyo);


let dubai= {
  branchName: 'Dubai',
  maxCoustomer: 38,
  minCoustomer: 11,
  avgCookies: 3.7,
  coustomerHour: [],
  cookiesHour: [],
  total:0,

  calcCoustomerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.coustomerHour.push(random(this.minCoustomer, this.maxCoustomer))

    }
  },
  calcCookiesHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHour.push(Math.floor(this.coustomerHour[i] * this.avgCookies));
    this.total += this.cookiesHour[i];
    console.log(this.total);
  }
  },
  render: function () {
    let parent = document.getElementById('parent');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.branchName;

    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.cookiesHour[i]} cookies`;


    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    
    totalLi.textContent=`Total:  ${this.total} cookies `;
  }

};

dubai.calcCoustomerHour();
dubai.calcCookiesHour();
dubai.render();
console.log(dubai);


let paris = {
  branchName: 'Paris',
  maxCoustomer: 65,
  minCoustomer: 23,
  avgCookies: 2.3,
  coustomerHour: [],
  cookiesHour: [],
  total:0,

  calcCoustomerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.coustomerHour.push(random(this.minCoustomer, this.maxCoustomer))

    }
  },
  calcCookiesHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHour.push(Math.floor(this.coustomerHour[i] * this.avgCookies));
    this.total += this.cookiesHour[i];
    console.log(this.total);
  }
  },
  render: function () {
    let parent = document.getElementById('parent');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.branchName;

    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.cookiesHour[i]} cookies`;


    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    
    totalLi.textContent=`Total:  ${this.total} cookies `;
  }

};

paris.calcCoustomerHour();
paris.calcCookiesHour();
paris.render();
console.log(paris);

let lima = {
  branchName: 'Lima',
  maxCoustomer: 16,
  minCoustomer: 2,
  avgCookies: 4.6,
  coustomerHour: [],
  cookiesHour: [],
  total:0,

  calcCoustomerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.coustomerHour.push(random(this.minCoustomer, this.maxCoustomer))

    }
  },
  calcCookiesHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHour.push(Math.floor(this.coustomerHour[i] * this.avgCookies));
    this.total += this.cookiesHour[i];
    console.log(this.total);
  }
  },
  render: function () {
    let parent = document.getElementById('parent');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.branchName;

    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.cookiesHour[i]} cookies`;


    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    
    totalLi.textContent=`Total:  ${this.total} cookies `;
  }

};

lima.calcCoustomerHour();
lima.calcCookiesHour();
lima.render();
console.log(lima);
*/
