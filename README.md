Evaluación módulo 3: Buscador de personajes. memo
El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo, su ejecución se estructura como veremos a continuación.point_down

Listado de personajes white_check_mark
En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a utilizar el servicio de: https://rickandmortyapi.com/documentation/#get-all-characters, que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:

Foto camera_flash
Nombre speech_balloon
Especie alien :person_with_pouting_face:
Filtrado de personajes white_check_mark
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre mag. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

Componentes del listado de personajes white_check_mark
El listado debe tener los siguientes componentes como mínimo:

Componente para los filtros
Componente para el listado
Componente para la tarjeta de cada personaje del listado
Componente para el detalle de cada personaje.
Detalle de personajes white_check_mark
Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo seedling o muerto skull.

Detallitos de calidad sparkles
Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta <form/>.
Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.
BONUS: Mejoras visuales rocket
Mostrar la especie y si un personajes está muerto con un icono.
Usar algún sistema de grid para pintar el listado de personajes.
Que funcione bien el responsive en dispositivos pequeños.
BONUS: URL compartible twisted_rightwards_arrows
Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente debemos mostrar un mensaje del tipo "El personaje que buscas no existe".
BONUS: Ordenación page_facing_up
Ordenar alfabéticamente el listado.