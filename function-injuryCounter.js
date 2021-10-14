/**
 * Calculate the days since the last injury.
 * @return {number}
 * @customfunction
 */

function injuryCounter() {
	const ss = SpreadsheetApp.getActiveSpreadsheet();
	const tab = ss.getActiveSheet();
	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	let thisRange = SpreadsheetApp.getActiveRange();
	let thisRow = thisRange.getRow();
	let thisDate = new Date(tab2.getRange("D" + thisRow).getValue());
	let lastInjury;

	/*	the function is willing to scan through 200 rows
		until it finds another cell with any values, but
		will break when it finds one in the for loop ↓
	*/
	for (i = 1; i < 200; i++){
		// what happens when it finds a cell with data:
		if (tab.getRange("P" + (thisRow + i)).getValue() != "") {
			// sets lastInjury to the date value found in that row
			lastInjury = new Date(tab.getRange("D" + (thisRow + i)).getValue());
			// modifies that date to midnight, this way we don't get a miscount
			lastInjury.setHours(0,0,0,0);
			// stops the loop
			break;
		};
	};

	// outputs number of days since last injury;
	return Math.floor((Date.parse(thisDate) - Date.parse(lastInjury)) / millisecondsPerDay);
}