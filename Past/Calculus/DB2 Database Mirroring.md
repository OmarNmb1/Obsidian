Base de datos principal y base de datos espejo
Se crea una fiel copia de la base de datos principal
Queda una copia de la base de datos en el momento que se hizo el backup
![[Pasted image 20250407092243.png]]
El mirroring entra a rem'lazar la base de datos principal mientras esta se recupera del incidente. 
![[Pasted image 20250407092738.png]]
![[Pasted image 20250407093113.png]]
![[Pasted image 20250407093244.png]]

Database Splitting
![[Pasted image 20250407100231.png]]
![[Pasted image 20250407100602.png]]
Coherencia de los datos = Integridad

La misma base de datos partida en partes pequeñas alojadas en distintos servidores, 2 o más. El splitting es otra tecnica que se puede utilizar para manejar grandes volumenes de carga de trabajo.
![[Pasted image 20250407100740.png]]
Si bien ayuda a distribuir mejor la carga, como desventaja tenemos la latencia la cual se presenta al buscar en los nodos.
![[Pasted image 20250407101017.png]]
![[Pasted image 20250407101601.png]]
Como van creciendo todas las bases de datos
La estimacion de crecimiento es ofrecer o planificar cuando se va a crear la base de datos de cuanto espacio se va a necesitar desde el principio hasta el final.
![[Pasted image 20250407102133.png]]
![[Pasted image 20250407102931.png]]
![[Pasted image 20250407103226.png]]
![[Pasted image 20250407103322.png]]
![[Pasted image 20250407103355.png]]
![[Pasted image 20250407103602.png]]
![[Pasted image 20250407103837.png]]
![[Pasted image 20250407104139.png]]
![[Pasted image 20250407104235.png]]
