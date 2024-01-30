const moment = require('moment-timezone'); // Install moment-timezone library

const date = moment("2024-01-30"); // Replace with your desired date
const timezone_name = "America/Los_Angeles"; // Replace with your chosen timezone

// Set timezone
const timezone_date = date.tz(timezone_name);

// Get hourly times for the entire day
for (let hour = 0; hour < 24; hour++) {
    const current_hour = timezone_date.clone().startOf('hour').add(hour, 'hours').format("HH:mm");
    console.log(current_hour);
}
