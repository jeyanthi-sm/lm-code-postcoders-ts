# The Tasks

Work with your pair on solving the tasks below. Your pair will be assessing how you approach the problems, rather than your ability to immediately solve them.

### Firstly, three bugs:

1. The app doesn’t load properly, a pesky alert keeps popping up. Find out why and fix the root cause.

2. The output from the API call doesn't match the defined type for the data. Figure out what's wrong and fix the type.

3. Once the above is fixed, the app should display the number of areas/places per postcode but it’s stuck at 0. Debug it and find a fix.

### Then two features:

4. The app is pretty useless as it’s hard-coded to always return search results for “BB10”. Create a way for the user to provide the postcode they want results for. Only the “outcode” part of the postcode needs to be provided (e.g. “M1” rather than the full “M1 7ED”).

5. In addition to displaying the number of areas/places for a given outcode, display the data for each area/place and render it in a MUI Card (https://mui.com/material-ui/react-card/). You'll need to install a new npm package for this.

### And one performance improvement:

6. Reduce the number of API calls being made by using a cache. If the user queries “BB10” twice, couldn’t the user just be presented with the data from the first request when they make the second one?
