import { createContext, useState } from 'react';
import hrconnectpro from '../../Assets/hrconnectpro.jpg';
import connectera from '../../Assets/connect.jpg';
import mediAI from '../../Assets/mediAI.png';
import globalGuardian from '../../Assets/globalguardian.png';
import worldsync from '../../Assets/worldsync.jpeg'

export const bucket = createContext();

export default function ProductData(props) {
    const [data, setData] = useState([
        {
            id: 1,
            cat: 'HRConnectPro',
            title: "HRConnect Pro : Elevating HR Management to New Heights",
            intro: "Introducing HRConnect Pro, your comprehensive solution for transforming HR management into a seamless and efficient experience. Leveraging cutting-edge technology, our platform is designed to streamline and optimize every aspect of HR processes, from recruitment and onboarding to performance management and employee engagement. By automating routine tasks and providing insightful analytics, HRConnect Pro enables HR professionals to focus on strategic initiatives that drive organizational growth. Its user-friendly interface ensures easy adoption across the organization, while its robust features ensure compliance, accuracy, and enhanced decision-making capabilities. Experience a revolutionary approach to HR management with HRConnect Pro, where efficiency meets effectiveness.",
            benefits: [
                {
                    key: "Unified Dashboard",
                    desc: "Simplify your HR tasks with our all-in-one dashboard. HRConnect Pro centralizes all HR activities, providing an intuitive interface for easier decision-making and task management."
                },
                {
                    key: "AI-Enhanced Candidate Engagement",
                    desc: "Leverage advanced AI to improve candidate experiences. Our intelligent chatbots manage inquiries, schedule interviews, and provide real-time feedback, ensuring a seamless and personalized engagement for every applicant."
                },
                {
                    key: "Customized Pre-Hire Assessments",
                    desc: "Ensure you hire the right talent with tailored assessments that evaluate specific skills needed for various roles. Our platform supports a range of tests, including theoretical, coding, attitude, and communication assessments, guaranteeing precise candidate evaluation."
                },
                {
                    key: "Comprehensive Talent Analytics:",
                    desc: "Empower your HR team with actionable insights. HRConnect Pro delivers real-time analytics on recruitment trends, applicant behavior, and training effectiveness, enabling data-driven decision-making."
                },
                {
                    key: "Mobile-Optimized Experience",
                    desc: "Capture top talent with our mobile-friendly platform. HRConnect Pro offers a smooth and efficient application process for candidates on the go, broadening your reach and accessibility."
                },
                {
                    key: "Specialized in HRTech and BFSI Domains",
                    desc: "HRConnect Pro is expertly designed for the HRTech and BFSI (Banking, Financial Services, and Insurance) sectors. Our deep industry knowledge ensures tailored solutions that address the unique challenges and needs of these domains."
                },
            ],
            features: [
                {
                    key: "Global Candidate Database",
                    feature: "Access a vast pool of both national and international candidates to find the best talent from around the world.",
                },
                {
                    key: "Work-from-Home Adaptability",
                    feature: "Perfect for the modern remote work environment, our platform supports remote hiring and management seamlessly.",
                },
                {
                    key: "Cost and Time Efficiency",
                    feature: "Significantly reduce recruitment costs and time, enhancing overall productivity.",
                },
                {
                    key: "Enhanced Candidate Engagement",
                    feature: "Keep candidates engaged with personalized communication, even for those on hold or not selected.",
                },
                {
                    key: "Dynamic and User-Friendly Assessments",
                    feature: "Provide a seamless experience with customizable and interactive pre-hire assessments for both recruiters and candidates.",
                },
                {
                    key: "Advanced Analytics",
                    feature: "Gain valuable insights into your recruitment processes, helping to make informed and strategic decisions.",
                },
            ],
            bio: [
                {
                    head: "Transforming HR Management for the Future",
                    desc: "HRConnect Pro transcends the traditional boundaries of HR management, offering a groundbreaking solution that redefines how companies hire, manage, and engage with their workforce. This platform is not merely a tool but a transformative experience that integrates advanced features tailored to meet the unique demands of various industries. By streamlining recruitment processes, enhancing employee management, and fostering deeper engagement, HRConnect Pro empowers organizations to operate more efficiently and effectively. Its intuitive interface and robust analytics provide actionable insights, ensuring that businesses can attract and retain top talent while addressing industry-specific challenges. As a result, HRConnect Pro is poised to set new standards and lead the HRTech landscape, driving innovation and excellence in human resource management."
                }
            ],
            caption: "Ready to transform your HR processes? Experience the power of HRConnect Pro and join the future of HR management today.",
            img: hrconnectpro,
        },
        {
            id: 2,
            cat: 'MediAI',
            title: "MediAI Connect: Revolutionizing Healthcare with Advanced Technology",
            intro: "MediAI Connect is an innovative healthcare platform designed to transform the way medical services are delivered. Leveraging cutting-edge technologies like Artificial Intelligence (AI), quantum computing, and Augmented Reality/Virtual Reality (AR/VR), MediAI Connect aims to enhance diagnostic accuracy, streamline healthcare processes, and improve patient outcomes globally.",
            benefits: [
                {
                    key: "Innovative Technology",
                    desc: "Combining AI, quantum computing, and AR/VR for superior healthcare solutions."
                },
                {
                    key: "Enhanced Patient Care",
                    desc: "Providing precise diagnostics and personalized treatment plans."
                },
                {
                    key: "Global Accessibility",
                    desc: "Bridging the gap between patients and healthcare providers through virtual consultations."
                },
                {
                    key: "Data Security",
                    desc: "Ensuring the highest standards of data protection and compliance."
                },
            ],
            features: [
                {
                    key: "AI-Powered Diagnostics",
                    feature: "Our platform utilizes advanced AI algorithms to provide precise and rapid diagnostics. By analyzing vast amounts of medical data, MediAI Connect offers accurate predictions and personalized treatment recommendations, ensuring the highest level of care for patients.",
                },
                {
                    key: "Quantum Computing Integration",
                    feature: "Harnessing the power of quantum computing, MediAI Connect processes complex medical data at unprecedented speeds. This capability allows for enhanced data security and efficient handling of large datasets, revolutionizing the healthcare industry's approach to data management.",
                },
                {
                    key: "AR/VR Functionalities",
                    feature: "MediAI Connect incorporates AR/VR technologies to create immersive healthcare experiences. These features enable virtual consultations, remote surgery assistance, and interactive training for healthcare professionals, bridging the gap between patients and providers.",
                },
                {
                    key: "Comprehensive Data Management",
                    feature: "Ensuring data security and compliance is paramount. MediAI Connect is designed to meet the strictest data protection standards, including HIPAA compliance. Real-time analytics and secure data storage offer peace of mind and operational efficiency.",
                },
                {
                    key: "User-Friendly Interface",
                    feature: "Our intuitive user interface is tailored for both healthcare professionals and patients. Doctors can easily access patient records, conduct virtual consultations, and utilize AI-driven insights. Patients can securely view their health records, schedule appointments, and receive personalized health advice.",
                },
                {
                    key: "Global Impact and Future Launch",
                    feature: "MediAI Connect is set to launch globally in June 2024. As we develop this groundbreaking product, we are committed to continuous innovation and excellence. By integrating the latest technological advancements, MediAI Connect is poised to become a leader in the healthcare technology industry, offering unparalleled value to healthcare providers and patients worldwide.",
                },
            ],
            bio: [
                {
                    head: "Join Us in Transforming Healthcare",
                    desc: "MediAI Connect is more than just a product; it's a revolution in healthcare technology. As we prepare for our global launch, we invite you to join us on this journey to enhance healthcare delivery and improve patient outcomes worldwide."
                }
            ],
            img: mediAI
        },
        {
            id: 3,
            cat: 'ConnectEra',
            title: "Welcome to ConnectEra: Where Connections Blossom Across Generations",
            intro: "ConnectEra is more than just a social platform—it's a global community where meaningful relationships flourish. Whether you're seeking friendship, love, or personal growth, ConnectEra provides the perfect space to connect with like-minded individuals from around the world.",
            benefits: [
                {
                    key: "Universal Reach",
                    desc: "In today's interconnected world, distance shouldn't be a barrier to forming deep connections. ConnectEra bridges the gap, allowing you to connect with anyone, anywhere, fostering friendships and relationships that transcend borders."
                },
                {
                    key: "Tailored for Every Generation",
                    desc: "Whether you grew up in the 90s, 2000s, or belong to any other generation, ConnectEra understands your unique needs. Our platform is designed to cater to all age groups, creating a space where wisdom meets modernity."
                },
                {
                    key: "Advanced Matching Algorithms",
                    desc: "Our sophisticated matching technology goes beyond common interests. By analyzing values, life goals, and personality traits, ConnectEra ensures you meet individuals who truly resonate with you, making every interaction purposeful."
                },
                {
                    key: "Versatile Communication Tools",
                    desc: "Stay connected with secure messaging, video calls, and interactive icebreaker prompts. Plan meetups, join engaging virtual events, and participate in community activities, all designed to foster genuine relationships."
                },
                {
                    key: "Embrace Mental Health and Wellbeing",
                    desc: "At ConnectEra, we prioritize your mental health. Access valuable resources, participate in supportive communities, and find solace in knowing you're not alone. Our platform offers a safe haven where you can share, support, and grow."
                },
                {
                    key: "Engage in Vibrant Communities",
                    desc: "Join interest-based groups and generational communities to discuss topics that matter to you. Whether it's a book club, a discussion forum, or a virtual game night, ConnectEra's vibrant communities ensure there's always something to engage with."
                },
                {
                    key: "Safety and Privacy at Its Core",
                    desc: "Your safety is our priority. With robust verification processes, comprehensive privacy controls, and dedicated moderation, ConnectEra ensures a secure and trustworthy environment for all users."
                },
                {
                    key: "Be Part of the Global Movement",
                    desc: "ConnectEra isn't just a platform—it's a movement towards a more connected and compassionate world. By joining us, you're taking a step towards enriching your life and the lives of others through meaningful connections."
                },
            ],
            bio: [
                {
                    head: "Get Started with ConnectEra Today!",
                    desc: "Ready to embark on a journey of genuine connections and personal growth? Sign up now and experience the magic of ConnectEra. Whether you're looking to make new friends, find love, or simply explore new cultures, ConnectEra is your gateway to a more connected world."
                }
            ],
            img: connectera
        },
        {
            id: 4,
            cat: 'Global Guardian',
            title: "Welcome to GlobalGuardian: Your Ultimate Digital Identity and Authentication Solution",
            intro: "GlobalGuardian is a cutting-edge digital identity and authentication platform designed to provide unparalleled security and convenience for global banking and financial services. Our mission is to protect your identity and ensure seamless access to financial services anywhere in the world.",
            benefits: [
                {
                    key: "Advanced Security",
                    desc: "Protect your identity with state-of-the-art biometric authentication and document validation. Our multi-factor authentication (MFA) ensures your transactions are always secure."
                },
                {
                    key: "Global Accessibility",
                    desc: "Enjoy seamless banking services from anywhere in the world. GlobalGuardian supports multi-language interfaces and alternative verification methods for regions with limited infrastructure."
                },
                {
                    key: "Regulatory Compliance",
                    desc: "Stay ahead of regulatory requirements with our built-in KYC and AML compliance tools. Our platform makes it easy to meet global standards."
                },
                {
                    key: "User-Friendly Interface",
                    desc: "Experience a smooth and intuitive user experience with our easy-to-navigate platform, designed for both financial institutions and individual users."
                },
            ],
            features: [
                {
                    key: "Biometric Authentication",
                    feature: "Leverage the power of facial recognition and fingerprint scanning to verify your identity.",
                },
                {
                    key: "Document Validation",
                    feature: "Quickly and accurately validate identity documents such as passports, driver’s licenses, and national IDs.",
                },
                {
                    key: "Multi-Factor Authentication (MFA)",
                    feature: "Add an extra layer of security to your transactions with SMS codes and authenticator apps.",
                },
                {
                    key: "Seamless Integration",
                    feature: "Connect effortlessly with existing banking systems through our robust APIs.",
                },
                {
                    key: "Compliance Tools",
                    feature: "Monitor and report compliance with real-time dashboards for KYC and AML.",
                },
                {
                    key: "Global Reach",
                    feature: "Access banking services globally with support for multiple languages and regional verification methods.",
                },
            ],
            working: [
                {
                    title: "User Registration",
                    caption: "Start by creating your profile with simple and secure registration."
                },
                {
                    title: "Identity Verification",
                    caption: "Verify your identity using our advanced biometric authentication and document validation."
                },
                {
                    title: "Secure Transactions",
                    caption: "Perform secure transactions with multi-factor authentication."
                },
                {
                    title: "Compliance Monitoring",
                    caption: "Ensure regulatory compliance with our real-time monitoring tools."
                },
            ],
            industries: [
                {
                    name: "Banking and Financial Services",
                    work: "Enhance security, compliance, and user experience."
                },
                {
                    name: "Fintech Companies",
                    work: "Integrate advanced authentication and compliance tools."
                },
                {
                    name: "Rgulatory Bodies",
                    work: "Simplify compliance monitoring and reporting."
                },
            ],
            bio: [
                {
                    head: "Join the Future of Secure Banking",
                    desc: "GlobalGuardian is committed to transforming the way the world accesses and secures financial services. Join us on our mission to provide a secure, compliant, and user-friendly banking experience globally."
                }
            ],
            caption: "Ready to learn more about how GlobalGuardian can protect your identity and enhance your banking experience? Contact us today to schedule a demo or speak with one of our experts.",
            img: globalGuardian
        },
        {
            id: 5,
            cat: 'WorldSync',
            title: "Revolutionize Your Global Attendance and Payroll Management",
            intro: "WorldSync is your ultimate solution for seamless attendance tracking and payroll processing across the globe. Designed with cutting-edge technology and a user-centric approach, WorldSync simplifies HR operations for businesses of all sizes, ensuring compliance, accuracy, and efficiency.",
            benefits: [
                {
                    key: "Global Compliance",
                    desc: "Stay ahead of the curve with WorldSync’s automated updates on local labor laws and tax regulations. Our software supports multiple languages and currencies, ensuring smooth operations no matter where your employees are based."
                },
                {
                    key: "Advanced Attendance Tracking",
                    desc: "With WorldSync, managing attendance is a breeze. Our system integrates biometric authentication, geolocation, and mobile capabilities to ensure accurate tracking and convenience for your workforce."
                },
                {
                    key: "Streamlined Payroll Processing",
                    desc: "Say goodbye to payroll hassles. WorldSync automates payroll calculations, handles overtime, bonuses, and deductions, and integrates seamlessly with global banking systems for direct deposits. Ensure timely and accurate paychecks every time."
                },
                {
                    key: "Insightful Analytics and Reporting",
                    desc: "Make informed decisions with our robust analytics and reporting tools. Customize reports to gain real-time insights into workforce productivity, attendance patterns, and payroll expenses. Leverage predictive analytics for better workforce planning and budgeting"
                },
                {
                    key: "Seamless Integrations",
                    desc: "WorldSync connects effortlessly with popular HR systems, ERPs, and financial software through our open API, providing a unified experience across your business operations."
                },
                {
                    key: "Unmatched Security and Compliance",
                    desc: "Your data is safe with us. WorldSync employs advanced data encryption, adheres to global data protection regulations, and provides role-based access control to ensure the highest level of security."
                },
            ],
            features: [
                {
                    key: "Country-specific Regulations",
                    feature: "Automatic updates to stay compliant.",
                },
                {
                    key: "Biometric Integration",
                    feature: "Fingerprint, facial recognition, and iris scans.",
                },
                {
                    key: "Geolocation and Geofencing",
                    feature: "Ensure accurate clock-ins from approved locations.",
                },
                {
                    key: "Mobile App",
                    feature: "Clock-in/out, request leave, and view schedules on-the-go.",
                },
                {
                    key: "Automated Payroll Calculations",
                    feature: "Streamline your payroll process.",
                },
                {
                    key: "Custom Reports and Dashboards",
                    feature: "Real-time insights and analytics.",
                },
                {
                    key: "Open APi",
                    feature: "For custom integrations and extended functionality.",
                },
                {
                    key: "Data Encryption and GDPR Compliance",
                    feature: "Ensuring your data’s security and privacy.",
                },
            ],
            working: [
                {
                    title: "User Registration",
                    caption: "Start by creating your profile with simple and secure registration."
                },
                {
                    title: "Identity Verification",
                    caption: "Verify your identity using our advanced biometric authentication and document validation."
                },
                {
                    title: "Secure Transactions",
                    caption: "Perform secure transactions with multi-factor authentication."
                },
                {
                    title: "Compliance Monitoring",
                    caption: "Ensure regulatory compliance with our real-time monitoring tools."
                },
            ],
            industries: [
                {
                    name: "Multinational Corporations",
                    work: "Simplify complex global operations."
                },
                {
                    name: "Medium to Large Enterprises",
                    work: "Streamline attendance and payroll across multiple locations"
                },
                {
                    name: "High-Growth Startups",
                    work: "Scale your business with ease and efficiency."
                },
            ],
            bio: [
                {
                    head: "Get Started with WorldSync Today!",
                    desc: "Experience the future of global attendance and payroll management. Join the growing number of businesses transforming their HR operations with WorldSync. Contact us today to learn more or request a demo."
                }
            ],
            img: worldsync,
            faq: [
                {
                    title: "Q: How does WorldSync handle different country regulations? ",
                    caption: "A: WorldSync automatically updates local labor laws and tax regulations, ensuring compliance no matter where your employees are located."
                },
                {
                    title: "Q: Can employees use WorldSync on their mobile devices? ",
                    caption: "A: Yes, WorldSync offers a mobile app that allows employees to clock in/out, request leave, and view their schedules from anywhere."
                },
                {
                    title: "Q: Is my data secure with WorldSync?",
                    caption: "A: Absolutely. WorldSync uses advanced data encryption, adheres to GDPR, and provides role-based access control to protect your sensitive information."
                },
                {
                    title: "Q: What kind of reports can I generate with WorldSync?",
                    caption: "A: WorldSync offers customizable reports, including workforce productivity, attendance patterns, and payroll expenses, along with predictive analytics for future planning."
                },
            ]
        },
    ])
    return (
        <>
            <bucket.Provider value={[data, setData]}>
                {props.children}
            </bucket.Provider>
        </>
    )
}