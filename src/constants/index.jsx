

import { MonitorSmartphone } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Search } from "lucide-react";
import { Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Clock } from "lucide-react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import src_icon_email from "../assets/icons-email-100.png";
import src_icon_wsp from  "../assets/icons-whatsapp.svg";
import image_lp_prueba from "../assets/lp-prueba.jpg";
import image_chatbot_prueba from "../assets/chatbot-prueba.jpg";
import image_delivery_app from "../assets/delivery-app-prueba.jpg";

import src_image_blob from "../assets/blob.svg";
import src_image_responsive from "../assets/responsive.png"
export const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Nosotros", href: "#aboutus" },
  { label: "Servicios", href: "#services" },
  { label: "Paquetes", href: "#packages" },
  { label: "Contactanos", href: "#contact" },
];

export const images={
  icon_email:src_icon_email,
  blob_image:src_image_blob,
  responsive_image:src_image_responsive
}

export const icons={
  icon_arrow_right:<ArrowRight/>,
  icon_clock:< Clock size={36}/>,
  icon_mail:<Mail size={36}/>,
  icon_wsp:src_icon_wsp
}

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];
export const packages=[
  {
    title:'Paquete Base',
    subtitle:'Landing page economica',
    content:'Ideal para emprendores y pequeñas empresas que necesitan una presencia online rapida y efectiva.'
  },
  {
    title:'Paquete Normal',
    subtitle:'Landing page con muchas mejores características que el plan base',
    content:'Ideal para personas/mypes que se encuentran en crecimiento y necesitan una presencia más fuerte en linea con sus productos.'
  },
  {
    title:'Paquete Personalizado',
    subtitle:'Pagina web/aplicación avanzada, 100% personalizable con muchas mejores caracteríscas que los anteriores planes ',
    content:'Ideal para empresas ya establecidas, que buscan un producto más personalizable. Para aquellas que buscan acelerar el crecimiento de su empresa. '
  }
]

export const services = [
  {
    icon: <MonitorSmartphone />,
    text: "Diseño y Desarrollo Web",
    description:
      "Transformamos tu visión en una página web moderna, atractiva y funcional que capta clientes y refuerza tu marca."
  },
  {
    icon: <ShoppingCart />, 
    text: "Creación de Tienda Online",
    description:
      "Lleva tu negocio al siguiente nivel con una tienda en línea poderosa, segura y optimizada para aumentar tus ventas."
  },
  {
    icon: <Smartphone />,
    text: "Diseño y Desarrollo de Apps",
    description:
      "Creamos apps intuitivas y rápidas para iOS y Android, diseñadas para ofrecer la mejor experiencia de usuario."
  },
  {
    icon: <Search />,
    text: "SEO Optimizado",
    description:
      "Te ayudamos a mejorar tu visibilidad en los motores de búsqueda, atraer tráfico de calidad y aumentar tus conversiones."
  },
  {
    icon: <Mail />,
    text: "Correo Corporativo",
    description:
    "Da una imagen profesional con un correo corporativo personalizado (@tunegocio.com)."

  }
 
];
export const projects=[
  {
    id:1,
    src:image_lp_prueba,
    title:'Ecommerce EL Angel'
  },
  {
    id:2,
    src:image_chatbot_prueba,
    title:'titulo de prueba'
    
  },
  {
    id:3,
    src:image_delivery_app,
    title:'titulo de prueba'
  },  {
    id:4,
    src:image_lp_prueba,
    title:'Ecommerce'
  },
  {
    id:5,
    src:image_chatbot_prueba,
    title:'titulo de prueba'
  },
  {
    id:6,
    src:image_delivery_app,
    title:'titulo de prueba'
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
    label:false,
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
    label:true,
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
    label:false,
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
