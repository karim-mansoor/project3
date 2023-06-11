const f1 = 'Grade1.csv';
const xhr1 = new XMLHttpRequest();
xhr1.onload = function() {
  const rows = xhr1.responseText.split('\n').map(function(row) {
    return row.split(',');
  });
  const table = document.getElementById('table1');

  for (let i = 0; i < rows.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < rows[i].length; j++) {
      const cell = row.insertCell();
      cell.textContent = rows[i][j];
    }
  }
};
xhr1.open('GET', f1, true);
xhr1.send();


// Load Grade2.csv into table2
const f2 = 'Grade2.csv';
const xhr2 = new XMLHttpRequest();
xhr2.onload = function() {
  const rows = xhr2.responseText.split('\n').map(function(row) {
    return row.split(',');
  });
  const table = document.getElementById('table2');

  for (let i = 0; i < rows.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < rows[i].length; j++) 
    {
      const cell = row.insertCell();
      cell.textContent = rows[i][j];
    }
  }
};
xhr2.open('GET', f2, true);
xhr2.send();

const f3 = 'Grade3.csv';
const xhr3 = new XMLHttpRequest();
xhr3.onload = function() {
  const rows = xhr3.responseText.split('\n').map(function(row) {
    return row.split(',');
  });
  const table = document.getElementById('table3');

  for (let i = 0; i < rows.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < rows[i].length; j++) {
      const cell = row.insertCell();
      cell.textContent = rows[i][j];
    }
  }
};

xhr3.open('GET', f3, true);
xhr3.send();
const f4 = 'Grade4.csv';
const xhr4 = new XMLHttpRequest();
xhr4.onload = function() {
  const rows = xhr4.responseText.split('\n').map(function(row) {
    return row.split(',');
  });
  const table = document.getElementById('table4');

  for (let i = 0; i < rows.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < rows[i].length; j++) {
      const cell = row.insertCell();
      cell.textContent = rows[i][j];
    }
  }
};
xhr4.open('GET', f4, true);
xhr4.send();
