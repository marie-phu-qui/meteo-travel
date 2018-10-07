# Meteo-travel
Meteo travel helps you find a travel destination according to weather conditions.
By default this app will look for the furthest away from your location weather that would be the closest to the weather you are experiencing recently.

# Streches
- Users will be able to insert settings, such as humidity levels, temperature and sky contidion (sunny, cloudy, rainy...) for a kind of weather they are after. 
- Users will also be able to generalize his location weather on the last day - 3 last day or 5 last day for a more precise answer. The app will then have a look for a destination that closely matches thoses conditions.
- The app will be able to say that there is no such thing as a closely matched weather on certain conditions.
- Users will be able to choose a minimum distance to their location (1 000km, 5 000km, 10 000km (close to the diameter of the equator : 12,756 km) or 20 000km (
which doesn't leave much options but will be good for our error testes)).
- With very far away looked for distances the app will be able to return the most weather matched solar system planet to your city in the last 4, 12, 24 hours.

# APIs documentation
The goal of this app is to focus on my APIs controls with both javascripts calls and Ruby.

  | Method | Endpoint | Response | 
  | --- | --- | --- |
  | GET | api/ | array of objects | 


Method : GET 
Route : / API/
(body) - an array of objects

```sh
[
    {
        
    }
]
```


# Stack 
- Using : React & Redux, JavaScript and Ruby
- Librairies : 

