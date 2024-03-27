import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const POST = async (req, res) => {
    try{
        const data = await req.json();
        const user_id = data.user_id;
        const module = data.module;

        console.log(data);

        const sql = `
            SELECT *
            FROM scores
            WHERE user_id = ? AND module = ?
        `;

        const score = await query({
            query: sql,
            values: [user_id, module],
        });

        if (score.length > 0) {
            // retuen complected only if the correct is more than half of the total
            if (score[0].correct >= score[0].total / 2) {
                return NextResponse.json(
                    { isCompleted: true },
                    { status: 200 }
                );
            }
            else {
                return NextResponse.json(
                    { isCompleted: false },
                    { status: 200 }
                );
            }

        }

        return NextResponse.json(
            { isCompleted: false },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 400 }
        );
    }
}