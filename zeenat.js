
function FormSubmit(){
    var fName = document.getElementById('firstName').value;
    var email = document.getElementById('eMail').value;
    var password = document.getElementById('mypassword').value;
    var number = document.getElementById('myNumber').value;
    var education = document.getElementById('myEducation').value;
    var gender = document.getElementById('male').value;
    var gender = document.getElementById('female').value;
    var address = document.getElementById('address').value; 
    
    document.getElementById('dynamicTable').innerHTML  ="<h1>Check Again</h1>"+
     "<table>"+
							"<thead>"+
								"<tr>"+
									"<th> First Name </th>"+
                                    "<th> Email</th>"+
                                    "<th> Password</th>"+
                                    "<th> Number</th>"+
                                    "<th> Education</th>"+
                                    "<th> Gender</th>"+
                                    "<th> Address</th>"+
								"</tr>"+
							"</thead>"+
							"<tbody>"+
								"<tr>"+
									"<td>"+ fName +"</td>"+
                                    "<td>"+ email +"</td>"+
                                    "<td>"+ password +"</td>"+
                                    "<td>"+ number +"</td>"+
                                    "<td>"+ education +"</td>"+
                                    "<td>"+ gender +"</td>"+
                                    "<td>"+ address +"</td>"+
								"</tr>"+	
							"</tbody>"+
                        "</table>"
                      
                    }