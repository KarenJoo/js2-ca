/**
 * Calculates the time difference between the current date and a given date
 *
 * @param {string} dateString - Calculates the time difference
 * @returns {string} the time difference in a user-friendly format (days, hours, minutes, seconds ago).
 *
 * @example
*```js
 * const postDate = "2023-10-18T12:30:00"; // Replace with the actual date string
 * const timeDifference = timeAgo(postDate);
 * ```
 * // When calling this function, the user retrieves a string displaying the time difference.
 */

//chatGPT
export function timeAgo(dateString) {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffMilliseconds = now - postDate;
    const seconds = Math.floor(diffMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} days`;
    } else if (hours > 0) {
      return `${hours} hours`;
    } else if (minutes > 0) {
      return `${minutes} minutes`;
    } else {
      return `${seconds} seconds ago`;
    }
  }
  