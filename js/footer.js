$(()=>{
    $.ajax({
        type:'get',
        url:'footer.html',
        success:function(html){
            $(".footer").html(html);
        },
        error:function(err){
            throw err;
        }
    })
})