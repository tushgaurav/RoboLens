export function generateUniqueId() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Get the current day of the week
  const hours = String(currentDate.getHours()).padStart(2, "0"); // Get the current hour
  const minutes = String(currentDate.getMinutes()).padStart(2, "0"); // Get the current minute
  const seconds = String(currentDate.getSeconds()).padStart(2, "0"); // Get the current second

  // Concatenate the components to form the unique id
  const uniqueId = `${dayOfWeek.toLowerCase()}${hours}${minutes}${seconds}`;

  return uniqueId;
}

// Example usage
const uniqueId = generateUniqueId();
console.log(uniqueId);
