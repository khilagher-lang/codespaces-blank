import 'package:flutter/material.dart';
import '../services/firebase_service.dart';

class ChatScreen extends StatefulWidget {
  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _controller = TextEditingController();
  List<Map<String,String>> msgs = [
    {'who':'María','text':'¡Buen trabajo hoy!'},
    {'who':'Carlos','text':'Vamos por la racha de lectura.'}
  ];
  String coupleId = 'default';

  void send(){
    final t = _controller.text.trim(); if(t.isEmpty) return;
    setState(()=> msgs.add({'who':'Tú','text':t}));
    // send to firestore/chat
    FirebaseService.instance.sendChatMessage(coupleId, {'from': FirebaseService.instance.currentUser?.uid ?? 'anon','text': t});
    _controller.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(child: ListView(
          padding: EdgeInsets.all(12),
          children: msgs.map((m)=> Padding(
            padding: EdgeInsets.symmetric(vertical:6),
            child: Row(children: [Text('${m['who']}: ', style: TextStyle(fontWeight: FontWeight.bold)), Expanded(child: Text(m['text']!))]),
          )).toList(),
        )),
        SafeArea(child: Padding(
          padding: EdgeInsets.all(8),
          child: Row(children: [
            Expanded(child: TextField(controller: _controller, decoration: InputDecoration(hintText: 'Escribe...'))),
            SizedBox(width:8),
            ElevatedButton(onPressed: send, child: Text('Enviar'))
          ]),
        ))
      ],
    );
  }
}
