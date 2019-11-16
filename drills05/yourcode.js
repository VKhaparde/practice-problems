// testVals: {
//   inputs: [
//     [[
//       { type: 'charge', source: 'Lowes', amount: '23.50' },
//       { type: 'charge', source: 'Applebees', amount: '17.30' },
//       { type: 'cash advance', source: 'BofA', amount: '40.00' },
//       { type: 'charge', source: 'AT&T', amount: '130.00' },
//       { type: 'cash advance', source: 'Chase', amount: '20.00' }
//     ]],
//     [[
//       { type: 'charge', source: 'Fudruckers', amount: '23.50' },
//       { type: 'charge', source: 'Carls Junior', amount: '17.30' },
//       { type: 'charge', source: 'McDonalds', amount: '40.00' },
//       { type: 'charge', source: 'Olive Garden', amount: '31.20' },
//       { type: 'charge', source: 'Heart Doctor', amount: '1000.00' }
//     ]],

//   ],
//     outputs:
//   [{
//     "charge": 170.8,
//     "cash advance": 60
//   },
//   {
//     "charge": 1112,
//     "cash advance": 0
//   },
//   ],

function populateRecords(inputArray) {
  var element = $('<div>').addClass('testOutput');
  var table = $('<table>').addClass('transactionRecord');
  element.append(table);
  $('#testArea').append(element);

  var header = $('<tr>').addClass('transactionRecord:nth-of-type(1)');
  var td1Header = $('<td>').addClass('transactionType').text('TYPE');
  var td2Header = $('<td>').addClass('transactionLocation').text('SOURCE');
  var td3Header = $('<td>').addClass('transactionAmount').text('AMOUNT');
  header.append(td1Header, td2Header, td3Header);
  table.append(header);
  for (var i = 0; i< inputArray.length; i++){
    var td1 = $('<td>').addClass('transactionType').text(inputArray[i]['type']);
    var td2 = $('<td>').addClass('transactionLocation').text(inputArray[i]['source']);
    var td3 = $('<td>').addClass('transactionAmount').text(inputArray[i]['amount']);
    table.append(td1,td2,td3);
  }



  var chargeAmount = 0;
  var cashAdvanceAmount = 0;

  var resultObj = {};
  for (var index = 0; index < inputArray.length; index++) {

    if (inputArray[index]['type'] === 'charge') {
      chargeAmount = chargeAmount + parseFloat(inputArray[index]['amount']);
    }
    else if (inputArray[index]['type'] === 'cash advance') {
      cashAdvanceAmount = cashAdvanceAmount + parseFloat(inputArray[index]['amount']);
    }
  }
  resultObj['charge'] = chargeAmount;
  resultObj['cash advance'] = cashAdvanceAmount;

  return resultObj;
}
