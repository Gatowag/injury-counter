# injury-counter
This is a simple formula for Google Apps Script built for the production doc for the youtube series [Modern Rogue](https://youtube.com/modernrogue).

There are a lot of injuries on the show, and we want to keep track of them, so we have a column dedicated to when an injury occurs in the tab where we keep track of all published videos.

![Detailed view of a spreadsheet, showing about 20 rows of data. The rightmost column has a header reading "Injury?" Three rows have data in the column, and their numbers match the difference between each respective date associated to that row.](https://i.imgur.com/lnPE839.png)

An empty cell indicates no injury, but where there is an injury we want the number of days since the last injury. This formula finds when the last injury just before itself and references an "air date" column to calculate the days between.

Now a user only needs to type "=injuryCounter" into the spreadsheet and it'll do the rest of the work for them.