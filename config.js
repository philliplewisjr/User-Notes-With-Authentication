app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/register', {
      controller: 'RegisterCtrl',
      templateUrl: 'partial/registration.html',
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partial/login.html',
    })
    .when('/new', {
      controller: 'NewnoteCtrl',
      templateUrl: 'partial/newNote.html'
    })
    .when('/notes', {
      controller: 'NoteCtrl',
      templateUrl: 'partial/noteList.html'
    })
  })
