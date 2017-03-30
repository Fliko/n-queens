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
  for( var i = 1; i <= n; i++){
    count *= i;
  }
  return count;
  // board = new Board({n:n});

  // var table = board.rows();
  // table.get = function(a){return (typeof a === 'string')? this.length: table[a];}
  // table.rows = function(){return this;}
  
  // var solutionCount = function(x, y, count) {
    
    
  //   table[x][y] = 1;
  //   if (board.hasAnyRowConflicts.call(table) || board.hasAnyColConflicts.call(table)){
  //     table[x][y] = 0;
  //     console.log('asdf');
  //   }

  //   console.log(n, 'x', x, 'y', y, table);
  //   var pieces = table.reduce(function(count, row) {
  //     return count + row.reduce(function(count, col) {
  //       return count + col;
  //     },0);
  //   }, 0);
  //   //debugger;
  //   console.log(pieces, n);
  //   if (pieces === n) {
  //     table[x][y] = 0;
  //     return 1;
  //   }

  //   if (y < n - 1) {
  //     count += solutionCount(x, y + 1, count);
  //   } else if (x < n - 1) {
  //     count += solutionCount(x + 1, 0, count);
  //   }
  //   table[x][y] = 0;
  //   return count;
  // };


  // var count = solutionCount(0, 0, 0);
  


  // console.log('Number of solutions for ' + n + ' rooks:', count);
  // return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
