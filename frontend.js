var baseDoc_url = 'http://localhost:8080';
function inicio()
{
	//alert("holaa");
	var enlace = baseDoc_url + "/message";
	$.ajax({
		type:"GET",
		url: enlace,
		success: function(data)
		{
			$("#cuerpo").html("");
			var con = 0;
			for(var i=0; i<data.content.length; i++)
			{
				con = i + 1;
			var tr = `<tr>
			  <td>`+con+`</td>
			  <td>`+data.content[i].id+`</td>
			  <td>`+data.content[i].message+`</td>
			  <td>`+data.content[i].state+`</td>
			  <td>`+data.content[i].fechaRegistro+`</td>
			  <td>`+data.content[i].fechaRecepcion+`</td>
			</tr>`;
			$("#cuerpo").append(tr)
			}

		}
	});
}

function guardarDatos()
{

	var datoenviar = $('#txtvalora').val();;
	var enlace = baseDoc_url + "/post";
	let data = {
		message: datoenviar
	}
	/*
    $.ajax({
        type: "POST",
        url: enlace,
		contentType: "application/json",
		dataType: "json",
        data: {message:datoenviar},
        success: function (data)
       	{
            inicio();
        }
    });
	*/

	$.ajax({
		type: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
		},
		cache: false,
		dataType: 'json',
		url: enlace,
		contentType: "application/json",
		data: JSON.stringify(data),
		success: function (data, textStatus, jqXHR) {
			console.log('success');
			inicio();
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('error');
			inicio();
		}
	});

}