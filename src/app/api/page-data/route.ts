import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "l.sergio.camacho.fernandez@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:l.sergio.camacho.fernandez@gmail.com"
    },
     {
      type: "website",
      label: "lscf84.github.io",
      icon: "/images/icon/web-icon.svg",
      link: "www.lscf84.github.io"
    }
  ],
  socialItems: [
       {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/luis-sergio-camacho-fernandez-a49209141/"
    },
    ]
};


const educationData = {
  education: [
    {
      title: " I.E.S Condestable Álvaro de Luna, Illescas - 1998 - 2002",
      description: "Educación Secundaria Obligatoria."
    },
    {
      title: " I.E.S Satafi, Getafe - 2003 - 2005",
      description: "FPGM Equipos Electrónicos de Consumo."
    },
    {
      title: "FPGS Desarrollo de Aplicaciones Multiplataforma  - 2019 - Actualmente",
      description: "FPGS Desarrollo de Aplicaciones Multiplataforma."
    }
  ],
  skills: [
    {
      name: "AWS",
      icon: "/images/home/education-skill/AmazonAWS.png",
      rating: 3
    },
    {
      name: "Azure",
      icon: "/images/home/education-skill/Azure.png",
      rating: 3
    },
    {
      name: "Python",
      icon: "/images/home/education-skill/Python.png",
      rating: 5
    },
    {
      name: "Ubuntu",
      icon: "/images/home/education-skill/Ubuntu.png",
      rating: 4
    },
    {
      name: "Jira",
      icon: "/images/home/education-skill/jira.jpg",
      rating: 5
    },
    {
      name: "Cisco",
      icon: "/images/home/education-skill/cisco.png",
      rating: 4
    }
  ]
}

const contactLinks = {
  socialLinks: [
       {
      title: "Github",
      href: "https://github.com/LSCF84"
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/luis-sergio-camacho-fernandez-a49209141/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "l.sergio.camacho.fernandez@gmail.com",
      link: "mailto:l.sergio.camacho.fernandez@gmail.com"
    },
    ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
