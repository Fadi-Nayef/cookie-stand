'use stricit';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function table() {
  let parent = document.getElementById('parent');
  let tableElement = document.createElement('table');
  parent.appendChild(tableElement);

  let headingRow = document.createElement('tr');
  tableElement.appendChild(headingRow);

  let thElement = document.createElement('th');
  headingRow.appendChild(thElement);
  thElement.textContent = 'first';

  for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = hours[i];
  }
}
table();


function Branch(name, min, max, avg, total, customer, cookies) {
  this.branchNam = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = total;
  this.customerPerHour =customer;
  this.cookiesPerHour = cookies;

}
let seattle = new Branch('seattle', 23, 65, 6.3,0);
console.log(seattle);

function calcCoustomerHour () {

  for (let i = 0; i < hours.length; i++) {

    seattle.customerPerHour.push(random(seattle.min, seattle.max));
    return(calcCoustomerHour);
  }}
console.log(calcCoustomerHour);



function calcCoockieHour () {
  for (let i = 0; i < hours.length; i++) {
    seattle.cookiesPerHour.push(Math.floor(seattle.customerPerHour[i] * seattle.avg));
    seattle.total += seattle.cookiesPerHour[i];
    return(calcCoockieHour);
  }
}
console.log(seattle.total);

/* render: function () {
    let parent = document.getElementById('parent');
    console.log(parent);

    let table = document.createElement('table');

    parent.appendChild(table);
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = [this.branchName];

    for (let i = 0; i < hours.length; i++) {
        let tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent = (this.coockieHour[i]);
    }
    tdElement.textContent = (this.total);



        nameElement.textContent = this.branchName;

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);

          let liElement = document.createElement('li');
          ulElement.appendChild(liElement);
          liElement.textContent = `${hours[i]}:${this.cookiesHour[i]} cookies`;


        }
        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);

        totalLi.textContent=`Total:  ${this.total} cookies `;
      }
        },

},
};
seattle.calcCustomerHour();
seattle.calcCoockieHour();
seattle.render();
console.log(seattle);
*/
