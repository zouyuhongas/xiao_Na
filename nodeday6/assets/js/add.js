$(function(){
    // 入口函数
    $('#sub').on('click',function(){
        // 获取表单数据
        let data = $('#form').serialize();
        // 发送ajax请求
        $.ajax({
            type : 'post',
            url : 'http://127.0.0.1:8080',
            data,
            success : function(res){
                if(res.code ==200){
                    alert(res.msg);
                    location.herf = '/index';
                }
            }
        })

    })
})