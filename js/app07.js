'use stricit';

//creating a global table
let parent = document.getElementById('parent');
let tableElement = document.createElement('table');
parent.appendChild(tableElement);

//declare the hours as a local var
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//function for creating a random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//creat Var an array to store the return the branches data inside
let branches = [];

//construct a function
function BranchesData(name, min, max, avg) {
  this.branchNam = name;
  this.min = min;
  this.max = max;
  this.avg = avg;

  this.total = 0;
  //calculat it using a random number of customers*avg
  this.cookiesPerHour = [];

  branches.push(this);
}

//calculate the random customer per hour
BranchesData.prototype.calcCoockieHour = function () {
  for (let i = 0; i < hours.length; i++) {
    //calculate the number of coockies * avg in one function
    this.cookiesPerHour.push(Math.floor(random(this.min, this.max) * this.avg));
    this.total += this.cookiesPerHour[i];
  }
};


//adding objects to the branchesdata
const seattle = new BranchesData('Seattle', 23, 65, 6.3);
console.log(seattle);

const tokyo = new BranchesData('Tokyo', 3, 24, 1.2);
console.log(tokyo);

const dubai = new BranchesData('Dubai', 11, 38, 3.7);
console.log(dubai);

const paris = new BranchesData('Paris', 20, 38, 2.3);
console.log(paris);

const lima = new BranchesData('Lima', 2, 16, 4.6);
console.log(lima);
console.log(branches);



//creat a function for creatin the Table Header

function tableHeader() {

  //creat first TableRow tr Element
  let headingRow = document.createElement('tr');
  //append the tr element to the table
  tableElement.appendChild(headingRow);

  let firstThElement = document.createElement('th');
  headingRow.appendChild(firstThElement);
  firstThElement.textContent = '#';

  for (let i = 0; i < hours.length; i++) {
    let hoursThElement = document.createElement('th');
    headingRow.appendChild(hoursThElement);
    hoursThElement.textContent = hours[i];

  }
  let lastThElement = document.createElement('th');
  headingRow.appendChild(lastThElement);
  lastThElement.textContent = "GrandTotal";
}

//creat function using prototype 
BranchesData.prototype.render = function () {
  let branchesRow = document.createElement('tr');
  tableElement.appendChild(branchesRow);

  let firstTd = document.createElement('td');
  branchesRow.appendChild(firstTd);
  firstTd.textContent = this.branchNam;

  // adding the count of coockies per hour into a row
  for (let i = 0; i < hours.length; i++) {
    // make a td element for every hour
    let BranchesDataTd = document.createElement('td');
    // append to store row
    branchesRow.appendChild(BranchesDataTd);
    // give text content of the avarage cookies per hour
    BranchesDataTd.textContent = this.cookiesPerHour[i];

  }
  // creating total td for every branch
  let totalTd = document.createElement('td');
  // append total to the branches row
  branchesRow.appendChild(totalTd);
  // fill text content
  totalTd.textContent = this.total;



  // footer function
  function creatingFooter() {
    // making footer row
    let footerRow = document.createElement('tr');

    // append footer row to the table
    tableElement.appendChild(footerRow);

    // creating  first th for footer
    let firstThr = document.createElement('th');

    // append th to the footer row
    footerRow.appendChild(firstThr);

    // add to text content
    firstThr.textContent = 'Total';
  }


  let hourlyTotal = 0;

  let grandTotal = 0;

  // creating total calculation
  for (let i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (let j = 0; j < branches.length; j++) {
      //adding values to totals
      hourlyTotal += branches[j].cookiesPerHour[i];
      grandTotal += branches[j].cookiesPerHour[i];

    }
    console.log(hourlyTotal);
    // create final th
    let footerTh = document.createElement('th');

    // append to footer row
    footerRow.appendChild(footerTh);

    // add text conent
    footerTh.textContent = hourlyTotal;

  }

  // make final th Grand total
  let totalTh = document.createElement('th');

  // append to the footer row
  footerRow.appendChild(totalTh);

  // adding data
  totalTh.textContent = grandTotal;

  // if you want to solve it with global total
  // totalTh.textContent=globalTotal;


};
tableHeader();

//get element by id to creat branches form
let branchesForm = document.getElementById('branchesForm');

//adding the event listener
branchesForm.addEventListener('submit', submitter);

//creating a function for the submitter
function submitter(event) {

  //prevent the defult behavior of refreshing the page
  event.preventDefault();
  //getting the data by user from the form 
  let branchName = event.target.branchName.value;
  //console.log(branchName);
  let min = event.target.min.value;

  let max = event.target.max.value;

  let avg = event.target.avg.value;

  let addBranch = new BranchesData(branchName, min, max, avg);

  //let container = document.getElementById('parent');
  //container.textContent = '';


  BranchesData.prototype.render = function () {
    let branchesRow = document.createElement('tr');
    tableElement.appendChild(branchesRow);

    let firstTd = document.createElement('td');
    branchesRow.appendChild(firstTd);
    firstTd.textContent = this.branchNam;

    // adding the count of coockies per hour into a row
    for (let i = 0; i < hours.length; i++) {
      // make a td element for every hour
      let BranchesDataTd = document.createElement('td');
      // append to store row
      branchesRow.appendChild(BranchesDataTd);
      // give text content of the avarage cookies per hour
      BranchesDataTd.textContent = this.cookiesPerHour[i];

    }
    // creating total td for every branch
    let totalTd = document.createElement('td');
    // append total to the branches row
    branchesRow.appendChild(totalTd);
    // fill text content
    totalTd.textContent = this.total;


    // footer function
    function creatingFooter() {
      // making footer row
      let footerRow = document.createElement('tr');

      // append footer row to the table
      tableElement.appendChild(footerRow);

      // creating  first th for footer
      let firstThr = document.createElement('th');

      // append th to the footer row
      footerRow.appendChild(firstThr);

      // add to text content
      firstThr.textContent = 'Total';



      let hourlyTotal = 0;
      let grandTotal = 0;

      // creating total calculation
      for (let i = 0; i < hours.length; i++) {
        hourlyTotal = 0;
        for (let j = 0; j < branches.length; j++) {
          //adding values to totals
          hourlyTotal += branches[j].cookiesPerHour[i];
          grandTotal += branches[j].cookiesPerHour[i];

        }
        console.log(hourlyTotal);
        // create final th
        let footerTh = document.createElement('th');

        // append to footer row
        footerRow.appendChild(footerTh);

        // add text conent
        footerTh.textContent = hourlyTotal;

      }

      // make final th Grand total
      let totalTh = document.createElement('th');

      // append to the footer row
      footerRow.appendChild(totalTh);

      // adding data
      totalTh.textContent = grandTotal;

      // if you want to solve it with global total
      // totalTh.textContent=globalTotal;



    for (let i = 0; i < branches.length; i++) {
      branches[i].calcCoockieHour();
      branches[i].render();
    }
  };
}


tableHeader();

for (let i = 0; i < branches.length; i++) {
  branches[i].calcCoockieHour();
  branches[i].render();
}

creatingFooter();
