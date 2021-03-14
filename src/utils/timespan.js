// return time elapsed 
const timespan = (date)=>{
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);

    var interval = Math.floor(seconds / 31556926);
  
    if (interval >= 1) {
      return interval + checkPlural(interval, " years");
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + checkPlural(interval, " months");
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + checkPlural(interval, " days");
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + checkPlural(interval, " hours");
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + checkPlural(interval, " minutes");
    }
    return Math.floor(seconds) + checkPlural(interval, " seconds");
}

const checkPlural = (num, unit)=>{
    if (num === 1) {
        return unit.slice(0, -1);
    } else {
        return unit;
    }
}

export default timespan;