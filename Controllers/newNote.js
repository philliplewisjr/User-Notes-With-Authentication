app.controller('NewnoteCtrl', function($scope, $location, $http) {

    $scope.newNote = function () {
      console.log('new note button clicked')
      console.log($scope.noteName)
      console.log($scope.noteText)

      let letter = {
        "title": $scope.noteName,
        "noteText": $scope.noteText

      }


  $http.post('https://user-notes-e5a34.firebaseio.com/.json' , JSON.stringify(letter))
    }
    //$scope.notes.$setPristine();
    //$scope.notes.$setUntouched();

})
