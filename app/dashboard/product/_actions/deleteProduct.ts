'use server'

import prisma from "@/lib/db";

const deleteProduct = async (id:string) => {
    try {
        await prisma.product.delete({
        where: { id },
        });
        return true;
    } catch (error) {
        console.error("Error deleting product:", error);
        return false;
    }
 
}

export default deleteProduct