module.exports = {
themeConfig: {
//logo: '/assets/img/gestor_del_launcher.png',
displayAllHeaders: true, // Default: false
logo: 'https://www.mobiground.com/wp-content/uploads/2015/05/LOGOpq1.png',
nav: [
{ text: 'Home', link: '/' },
{ text: 'Guide', link: '/guide/' },
{ text: 'External', link: 'https://google.com' },
{
text: 'Languages',
ariaLabel: 'Language Menu',
items: [
{ text: 'Chinese', link: '/language/chinese/' },
{ text: 'Japanese', link: '/language/japanese/' }
]
}
],
sidebar: [
'/procedimiento/',
'/launcher/',
'/OVH-Nagios/',
'/Repositorio/',
'/Servicios-Movistar/',
'/Tiempo-Carga-Portales/',
'/Tomcat1c/',
'/Tomcat2m/',
'/front03.mobiground.com/',
'/front04.mobiground.com/',
'/mysqllu/',
'/Contactos/',
'/Enlaces/',
'/TEST/',
]
}
}
