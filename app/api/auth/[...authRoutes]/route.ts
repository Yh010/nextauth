import { NextResponse } from "next/server";

export function GET(req: NextResponse, arg: any) {
    console.log(arg.params.authRoutes);
    return NextResponse.json({
        message:"sdgwr"
    })
}

export function POST() {
    return NextResponse.json({
        message:"sdssdd"
    })
}