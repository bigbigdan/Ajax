$(function(){
  var $table = $('.table');
  var url = 'http://localhost/php/selectStudent.php';
  var database;

  $table.bind('xuanruan',function(e,x){
    $(this)
    .find('tbody')
    .empty()
    .html( x.data.map(function(v){
      return '<tr><th scope="row">'+v.id+'</th> <td><input type="text" name="username" value="'+v.name+'"></td> <td>'+v.sex+'</td> <td>'+v.age+'</td> <td>'+v.score+'</td> <td><input type="checkbox"></td> </tr>';
    }).join('') );
  });

  $.ajax({
    url:url,
    dataType:'json'
  })
  .done(function(json){
    database = json;
    $table.trigger('xuanruan',{data:database});
  });

  $('#shanchu').click(function () {
    if( !$(':checked').length ){
      alert('选中后删除')
      return;
    }
    var id = $(':checked')
    .parent()
    .parent()
    .children()
    .first().text()

    $.get('http://localhost/php/deleteStudent.php?id='+id)
    .done(function(){
      database = database.filter(function(value,index){
        return value.id != id;
      })
      $table.trigger('xuanruan',{data:database})
    })
  })

})
