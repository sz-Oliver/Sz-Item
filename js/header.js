$(()=>{

    $.ajax({
        type:'get',
        url:'header.html',
        success:function(html){
            $(".header").html(html);
            var url=location.pathname.split("/")[2];
            $("a[href='"+url+"']").parent().addClass("active");
        }
    })
})