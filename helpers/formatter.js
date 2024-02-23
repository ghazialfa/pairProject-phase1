"use strict";

module.exports = {
  time(value) {
    const now = new Date();
    const timeCreate = value.getTime();
    const timeDifference = now.getTime() - timeCreate;

    const millisecondsPerHour = 60 * 60 * 1000;
    const millisecondsPerDay = 24 * millisecondsPerHour;
    const millisecondsPerMonth = 30 * millisecondsPerDay;

    if (timeDifference < millisecondsPerHour) {
      const minutes = Math.floor(timeDifference / (60 * 1000));
      return `${minutes} minutes`;
    } else if (timeDifference < millisecondsPerDay) {
      const hours = Math.floor(timeDifference / millisecondsPerHour);
      return `${hours} hours`;
    } else if (timeDifference < millisecondsPerMonth) {
      const days = Math.floor(timeDifference / millisecondsPerDay);
      return `${days} days`;
    } else {
      const months = Math.floor(timeDifference / millisecondsPerMonth);
      return `${months} months`;
    }
  },
};
