$(function () {
    $('#myList a:last-child').tab('show')
})

function register() {
    $.get('https://my-json-server.typicode.com/Kusha25/users-database/users', function (resp, status, resp_obj) {
   console.log(resp);
    let user = $('#username').val().toLowerCase();
    let email = $('#email').val().toLowerCase();    
    let id = $('#id').val().toLowerCase();

    for(var j = 0; j< id; j++){
        
      $('#info1').html(function (ind, old_value) {      
      if(resp[j].id == id){
        if(resp[j].email == email){
          if(resp[j].user == user){
          return "This account exists, try again";
          }
          else {
            return "This account exists, try again";
          }
        }
        else{
          return "This account exists, try again";
        }
        }
      else {
        return "Success!";
      }
      	})
      }
    
    })
}