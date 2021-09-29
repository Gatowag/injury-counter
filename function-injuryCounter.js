/**
 * Calculate the days since the last injury.
 * @return {number}
 * @customfunction
 */

function injuryCounter() {
	const ss = SpreadsheetApp.getActiveSpreadsheet();
	const tab2 = ss.getSheetByName("Release Order");
	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	let thisRange = SpreadsheetApp.getActiveRange();
	let thisRow = thisRange.getRow();
	let thisDate = new Date(tab2.getRange("D" + thisRow).getValue());
	let lastInjury;

	for (i = 1; i < 200; i++){
		if (tab2.getRange("J" + (thisRow + i)).getValue() != "") {
			lastInjury = new Date (tab2.getRange("D" + (thisRow + i)).getValue());
			break;
		};
	};

	// return thisDate;
	return Math.floor((Date.parse(thisDate) - Date.parse(lastInjury)) / millisecondsPerDay);
}