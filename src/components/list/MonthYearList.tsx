export const monthList = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" }
];



// Get current month as "MM" format (e.g., "03" for March)
const currentMonthValue = String(new Date().getMonth() + 1).padStart(2, "0");

// Filter to get months from January to the current month
export const months = monthList.filter(m => m.value <= currentMonthValue);

console.log("Current Month:", monthList.find(m => m.value === currentMonthValue));
// console.log("New Month List:", newMonthList);



export const years = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" }
];
