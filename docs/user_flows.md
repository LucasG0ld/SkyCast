# User Flows - SkyCast

## Flow 1: First Launch (Empty State)
1. User opens the app ➔ App detects no saved cities.
2. App shows "Welcome Screen":
   - **Primary Action:** "Search for a city" ➔ Opens Search Bar.
   - **Secondary Action:** "Use my location" ➔ Requests GPS ➔ Fetches weather ➔ Redirects to Dashboard.

## Flow 2: Daily Usage (Dashboard)
1. User opens the app ➔ Fast loader shows up.
2. Dashboard displays the last viewed city.
3. User scrolls vertically ➔ Detailed weather cards appear (UV, Air, Forecast).
4. User swipes horizontally ➔ Switches to the next saved city.
5. Background changes colors and landscape based on the city's local time and weather.

## Flow 3: Adding/Managing Cities
1. User clicks "Search/Plus" icon.
2. User types city name ➔ Selects from list ➔ City is added to the swipe list.
3. User goes to Settings ➔ Deletes a city or changes the default order.