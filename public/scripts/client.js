// establish an array of arrays for the calculator buttons.
var buttons = [
  [1, 2, 3, '+'],
  [4, 5, 6, '-'],
  [7, 8, 9, '*'],
  [0, '.', 'c', '/'],
  ['=', '!', 'X^Y', '^2']
];

// establish names for each operator for server calls
var operators = {
  '+': 'add',
  '-': 'subtract',
  '*': 'multiply',
  '/': 'divide',
  '!': 'factorial',
  '^2': 'square',
  'X^Y': 'powerOf'
};

// an object is used to store all of the button clicks
var calculation = {
  firstVal: '',
  secondVal: '',
  operator: ''
};
// afterOperator allows the second input to be made.
// afterCalc lets the calculations continue on continuously.
var afterOperator = false;
var afterCalc = false;

$(function () {
  //create the layout of the buttons
  createNumbers(buttons);

  //listener to determine button clicks
  $('.container').on('click', 'button', function () {
    buttonFlash();
    var buttonPressed = $(this).attr('id');
    console.log(buttonPressed);

    //function to take in all inputs and update calculation object until = is pressed
    //then update display and do whatever else needs to be done.
    if (afterOperator === false) {
      updateCalc(buttonPressed, "firstVal");
    } else {
      updateCalc(buttonPressed, "secondVal");
    }
  });
});

// function to create all the buttons from the buttons arrays
function createNumbers(array) {
  // for loop to create each row of the calculator's buttons
  for (var i = 0; i < array.length; i++) {
    var row = i + 1;
    var $div = $('<div class="row row-' + row + '"</div>');
    $('.container').append($div);

    //create each button in current row
    for (var j = 0; j < array[i].length; j++) {
      var buttonWidth = 8/array[i].length;
      var $button = $('<button class="button col-xs-' + buttonWidth + '" id="' + array[i][j] + '">' + array[i][j] + '</button>');
      $div.append($button);
    }
  }
}

// Function to update the calculation object and to
// send it along after '=' or '!'
function updateCalc (id, val) {
  // if a calculation has been done, clear out the calculator and start
  // over if number or a '.' are pressed.  If an operator is pressed,
  // continue with the calculation using the previous value as
  // firstVal and the pressed operator as the current operator.
  if (afterCalc == true && afterOperator == false) {
    if (id >= 0 || id == '.') {
      resetCalc();
    }
  }
    // only allow 1 decimal point to be added
  if (id == '.') {
    if (calculation[val].indexOf('.') == -1) {
      calculation[val] += id;
      $('.display').text(calculation[val]);
    }
  // if a number is entered, add it to the current value string in
  // the calculation object
  } else if (parseInt(id) >= 0) {
    calculation[val] += id;
    $('.display').text(calculation[val]);
  // If an '=' is pressed, calculate and display the result
  } else if (id == '=') {
    getResult();
  // If the 'c' is pressed, clear out the calculator
  } else if (id == 'c') {
    resetCalc();
    $('.display').text('0');
  // Only operators are left. If a '-' is pressed first, add it to the
  // first value. It is negative. Otherwise, store the operator and
  // switch to the second value of calculation object.
  } else if (calculation.operator == '') {
    if (calculation.firstVal == '' && id == '-') {
      calculation[val] += id;
      $('.display').text(calculation[val]);
    } else if (calculation.firstVal != '' && calculation.firstVal != '-') {
      calculation.operator = id;
      afterOperator = true;
      afterCalc = false;
      if (id == '!' || id == '^2') {
        getResult();
      }
    }
  }
}

// Clears out the calculator so we can start mathing again.
function resetCalc () {
  calculation.firstVal = '';
  calculation.secondVal = '';
  calculation.operator = '';
  calculation.destination = '';
  afterOperator = false;
  afterCalc = false;
}

// Figures out which operator was used, and gets the matching
// operator name to use in the url of the post request
function getDest() {
  for (key in operators) {
    if (calculation.operator == key) {
      calculation.destination = operators[key];
    }
  }
  return calculation.destination;
}

// Send a post request to the server based on the required destination
function getResult() {
  $.ajax({
    type: 'POST',
    url: '/' + getDest(),
    data: calculation,
    success: function(total) {
      $('.display').text(total.value);
      resetCalc();
      calculation.firstVal = total.value;
      afterCalc = true;
    }
  });
}

function buttonFlash () {
  $('.solar').css({
    backgroundColor: '#444444'
  });
  setTimeout(function() {
    $('.solar').css({
      backgroundColor: '#333333'
    });
  }, 100);
}
