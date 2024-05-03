import Image from "next/image";
import {prisma} from "@/lib/client";
import Link from "next/link";

export default async function Home() {
    const files = await prisma.files.findMany();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {files.map((file) => (
                <Link href={`/file/${file.id}`} key={file.id}>
                    {file.name}
                </Link>
            ))}
        </main>
    );
}
