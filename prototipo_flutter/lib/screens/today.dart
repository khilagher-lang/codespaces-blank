import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../services/firebase_service.dart';

class TodayScreen extends StatefulWidget {
  @override
  State<TodayScreen> createState() => _TodayScreenState();
}

class _TodayScreenState extends State<TodayScreen> {
  List<Map<String, dynamic>> tasks = [
    {'id':1,'title':'Ejercicio 20 min','category':'Personal','done':false},
    {'id':2,'title':'Revisar presupuesto','category':'Financiera','done':false},
    {'id':3,'title':'Lavar platos','category':'Operativa','done':false},
  ];

  void toggleDone(int id){
    setState(()=> tasks = tasks.map((t)=> t['id']==id? {...t,'done':!t['done']} : t).toList());
    final done = tasks.firstWhere((t)=> t['id']==id)['done'];
    if(done) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('¡Completo!')));
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(12),
      child: Column(
        children: [
          Expanded(
            child: StreamBuilder<QuerySnapshot<Map<String,dynamic>>>(
              stream: FirebaseService.instance.tasksStream(),
              builder: (context,snap){
                if(!snap.hasData) return Center(child: CircularProgressIndicator());
                final docs = snap.data!.docs;
                if(docs.isEmpty) return Center(child: Text('No hay tareas para hoy'));
                return ListView.builder(
                  itemCount: docs.length,
                  itemBuilder: (_,i){
                    final doc = docs[i]; final data = doc.data();
                    final done = data['done']==true;
                    return Card(
                      child: ListTile(
                        leading: GestureDetector(
                          onTap: () async {
                            await doc.reference.update({'done': !done});
                            if(!done) FirebaseService.instance.addProgress(data['goalId'] ?? doc.id, {});
                          },
                          child: Container(
                            width:36,height:36,alignment: Alignment.center,
                            decoration: BoxDecoration(color: done? Theme.of(context).primaryColor : null, borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.grey.shade200)),
                            child: done? Icon(Icons.check,color: Colors.white,size:20) : null,
                          ),
                        ),
                        title: Text(data['title'] ?? 'Tarea'),
                        subtitle: Text(data['category'] ?? ''),
                        trailing: TextButton(onPressed: (){}, child: Text('Abrir')),
                      ),
                    );
                  }
                );
              }
            )
          ),
          SizedBox(height:8),
          ElevatedButton(onPressed: (){
            final uid = FirebaseService.instance.currentUser?.uid;
            if(uid!=null){
              FirebaseService.instance.addTask({'userId':uid,'title':'Nueva tarea','category':'Personal','done':false});
            }
          }, child: Text('Agregar tarea'))
        ],
      ),
    );
  }
}
