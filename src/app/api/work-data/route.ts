import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/CSM.png",
        title: "Check Software Minimum-CSM",
        client: "Proyecto Personal",
        slug: "https://github.com/LSCF84/Check-Software-Minimum-CSM"
    },
    {
        image: "/images/work/VR-GUI.png",
        title: "Renamer GUI VR-GUI",
        client: "Proyecto Personal",
        slug: "https://github.com/LSCF84/Version-Renamer-GUI_VR-GUI"
    },
    {
        image: "/images/work/WEDA.png",
        title: "Windows Error Diagnostic with AI-WEDA",
        client: "Proyecto Personal",
        slug: "https://github.com/LSCF84/Windows-Error-Diagnostic-with-AI_WEDA"
    },
    {
        image: "/images/work/PYE.png",
        title: "py-to-exe",
        client: "Proyecto Personal",
        slug: "https://github.com/LSCF84/py-to-exe"
    },
    {
        image: "/images/work/RS.png",
        title: "PDF Renamer Security PDF-RS",
        client: "Proyecto Personal",
        slug: "https://github.com/LSCF84/PDF-Renamer-Security-PDF-RS"
    },
    {
        image: "/images/work/RSS.png",
        title: "PDF Renamer Security Suite PDF-RSS",
        client: "Proyecto Personal",
        slug: "https://github.com/LSCF84/PDF-Renamer-Security-Suite-PDF-RSS"
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
