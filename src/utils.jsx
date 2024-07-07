export const getToday = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
export const getWeekFromToday = () => {
    const weekFromToday = new Date();
    weekFromToday.setDate(weekFromToday.getDate() + 30);
    const weekDay = String(weekFromToday.getDate()).padStart(2, '0');
    const weekMonth = String(weekFromToday.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const weekYear = weekFromToday.getFullYear();
  
    const formattedWeekFromToday = `${weekYear}-${weekMonth}-${weekDay}`;
  
    return formattedWeekFromToday;
  }