
var countNQueensSolutions = function(n) {
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
};
var bigAnswer = countNQueensSolutions(9);
console.log(bigAnswer.solutions);
console.log(bigAnswer.number);