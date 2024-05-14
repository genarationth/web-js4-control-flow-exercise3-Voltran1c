function checkDay(day) {
    const Day = day.toLowerCase();
    if (Day === 'saturday' || Day === 'sunday') {
        console.log("It is the weekend!");
    } else {
        console.log("It is the ordinary day!");
    }
}
checkDay("sunday");