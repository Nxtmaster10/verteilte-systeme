import React from 'react';
import {prisma} from "@/lib/client";

async function Page({params}: { params: { id: string, version?: string[] } }) {
    const version = parseInt(params.version ? params.version[0] : "0");
    const file = await prisma.files.findUnique({
        where: {
            id: params.id
        },
        include: {Changelog: true}
    });
    return (
        <div>
            <h2>{file?.name}</h2>
            {file?.Changelog.length ?
                <p>{file?.Changelog.find(changelog => changelog.version === version)?.content}</p> :
                <p>Content: {file?.content}</p>
            }
        </div>
    );
}

export default Page;