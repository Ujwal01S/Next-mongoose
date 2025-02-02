import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

    let data = [];
    let success = true;
    try {
        await mongoose.connect(connectionSrt);
        data = await Product.find();
        // console.log(data);
        
    } catch (error) {
        data = {result: 'error'}
        success= false
    }
    return NextResponse.json({data,success});
};

export async function POST(req){
    const payload = await req.json();

    await mongoose.connect(connectionSrt);

    const product =await new Product(payload).save();
    // const result = await product.save();
    return NextResponse.json({product, success:true});
};