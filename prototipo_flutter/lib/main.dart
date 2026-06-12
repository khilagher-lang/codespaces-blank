import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'services/firebase_service.dart';
import 'screens/dashboard.dart';
import 'screens/today.dart';
import 'screens/rewards.dart';
import 'screens/chat.dart';
import 'screens/report.dart';
import 'screens/settings.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  await FirebaseService.instance.init();
  runApp(ParejaGoalsApp());
}

class ParejaGoalsApp extends StatefulWidget {
  @override
  State<ParejaGoalsApp> createState() => _ParejaGoalsAppState();
}

class _ParejaGoalsAppState extends State<ParejaGoalsApp> {
  ThemeMode _themeMode = ThemeMode.light;
  int _idx = 0;

  final _pages = [
    DashboardScreen(),
    TodayScreen(),
    RewardsScreen(),
    ChatScreen(),
    ReportScreen(),
  ];

  void toggleTheme(){
    setState(()=> _themeMode = _themeMode==ThemeMode.light? ThemeMode.dark : ThemeMode.light);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ParejaGoals',
      theme: ThemeData.light().copyWith(
        primaryColor: Color(0xFF4F46E5),
        colorScheme: ColorScheme.fromSwatch().copyWith(secondary: Color(0xFF06B6D4)),
      ),
      darkTheme: ThemeData.dark().copyWith(
        primaryColor: Color(0xFF7C5CFF),
        colorScheme: ColorScheme.fromSwatch(brightness: Brightness.dark).copyWith(secondary: Color(0xFF19E6F1)),
      ),
      themeMode: _themeMode,
      home: FutureBuilder(
        future: FirebaseService.instance.ensureSignedIn(),
        builder: (context, snapshot){
          if(snapshot.connectionState!=ConnectionState.done) return Scaffold(body: Center(child: CircularProgressIndicator()));
          return Scaffold(
            appBar: AppBar(
              title: Text('ParejaGoals'),
              actions: [
                IconButton(
                  icon: Icon(_themeMode==ThemeMode.light? Icons.dark_mode : Icons.light_mode),
                  onPressed: toggleTheme,
                )
              ],
            ),
            body: _pages[_idx],
            bottomNavigationBar: BottomNavigationBar(
              currentIndex: _idx,
              onTap: (i)=> setState(()=> _idx = i),
              items: [
                BottomNavigationBarItem(icon: Icon(Icons.dashboard), label: 'Dashboard'),
                BottomNavigationBarItem(icon: Icon(Icons.today), label: 'Mi Día'),
                BottomNavigationBarItem(icon: Icon(Icons.card_giftcard), label: 'Recompensas'),
                BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
                BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Reporte'),
              ],
            ),
            drawer: Drawer(
              child: ListView(
                children: [
                  DrawerHeader(child: Text('Cuenta — Pareja')), 
                  ListTile(title: Text('Settings'), onTap: ()=> Navigator.push(context, MaterialPageRoute(builder: (_)=> SettingsScreen()))),
                ],
              ),
            ),
          );
        }
      )
    );
  }
}
