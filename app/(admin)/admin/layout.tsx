import MainLayout from "@/components/MainLayout";
import React, { ReactNode } from "react";



interface AdminlayoutProps {
    children: ReactNode;
}
export default function AdminLayout({ children }: AdminlayoutProps) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
}