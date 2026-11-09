import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('database.sqlite');
const csvFile = './savant/pitches_2026.csv'

db.exec(`
  CREATE TABLE IF NOT EXISTS pitches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    pitch_type TEXT,
    velocity REAL,
    player TEXT
  );
`);

const insertStatement = db.prepare('INSERT INTO pitches (date, pitch_type, velocity, player) VALUES (?, ?, ?, ?)');
insertStatement.run('2026-10-10', 'SL', 86.5, 'Cease, Dylan');

const singleUser = db.prepare('SELECT * FROM pitches WHERE player = ?').get('Cease, Dylan');
console.log('Query', singleUser);

const allPitches = db.prepare('SELECT * FROM pitches').all();
console.log('All pitches:', allPitches);

db.close();
