import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class FirebaseService {
  FirebaseService._();
  static final FirebaseService instance = FirebaseService._();

  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _db = FirebaseFirestore.instance;
  final FirebaseMessaging _messaging = FirebaseMessaging.instance;

  Future<void> init() async {
    // Request permissions (iOS)
    try {
      await _messaging.requestPermission();
    } catch (_) {}
    // Optionally handle background messages in a real app
  }

  Future<User?> ensureSignedIn() async {
    if(_auth.currentUser!=null) return _auth.currentUser;
    final cred = await _auth.signInAnonymously();
    return cred.user;
  }

  User? get currentUser => _auth.currentUser;

  // Simple streams
  Stream<QuerySnapshot<Map<String,dynamic>>> tasksStream(){
    final uid = currentUser?.uid ?? '';
    return _db.collection('tasks').where('userId', isEqualTo: uid).snapshots();
  }

  Future<void> addTask(Map<String,dynamic> task) async {
    await _db.collection('tasks').add({
      ...task,
      'createdAt': Timestamp.now(),
    });
  }

  Stream<QuerySnapshot<Map<String,dynamic>>> rewardsStream(){
    final uid = currentUser?.uid ?? '';
    // For simplicity, show rewards proposed by or for user
    return _db.collection('rewards').where('participants', arrayContains: uid).snapshots();
  }

  Stream<QuerySnapshot<Map<String,dynamic>>> chatStream(String coupleId){
    return _db.collection('chats').doc(coupleId).collection('messages').orderBy('createdAt').snapshots();
  }

  Future<void> addProgress(String goalId, Map<String,dynamic> data) async {
    await _db.collection('progress').add({
      'goalId': goalId,
      'userId': currentUser?.uid,
      'date': Timestamp.now(),
      ...data,
    });
  }

  Future<void> proposeReward(Map<String,dynamic> payload) async {
    await _db.collection('rewards').add({
      ...payload,
      'createdAt': Timestamp.now(),
    });
  }

  Future<void> validateReward(String rewardId) async {
    await _db.collection('rewards').doc(rewardId).update({'status':'VALIDATED'});
  }

  Future<void> sendChatMessage(String coupleId, Map<String,dynamic> message) async {
    await _db.collection('chats').doc(coupleId).collection('messages').add({
      ...message,
      'createdAt': Timestamp.now(),
    });
  }

  Future<String?> getFcmToken() async => await _messaging.getToken();
}
