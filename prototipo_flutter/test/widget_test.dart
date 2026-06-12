import 'package:flutter_test/flutter_test.dart';
import 'package:pareja_goals_prototipo/main.dart';
import 'package:flutter/material.dart';

void main() {
  testWidgets('App builds and shows title', (WidgetTester tester) async {
    await tester.pumpWidget(ParejaGoalsApp());
    expect(find.text('ParejaGoals'), findsOneWidget);
  });
}
