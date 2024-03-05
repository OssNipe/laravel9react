import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Auth } from '@inertiajs/inertia-react'; 
import React, { useState, useEffect } from "react";
import ProfileCard from '@/Components/ProfileCard';
import ImageUpload from './ImageUpload'

export default function changeImage(props) {
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">changeImage</h2>}
        >
            <Head title="Change image" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <ImageUpload userId={props.userId} />
                    
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
