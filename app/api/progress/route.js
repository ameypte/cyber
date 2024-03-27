import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const POST = async (req, res) => {
    const data = await req.json();
    const user_id = data.user_id;
    const totalModules = data.totalModules;
    let noCompletedModules = 0;

    const sql = "SELECT * FROM scores WHERE user_id = ?";

    const scores = await query({
        query: sql,
        values: [user_id],
    });

    scores.forEach(score => {
        if (score.correct >= score.total / 2) {
            noCompletedModules++;
        }
    });

    // return progress percentage
    let progress = (noCompletedModules / totalModules) * 100;
    console.log(progress);
    progress = Math.round(progress);    

    return NextResponse.json(
        { progress: progress },
        { status: 200 }
    );
}
