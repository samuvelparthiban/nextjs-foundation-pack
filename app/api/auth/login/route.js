import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req){
  await connectDB();
  const { email,password } = await req.json();
  const user = await User.findOne({ email });
  if(!user) return NextResponse.json({error:"Invalid"}, {status:400});
  const valid = await bcrypt.compare(password,user.password);
  if(!valid) return NextResponse.json({error:"Invalid"}, {status:400});
  const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"});
  return NextResponse.json({token});
}