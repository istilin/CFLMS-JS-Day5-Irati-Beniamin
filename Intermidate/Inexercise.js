var emp = JSON.parse(employees);


document.writeln("<table border='2'><tr>");

document.writeln("<td>");
document.writeln("<table border='1' width=100 >");
document.writeln("<tr><td width = 80><b>User ID</b></td><td> <b> Job Title </b> </td><td> <b> First Name </b> </td><td> <b> Last Name </b></td> <td> <b> E-mail Address </b> </td><td> <b> Salary <b> </td></tr>" ) 

for (i = 0; i < emp.length; i++) {
    
    document.writeln("<tr><td>" + emp[i].userId + "</td><td>" + emp[i].jobTitleName + "</td><td>" + emp[i].firstName + "</td><td>" + emp[i].lastName +  "</td><td>" + emp[i].emailAddress + "</td><td>" + emp[i].salary +"</td></tr>");
}
document.writeln("</table>");