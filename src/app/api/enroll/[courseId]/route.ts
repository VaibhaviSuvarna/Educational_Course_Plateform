import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { isEnrolled } from "@/lib/enrollments";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions as any);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.email;
    const courseId = parseInt(params.courseId);

    const enrolled = isEnrolled(userId, courseId);

    return NextResponse.json({ enrolled });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to check enrollment" },
      { status: 500 }
    );
  }
}
