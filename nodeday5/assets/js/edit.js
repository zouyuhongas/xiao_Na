$(function(){
  // 得到id
  let id = location.search.substring(4);
  console.log(id);
  // 需要在一开始的时候就获得原来的数据
  $.ajax({
    type : 'get',
    url : 'http://127.0.0.1:8080/getHeroById',
    data : {id},
    success : function(res){
      if(res.code ===200){
        // 把表单数据填入表单
        $('#name').val(res.data.name);
        // 性别
        let selector = res.data.gender === '男' ? '#nan' : '#nv';
        $(selector).prop('checked',true);
        // 图片就要在模板文件里面改
        $('#hederSrc').val(res.data.img);
        $('#id').val(res.data.id);
      }
    }
  })

  $('#sub').on('click',function(){
    // 非空判断
    let val= $('#name').val();
    if(val.trim() ===''){
      return;
    }
    // 收集数据
    let data = $('#form').serialize();
    $.ajax({
      type : 'post',
       url : 'http://127.0.0.1:8080/editHeroById',
       data,
       success : function(res){
        if(res.code ===200){
          alert(res.msg);
          location.herf = '/index';
        }
       }

    })
  })

});