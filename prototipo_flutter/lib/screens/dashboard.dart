import 'package:flutter/material.dart';

class DashboardScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Card(
                  child: Padding(
                    padding: EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Progreso Pareja', style: TextStyle(fontSize:16, fontWeight: FontWeight.bold)),
                        SizedBox(height:12),
                        Row(children: [
                          CircularProgressIndicator(value:0.65),
                          SizedBox(width:16),
                          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('Ahorro: \$1,250 / \$2,000'), Text('Rachas: Lectura 7 días')])
                        ])
                      ],
                    ),
                  ),
                ),
              )
            ],
          ),
          SizedBox(height:12),
          Card(
            child: Padding(
              padding: EdgeInsets.all(12),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children:[
                Text('Acciones recientes', style: TextStyle(fontWeight: FontWeight.w600)),
                SizedBox(height:8),
                Text('María completó "Ejercicio" (racha +1)'),
                Text('Carlos propuso recompensa: "Cenar fuera"'),
              ])
            )
          ),
        ],
      ),
    );
  }
}
