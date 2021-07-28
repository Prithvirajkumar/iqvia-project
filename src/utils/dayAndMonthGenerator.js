let day = new Array(7);
day[0] = "Sun";
day[1] = "Mon";
day[2] = "Tue";
day[3] = "Wed";
day[4] = "Thu";
day[5] = "Fri";
day[6] = "Sat";

let month = new Array(12);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

export const dayGenerator = (inputEPOC) => {
  const dayInWords = day[inputEPOC.getDay()];
  return dayInWords;
};

export const monthGenerator = (inputEPOC) => {
  const monthInWords = month[inputEPOC.getMonth()];
  return monthInWords;
};
