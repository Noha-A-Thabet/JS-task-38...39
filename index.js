//Task 1

let day = "   tuesday  ";
day = day[3].toUpperCase() + day.slice(4).trim();


switch (day) {
    case 'Friday':
    case 'Saturday':
    case "Sunday":
        console.log(`No Appointments Available in ${day}`);
        break;
    case 'Monday':
    case 'Thursday':
        console.log(`in ${day} From 10:00 AM To 5:00 PM`);
        break;
    case 'Tuesday':
        console.log(`in ${day} From 10:00 AM To 6:00 PM `);
        break;
    case 'Wednesday':
        console.log(`in ${day} From 10:00 AM To 7:00 PM `);
        break;
    case 'World':
        console.log(`Its Not A Valid Day`);
        break;
}


