import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AppService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USER || 'qcm_user',
      host: process.env.DB_HOST || 'db',
      database: process.env.DB_NAME || 'qcm_db',
      password: process.env.DB_PASSWORD || 'strongpassword',
      // 👇 LA CORRECTION EST ICI : On ajoute || '5432' DANS le parseInt
      port: parseInt(process.env.DB_PORT || '5432'),
    });
  }

  getHello(): string {
    return 'API TCF Canada en ligne ! 🚀';
  }

  async getOralQuestions() {
    const client = await this.pool.connect();
    try {
      const questionsQuery = await client.query(
        "SELECT * FROM questions WHERE category = 'oral' ORDER BY RANDOM() LIMIT 10"
      );

      const questionsWithChoices = await Promise.all(
        questionsQuery.rows.map(async (q) => {
          const choices = await client.query(
            'SELECT id, text FROM choices WHERE question_id = $1',
            [q.id],
          );
          return { ...q, choices: choices.rows };
        }),
      );

      return questionsWithChoices;
    } finally {
      client.release();
    }
  }

  async checkAnswer(choiceId: number) {
    const client = await this.pool.connect();
    try {
      const result = await client.query(
        'SELECT is_correct FROM choices WHERE id = $1',
        [choiceId],
      );
      return { correct: result.rows[0]?.is_correct || false };
    } finally {
      client.release();
    }
  }
}