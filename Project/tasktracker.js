$(document).ready(function()
{


var maindata;
function createRow(val){
    var tr = $('<tr>');
    tr.append('<td>' + val.assigned + '</td>');
    tr.append('<td>' + val.date + '</td>');
    tr.append('<td>' + val.name + '</td>');


    $('#ex1').append(tr);
}
$.ajax({

        url: 'tasktracker.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {
            maindata=data;


            $(maindata.tasktracker).each(function (index,value) {




                createRow(value);
                console.log(value.name);
                // console.log(value.date);






            });
            //var maindata= data;
            console.log(maindata);
        }



    });

console.log(maindata);

$("#submit").click(function () {
    $('#ex1').empty();
    console.log("hi"+maindata.tasktracker);





    var counter = {};




    counter.name = $("#usr").val();
   counter.date = $("#usr1").val();
    counter.assigned = $("#assign").val();

    maindata.tasktracker.push(counter);
    console.log(maindata);
    $.each(maindata.tasktracker,function(index, value){
        console.log(maindata);
        console.log(index + "index");
        createRow(value);


    });








console.log("hello");
});


});