import 'package:flutter/material.dart';

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Settings')),
      body: Padding(
        padding: EdgeInsets.all(12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('Preferencias', style: TextStyle(fontWeight: FontWeight.bold)),
          SizedBox(height:12),
          ListTile(title: Text('Notificaciones'), trailing: Switch(value:true, onChanged: (_){}) ),
          ListTile(title: Text('Modo Oscuro'), trailing: Switch(value:false, onChanged: (_){}) ),
        ]),
      ),
    );
  }
}
