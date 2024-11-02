export function getCurrentYMD(yr:Date) {

    const year = yr.getFullYear();
    const month = String(yr.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(yr.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  