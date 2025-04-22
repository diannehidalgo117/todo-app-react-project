/**
 * Date utility functions for the todo app
 * Using standardized YYYY-MM-DD format throughout the application
 */

/**
 * Formats a Date object to YYYY-MM-DD string
 */
export const formatToYYYYMMDD = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

/**
 * Converts a date string from MM/DD/YYYY to YYYY-MM-DD
 */
export const convertFromMMDDYYYY = (dateString: string): string => {
  if (!dateString || !dateString.includes("/")) return dateString;

  const [month, day, year] = dateString.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

/**
 * Converts any date string to a display format for UI
 * Returns a more readable date format
 */
export const formatToDisplayDate = (dateString: string): string => {
  if (!dateString) return "";

  // Ensure we're working with YYYY-MM-DD format first
  let standardDate = dateString;
  if (dateString.includes("/")) {
    standardDate = convertFromMMDDYYYY(dateString);
  }

  try {
    const date = new Date(standardDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch {
    console.error("Invalid date string:", dateString);
    return dateString;
  }
};

/**
 * Converts a Date object to a display format for UI
 */
export const formatDateToDisplay = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

/**
 * Checks if two dates are the same day (ignoring time)
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
