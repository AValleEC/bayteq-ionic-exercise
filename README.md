# bayteq-ionic-exercise
Ionic/Cordova exercise for Bayteq 

## Setup utilizado:
```
ionic start exercise blank --type=angular --cordova

npm install -g cordova-res

ionic cordova platforms add android --no-resources

cordova-res --copy

ionic cordova prepare android

npm i -g native-run

ionic cordova run android --livereload --external --host=0.0.0.0
```

## Entorno:
```
Ionic:

   Ionic CLI                     : 6.20.1 
   Ionic Framework               : @ionic/angular 6.5.4
   @angular-devkit/build-angular : 15.1.6
   @angular-devkit/schematics    : 15.1.6
   @angular/cli                  : 15.1.6
   @ionic/angular-toolkit        : 6.1.0

Cordova:

   Cordova CLI       : 11.0.0
   Cordova Platforms : android 10.1.2
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 5.0.0, (and 3 other plugins)

Utility:

   cordova-res : 0.15.4
   native-run  : 1.7.1
```

## Fuente de Datos 
Retorna una respuesta estática:
https://randomuser.me/api?results=50&nat=es&seed=a

## Usuarios para Login:
Puede ser cualquier usuario de la fuente de datos, por ejm:
Eva Ortega, Diego Alonso, Christian Vega, etc.

# Evidencias de Funcionamiento

## 1. App Icon & Splashscreen
### Icono:
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/app_icon.png?raw=true)
### Splashscreen:
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/app_splash.png?raw=true)

## 2. Login
### Pantalla Login:
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/login.png?raw=true)
### Validaciones:
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/form_validation.png?raw=true)

## 3. Home
### Card:
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/home.png?raw=true)
### App Bar:
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/appbar_alert.png?raw=true)

## 4. List
### Lista / Boton Favoritos (Toggle):
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/list.png?raw=true)

## 5. Favorites
### Favoritos:
![alt text](https://github.com/AValleEC/bayteq-ionic-exercise/blob/develop/resources/evidences/favorites.png?raw=true)


