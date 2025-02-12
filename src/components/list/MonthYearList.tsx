export const months = [
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





// console.log("New Month List:", newMonthList);


const currentYear = new Date().getFullYear(); // Get current year

// Generate array for current year and previous 5 years
export const years = Array.from({ length: 6 }, (_, i) => {
  const year = currentYear - i;
  return { value: String(year), label: String(year) };
});


