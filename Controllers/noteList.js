app.controller('NoteCtrl', function($scope, $location, $http) {
  console.log('NoteCtrl')

  $http.get('https://user-notes-e5a34.firebaseio.com/.json')
  .then(function (noteList) {
    console.log(noteList)
    $scope.letterList = noteList.data
    console.log($scope.letterList)
  })

})
