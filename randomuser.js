
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    for(i = 0; i < 1; i++){
        var person = data.results[0]
        var gender = person.gender;
        var pic = person.picture.medium;
        var firstname = person.name.first;
        var lastname = person.name.last;
        
        $('body').append('<img src =' + pic + '>');
        $('body').append('<h1> Hello, my name is ' + firstname + ' ' + lastname + ' and I am a ' + gender+'</h1>');
        
    }
  }
});
