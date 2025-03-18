interface DocumentIdPageProps {
    params: { documentId: string };
}

import Editor from './editor';
import React from 'react';

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const { documentId } = params;
    
    return (
        <div>
            <p>Document ID: {documentId}</p>
            <Editor/>
        </div>
    );
};

export default DocumentIdPage;
