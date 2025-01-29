 const generateYearsArray = (startYear:any, endYear:any) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push({
        key: year.toString(), // Use the year itself as the key
        value: year.toString(), // Year as the value
      });
    }
    return years;
  };
  
  const currentYear = new Date().getFullYear();
 export const allYears = generateYearsArray(currentYear - 10, currentYear + 30); // Generate 20 years (10 past, 10 future)
  
  console.log("dd",allYears);
  