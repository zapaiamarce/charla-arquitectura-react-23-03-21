# La aquitectura tiene que ver con el tamaño del proyecto

# capas

- router/pages
  - entender que quiere hacer el usuario
  - recibir data de la url y del navegador
  - y orquestar components
- components
  - muestran info
  - reciben info
  - se contactan con datos
  - reciben
- ui
  - son chiquitos
  - muestran info
  - no consultan a ninguna API
  - reciben todo via props
- lib
  - datos
  - utils (fechas, objetos)
