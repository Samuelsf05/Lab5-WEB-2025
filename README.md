# Labo 5
## ¿Qué resultado arroja esta funcionalidad de Vite al crear el proyecto?
- Se genera un proyecto preconfigurado de React con una estructura básica y predefinida. Esto permite empezar a programar en React sin configuraciones manuales.

## ¿Por qué el componente MyButton se comporta igual que el HTML puro?
- Porque los componentes de React devuelven JSX, que es una extensión de JavaScript que se transforma en funciones que generan HTML en el DOM. Por eso, aunque parece “HTML puro”, en realidad es JSX renderizado por React.

## ¿Qué significa className en React?
- En JSX no se puede usar la palabra class (reservada en JS), por eso React utiliza la propiedad className, que al final se traduce al atributo class en el HTML real.

## ¿Las props tienen un límite?
- No. Se puede pasar cualquier número de props a un componente, ya que son simplemente parámetros de una función. El único límite es el que definas en la lógica de dicha aplicación.

## ¿Quién define las props?
- El componente padre es quien define y envía las props al componente hijo. El hijo solo las recibe y las usa, no puede modificarlas.