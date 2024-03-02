import { NextResponse } from 'next/server';
import { conStr } from '@/utils/db';
import mongoose from "mongoose";


export async function GET() {

    await mongoose.connect(conStr);

    return NextResponse.json({ message: 'Connected to database!' });
}