import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { enrollUser, isEnrolled, getEnrollments } from "@/lib/enrollments";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions as any);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized. Please sign in to enroll in courses." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { courseId } = body;

    if (!courseId) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 }
      );
    }

    const courseIdNumber = typeof courseId === 'string' ? parseInt(courseId, 10) : courseId;
    
    if (isNaN(courseIdNumber)) {
      return NextResponse.json(
        { error: "Invalid course ID" },
        { status: 400 }
      );
    }

    const userId = session.user.email;

    if (isEnrolled(userId, courseIdNumber)) {
      return NextResponse.json(
        { error: "Already enrolled in this course" },
        { status: 400 }
      );
    }

    const enrollment = enrollUser(userId, courseIdNumber);

    return NextResponse.json(
      { success: true, enrollment },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to enroll" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions as any);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.email;
    const enrollments = getEnrollments(userId);

    return NextResponse.json({ enrollments });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch enrollments" },
      { status: 500 }
    );
  }
}
