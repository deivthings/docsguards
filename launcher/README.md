# Launcher
Texto de prueba

## ConnectorDebt
::: tip Descripción
Se encarga de cobrar todas las deudas de los usuarios, consulta base de datos.
:::

::: warning Dependencias
Este servicio necesita conectividad entre tomcat2m (launcher) y mysql (producción).

Este servicio necesita conectividad entre tomcat1c (Producción) y el proveedor de billing.
:::

Para realizar pruebas e
## ConnectorNotify

## ConnectorRenewal

:::  tip Descripción
Se encarga de checkear si estamos renovando suscripciones en nuestra plataforma.
:::
## GoogleAdsLauncher
::: tip Descripción
Importa reportes de Google con información de las campañas. Permite modificar campañas, pausarlas, ...
:::
## Notify3rd
::: tip Descripción
Este servicio notifica a terceros, p.e. conversiones a agencias, cobros a terceros, SMS, ... Confirma las conversiones a la agencia, proporciona feedback a su plataforma sobre las conversiones exitosas. (la excepción "too recent clicks" es un error de implementacion que no afecta al funcionamiento del sevicio (Google Adwords)).
:::
## ResumenDiarioHC
::: tip Descripción
Historiza los datos de billing y los guardan en las tablas de campañas en H.
:::
## ResumenDiarioHCprio
::: tip Descripción
Historiza los datos de billing y los guardan en las tablas de campañas en H.
Es un subconjunto de campañas con más prioridad, que se ejecutan antes que el resto.
:::




::: danger
This is a dangerous warning
:::

```html
<ul>
<li
v-for="todo in todos"
:key="todo.id"
>
{{ todo.text }}
</li>
</ul>
```

```js
js
export default {
name: 'MyComponent',
}
```

```js
data: [
{
id: 0,
name: 'name value'
}
]
```


::: tip Descripción
Historiza los datos de billing y los guardan en las tablas de campañas en H.
Es un subconjunto de campañas con más prioridad, que se ejecutan antes que el resto.
:::