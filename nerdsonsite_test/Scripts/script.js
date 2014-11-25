/// <reference path="script.js" />
$(function () {
    //hide update button if form not in edit mode 
    $("#update").hide();
    //reset form
    $("#reset").click(function() {
        $("#singUpForm").get(0).reset();
    });

    //loop to populate carYear select 
    for (i = new Date().getFullYear() ; i > 1900; i--) {
        $("#carYear").append($('<option />').val(i).html(i));
    }


    //add new car 
    $("#submit").click(function (e) {
        e.preventDefault();
        AddCar();
    });
    //update car
    $("#update").click(function (e) {
        e.preventDefault();
        updateCar(id);
    });


    function AddCar() {

        var car = {
            Manufacturer: $('#carManufacturer').val(),
            Make: $('#carMake').val(),
            Year: $('#carYear option:selected').val(),
            Colour: $('#carColour').val(),
            PassengerSeat: $('#passengerSeating option:selected').val()
        };

        $.ajax({
            url: '/api/Cars',
            type: 'POST',
            data: JSON.stringify(car),
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                alert("Car add to DB");
                window.location.replace("/CarsList");
            },
            error: function (x, y, z) {
                console.log(x + '\n' + y + '\n' + z);
            }
        });
    }

    //load data into table to view all car 
    $("#carslist").load(GetAllCars());
    function GetAllCars() {
            jQuery.support.cors = true;
            $.ajax({
                url: '/api/Cars',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    drawTable(data);
                },
                error: function (x, y, z) {
                    alert(x + '\n' + y + '\n' + z);
                }
            });
        }

        function drawTable(data) {
            for (var i = 0; i < data.length; i++) {
                drawRow(data[i]);
            }
        }
        function drawRow(rowData) {
            var row = $("<tr />");
            $("#jsontable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
            row.append($("<td> <a class='deleteCars' href=" + rowData.Id + ">Delete</a>/<a class='editCars' href=CarForm?id=" + rowData.Id + "&opration=edit>Edit</a></td>"));
            row.append($("<td class='customerIDCell'>" + rowData.Id + "</td>"));
            row.append($("<td>" + rowData.Manufacturer + "</td>"));
            row.append($("<td>" + rowData.Make + "</td>"));
            row.append($("<td>" + rowData.Year + "</td>"));
            row.append($("<td>" + rowData.Colour + "</td>"));
            row.append($("<td>" + rowData.PassengerSeat + "</td>"));
        }

        //click event to delete car 
        $(document).on('click', '#jsontable a.deleteCars', function (e) {
            e.preventDefault();
            var id = $(this).attr("href");
            var parent = $(this).parent().parent();
                  
            $.ajax({
                url: 'api/Cars/' + id,
                type: 'DELETE',
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    alert("Car ID " + id + " deleted!!");
                    parent.slideUp(300, function () {
                        parent.remove();
                    });
                },
                error: function (x, y, z) {
                    console.log(x + '\n' + y + '\n' + z);
                }
            });
        });


    // get url Parameters
        function GetURLParameter(sParam)
        {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return decodeURIComponent(sParameterName[1]);
                }
            }
        }

        //get car id and form opration mode
        var id = GetURLParameter("id");
        var opration = GetURLParameter("opration");

        if (id != null && opration != null) {
            
            GetCar(id);
            if (opration == "edit") {
                $("#update").show();
                $("#submit").hide();
            }
            else {
                $("#update").hide();
                $("#submit").show();
            }
        }

        

        //get car data from database 
        function GetCar(cid) {
            if (cid.length)
            {
                $.ajax({
                    url: 'api/Cars/' + id,
                    type: 'GET',
                    dataType: 'json',
                    success: function (Cars) {
                        $("#carManufacturer").val(Cars.Manufacturer);
                        $("#carMake").val(Cars.Make);
                        $("#carYear").val(Cars.Year);
                        $("#carColour").val(Cars.Colour);
                        $("#passengerSeating").val(Cars.PassengerSeat);
                    },
                    error: function (x, y, z) {

                        console.log(x + '\n' + y + '\n' + z);
                    }
                });
            }
        }



        //update car 
        function updateCar(id) {
            jQuery.support.cors = true;
            var car = {
                Id : id,    
                Manufacturer: $("#carManufacturer").val(),
                Make: $("#carMake").val(),
                Year: $("#carYear option:selected").val(),
                Colour: $("#carColour").val(),
                PassengerSeat: $("#passengerSeating option:selected").val()
            };

            $.ajax({
                url: 'api/Cars/'+id,
                type: 'PUT',
                data: JSON.stringify(car),
                contentType: "application/json;charset=utf-8",
                success: function (car) {
                    alert("Car updated " + id + " to DB");
                    window.location.replace("/CarsList");
                    
                },
                error: function (x, y, z) {
                    console.log(x + '\n' + y + '\n' + z);
                }
            });
        }
});