app.factory('noteFactory', function() {

let letter;

  return {
    getThatVar : () => {
      if (letter) {
        return letter
      } else {
        return 'You must enter a note!'
      }
    }
  ,

  //setter
    setVar : (newNote) => {
      letter = newNote
      console.log('noteFactory', letter)
    }
  }

})
