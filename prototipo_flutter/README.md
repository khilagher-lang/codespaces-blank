Prototipo Flutter - ParejaGoals

Requisitos:

Cómo ejecutar:

```bash
cd /workspaces/codespaces-blank/prototipo_flutter
flutter pub get
flutter run
```

- Sin backend; datos en memoria para validar UX y flujo.

Firebase (Auth + Firestore + FCM):

1. Crea un proyecto en Firebase Console.
2. Añade aplicaciones Android / iOS y descarga los archivos de configuración:
	- Android: `google-services.json` -> colócalo en `android/app/`
	- iOS: `GoogleService-Info.plist` -> agrégalo al Runner en Xcode
3. Habilita Authentication (por ejemplo, Anonymous o Email) y crea las colecciones `tasks`, `rewards`, `chats`, `progress` en Firestore (modo de pruebas o reglas según prefieras).
4. En Firebase Console, habilita Cloud Messaging para obtener tokens.
5. Desde la raíz del proyecto ejecuta:

```bash
flutter pub get
flutter run
```

Notas:
- El prototipo ya incluye inicialización de Firebase y un servicio básico en `lib/services/firebase_service.dart`.
- Para envío de notificaciones en producción necesitarás configurar credenciales de APNs (iOS) y el archivo `google-services.json` (Android) además de las reglas de seguridad.