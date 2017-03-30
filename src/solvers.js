/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};

window.findNRooksSolution = function(n) {
  var solution = makeEmptyMatrix(n).map(function(row, i) {
    row[i] = 1;
    return row;
  });
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 1;
  for( var i = 1; i <= n; i++) {
    count *= i;
  }
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  if(n === 0 || n === 2 || n === 3){
    console.log(n, JSON.stringify([]));
    return _.range(n).map(() => []);
  }
  solution = nQueens(n).solutions[0].map((r) => {
    var ar = new Array(n);
    ar.fill(0);
    ar[r] = 1;
    return ar;
  });
  console.log(n, JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.nQueens = _.memoize(function(n) {
  var solutions = [];
  var innerRec = function(i, diags, Diags, rows, solution) {
    //console.log('asdf', solution);
    var sol = 0;
    if(i === n) {
      solutions.push(solution.slice(0)) ;
      return 1;
    }
    for(var j = 0; j < n; j++) {
      var curdiag = i + j, curDiag = i - j + n, currow = j;
      if( (diags & (1 << curdiag)) || (Diags & (1 << curDiag)) || rows & (1 << currow) ) {
        continue;
      }
      solution.push(j);
      sol += innerRec(i + 1, diags | (1 << curdiag), Diags | (1 << curDiag), rows | (1 << currow), solution);
      solution.pop();
    }
    return sol;
  };
  return {number: innerRec(0, 0, 0, 0, []), solutions: solutions };
});

window.countNQueensSolutions = function(n) {
  return nQueens(n).number;
};
