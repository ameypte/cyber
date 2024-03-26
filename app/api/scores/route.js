import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const GET = async (req, res) => {
    return NextResponse.json({ message: "Scores" }, { status: 200 });
}

export const POST = async (req, res) => {
    try {
        const data = await req.json();
        const user_id = data.user_id;
        const module = data.module;
        const total = data.total;
        const correct = data.correct;

        const sql = `
            INSERT INTO scores (user_id, module, total, correct)
            VALUES (?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
            total = VALUES(total),
            correct = VALUES(correct)
        `;

        const score = await query({
            query: sql,
            values: [user_id, module, total, correct],
        });

        if (score.affectedRows > 0) {
            return NextResponse.json({ score: score }, { status: 200 });
        }

        return NextResponse.json(
            { message: "Failed to save score" },
            { status: 400 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: error.message},
            { status: 400 }
        );
    }
}