# node_Express
Practicing using Node and Express!

Overviewed the diverest strength of Express and its ability to be a highly customizable Framework

Overviewed Middleware such as ones available in NPM like Morgan and Body-Parser, and even self-created middleware!
Morgan is a terminal logger that updates users with the request's method, url, status and the time in milliseconds it took to complete the request.
Body-Parser scans the incoming requests bodies in middleware before your router handlers. This is good for a layer of security, to validate the data of incoming requests!

Created own version of Morgan in a middleware console.logging the built in data request.method and request.url
