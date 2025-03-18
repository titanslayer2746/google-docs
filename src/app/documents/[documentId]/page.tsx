interface DocumentIdPageProps {
    params: { documentId: string };
}

import Editor from './editor';
import React from 'react';

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const { documentId } = params;
    
    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <Editor/>
        </div>
    );
};

export default DocumentIdPage;
