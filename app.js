let builder = require('botbuilder');
let restify = require('restify');
let Pelicula = require('./classes/movieModel');

//Configurar servidor restify
let server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function(){
console.log('%s listening to %s', server.name,server.url);
});
let connector = new builder.ChatConnector();
server.post('/api/messages',connector.listen());

var bot = new builder.UniversalBot(connector);

var luisAppID = "9b0a8a2a-cf19-40de-9269-7a51b724870a";
var luisApiKey = "6dd4bb44ccb44d178b01c73cac35fc6c";
var luisApiHostname = "westus.api.cognitive.microsoft.com";

const luisModelUrl = "https://" + luisApiHostname + "/luis/v2.0/apps/" + luisAppID + "?subscription-key=" + luisApiKey;

var recognizer = new builder.LuisRecognizer(luisModelUrl);

var intents = new builder.IntentDialog({
    recognizers: [recognizer]
});
 
bot.dialog('/',intents);

intents.matches('Saludar',(session,args,next)=>{
    session.send('Hey! ✌, soy Luisa, la bot de ventas de boletas, como puedo ayudarte?\n\n Intenta algo como: \n*Comprar boleta   \n*Mostrar cartelera');

});

let pelicula = new Pelicula();


intents.matches('MostrarCartelera',(session,args,next)=>{
    session.send('Ok, estas son las peliculas en cartelera: \n\n' + pelicula.BuscarPelicula());

});


