const generateMonthsArray = () => {
    const currentYear = new Date().getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    return months.map((month, index) => ({
      key: `${currentYear}-${index + 1}-1`, // Format: "Year-Month-1"
      label: month,
    }));
  };
  
  export const allMonths = generateMonthsArray();
  console.log(allMonths);

  
  