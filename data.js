$(document).ready(function(){
    $.ajax({
        url: "data.json",
        dataType: "json",
        success: function(data){
            var content = "";
            $.each(data, function(index, item){
                content += "<p>" + item.description + "</p>";
            });
            $("#specialdivision").html(content);
        }
    });
});