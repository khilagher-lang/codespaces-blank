import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../services/firebase_service.dart';

class RewardsScreen extends StatefulWidget {
  @override
  State<RewardsScreen> createState() => _RewardsScreenState();
}

class _RewardsScreenState extends State<RewardsScreen> {
  void validate(String id) async {
    await FirebaseService.instance.validateReward(id);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Recompensa validada')));
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(12),
      child: StreamBuilder<QuerySnapshot<Map<String,dynamic>>>(
        stream: FirebaseService.instance.rewardsStream(),
        builder: (context,snap){
          if(!snap.hasData) return Center(child: CircularProgressIndicator());
          final docs = snap.data!.docs;
          if(docs.isEmpty) return Center(child: Text('No hay recompensas'));
          return ListView(
            children: docs.map((d)=> Card(
              child: ListTile(
                title: Text(d.data()['description'] ?? d.data()['desc'] ?? 'Recompensa'),
                subtitle: Text('Estado: ${d.data()['status'] ?? 'PROPOSED'}'),
                trailing: (d.data()['status'] ?? '')!='VALIDATED'
                  ? TextButton(onPressed: ()=> validate(d.id), child: Text('Validar'))
                  : Icon(Icons.check_circle, color: Colors.green),
              ),
            )).toList(),
          );
        }
      ),
    );
  }
}
