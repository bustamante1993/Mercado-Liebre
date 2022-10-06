const express =require('express'); 

/*es una función que encapsula toda la funcionalidad de Express*/

const path =require('path');

/*Path es un modulo que viene por defecto con node, nos permite unificar las rutas tanto relativas
como absolutas de nuestra PC y de nuestro proyecto. Para que le sea mucho mas sencillo a express
identificar en qu elugar nos encontrmos y donde queremos llegar*/

const app = express(); 

/*variable nueva para almacenar en ella la ejecución de express y tener todos
lo métodos de la librería disponibles*/

app.use(express.static(path.resolve(__dirname, 'public')));

//A través del metodo resolve resuelva la siguiente ruta que llamamos con la variable __dirname 
//El objetivo de la anterior linea es poder decirle a Express que queremos tener la carpeta public 
//como un recurso de archivos staticos para que siempre los podamos consumir de manera sencilla 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));

});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));

});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));

});



//Express nos brinda una estructura sencilla para definir cada una de las rutas que estaremos atendiendo 
//y las respuestas que enviará nuestra aplicación. 

//El primer objeto que vemos es app, que guarda la ejecución de Express y contiene la mayor parte 
//de su funcionalidad. 

//Luego, deberemos colocar el método HTTP que queremos atender. 
//Puede ser, por ejemplo: get, post, put, patch o delete. 

//A continuación tenemos, como primer parámetro, un string que representa la ruta a la que ha 
//ingresado nuestro cliente. En este caso se trata del raíz o home del sitio 

//Como segundo parámetro, tendremos el callback que se encargará de responder a la petición. 
//Este callback recibirá al menos dos parámetros:
// ● req → Representa la petición del cliente. 
// ● res → Representa la respuesta del servidor. 
// Ambos son objetos que nos brinda Express y contendrán toda la información y funcionalidad necesaria 
// para trabajar los pedidos y respuestas. 

// No va ser necesario que siempre pongamos el contenido directamente dentro del método. 
// Como todo método, send() puede recibir una variable como parámetro. 

app.listen(process.env.PORT || 3000, () => console.log('servidor corriendo en el puerto 3000'));//

