"use client";

import ReactEmbedGist from 'react-embed-gist';

export default function EmbedGist({ gistId, file }: { gistId: `${string}/${string}`, file: string }) {
    return (
        <div className="gist-container not-prose">
            <ReactEmbedGist
                gist={gistId}
                file={file}
                loadingFallback={<p>Loading gist...</p>}
            />
        </div>
    )
}   