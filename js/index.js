$(function(){
  var $table = $('.table');
  var url = 'http://localhost:8888/php/selectStudent.php';
  var database;

  var getdata =  function () {
    $.ajax({
      url:url,
      dataType:'json'
    })
    .done(function(json){
      database = json;
      $table.trigger('xuanruan',{data:database});
    });
  }
  getdata();

  $table.bind('xuanruan',function(e,x){
    $(this)
    .find('tbody')
    .empty()
    .html( x.data.map(function(v){
      return '<tr><input type="hidden" name="id" value="'+v.id+'"><th scope="row">'+v.xuehao+'</th> <td><input type="text" name="name" value="'+v.name+'"></td> <td>'+v.sex+'</td> <td>'+v.age+'</td> <td>'+v.score+'</td> <td><input type="checkbox" name="item" value="'+v.id+'"></td> </tr>';
    }).join('') );
  });

  $('#shanchu').click(function () {
    if( !$(':checked').length ){
      alert('选中后删除')
      return;
    }
    var ids = $(':input[name=item]:checked').map(function () {
      return $(this).val();
    }).get();
    $.post({
      url:'http://localhost:8888/php/deleteStudent.php',
      data:{ids:ids},
    })
    .done(function(data){
      database = database.filter(function(value,index){
          return $.inArray(value.id,ids) == -1;
      })
      $table.trigger('xuanruan',{data:database})
    })
    .fail(function () {
    })
  })

  $('#add').click(function () {
    $.get('http://localhost:8888/php/addStudent.php')
    .done(function(){
      getdata();
    })
  })

  $('#cn').click(function () {
    if( $(this).prop('checked') ){
      $(':input[name=item]').prop('checked',true);
    }else{
      $(':input[name=item]').prop('checked',false);
    }
  })

  $('.table').delegate('input[name=name]','keyup',(function(){
    var timmerId;
    return function () {
      var id = $(this).parent().parent().find('input[type=hidden]').val();
      var data = {id:id,key:$(this).prop('name'),value:$(this).val() };
      clearTimeout(timmerId);
      timmerId = setTimeout(function () {
        $.post({
          url:'http://localhost:8888/php/updateStudent.php?x=111',
          data:data,
        })
        .done(function (data) {
          console.log(data);
        })
        .fail(function () {
          console.log(2);
        })
      },1000)
    }
  })())

  $(document).ajaxSend(function () {
    $('#tongbu').text('同步中..');
  })
  $(document).ajaxSuccess(function () {
    $('#tongbu').text('同步成功');
  })

})
