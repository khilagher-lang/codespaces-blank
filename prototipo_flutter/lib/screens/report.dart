import 'package:flutter/material.dart';

class ReportScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(12),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Card(child: Padding(padding: EdgeInsets.all(12), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children:[
          Text('Reporte Semanal', style: TextStyle(fontWeight: FontWeight.bold)),
          SizedBox(height:8),
          Text('Resumen automático generado cada lunes.'),
          SizedBox(height:8),
          Text('Cumplimiento por categoría:'),
          SizedBox(height:8),
          LinearProgressIndicator(value:0.8),
          SizedBox(height:8),
          LinearProgressIndicator(value:0.65),
        ])) )
      ],),
    );
  }
}
