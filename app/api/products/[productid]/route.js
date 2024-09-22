import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function PUT(req, {params}){
const productId = params.productid;

const payload = await req.json();
const filter = {_id:productId}
await mongoose.connect(connectionSrt);
const result = await Product.findByIdAndUpdate(productId, payload);

return NextResponse.json({result, success:true});
};


export async function GET(req, {params}){
    const productId = params.productid;
    
    await mongoose.connect(connectionSrt);
    const result = await Product.findById(productId);
    
    return NextResponse.json({result, success:true});
};


export async function DELETE(req, {params}){
    const productId = params.productid;
    await mongoose.connect(connectionSrt);

    const result = await Product.findByIdAndDelete(productId);
    return NextResponse.json({result, success:true});

};