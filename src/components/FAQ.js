import React, {useState} from 'react';
import '../styles/FAQ.css';

export default function FAQ() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const phases = [
        {
            title: '1. ANATOMY',
            description:
                'It requires an understanding of Anatomy and feeling the\n' +
                'location and connections between muscles, the nerve system , blood\n' +
                'vessels, lymphatic system and bones structure.',
        },
        {
            title: '2. MERIDIANS and CHI',
            description: 'Knowledge and understanding of the flow of the\n' +
                'CHI as known to TCM - Traditional Chinese Medicine and mapping the\n' +
                'flow of the meridians locally for an organ along the whole body.',
        },
        {
            title: '3. SENSITIVITY',
            description: 'Sensitive feeling of the muscle’s smallest contraction and\n' +
                'identifying where are the points or illness or pain.',
        },
        {
            title: '4. STRENGTH',
            description:
                'The ability to use pressure whenever needed during the\n' +
                'session of 60 or 90 minutes.',
        },
        {
            title: '5. HOLISTIC VIEW and CHRONIC PROBLEM SOLVING',
            description: 'Most people suffer\n' +
                'from Some on-going chronical stiffness. YMM can detect the problem\n' +
                'and suggest a series of treatments to bring the body back to a healthy\n' +
                'normal shape of Spine and skeleton.',
        },
        {
            title: '6. PREPARING the BODY for Treatments',
            description: 'MM is the ultimate BASE FOR\n' +
                'COMPLETING TREATMENTS – for Body ,Soul & Mind treatments such as\n' +
                'YOGA , Long-hours Meditation, Pilates and all kinds of land and marine\n' +
                'sports.',
        },
        {
            title: '7. SERVICES of COMPLETING TREATMENTS',
            description:
                'We at NATURAL HEALTHCARE\n' +
                'CENTER suggest a variety of completing programs of Diagnostic &\n' +
                'Treatment by experts such as: NUTRITION and DIET , DETOX and\n' +
                'CLEANSING , Art and Game therapy, Breathing Therapy , Tantra ,\n' +
                'Spiritual and Psychological sessions.',
        },
    ];

    const faqData = [
        {
            question: 'How does the massage work, what does it do?',
            answer:
                'Medical massage (MM) is a deep tissue treatment that releases muscles\n' +
                'contraction, regenerates flow of blood to the organs . At the same time MM\n' +
                'opens the Energy flow of the Qi (CHI ) flowing from the central nerve\n' +
                'system through the Meridians . MM also reduces blood pressure, helps\n' +
                'elevate muscle temperature and improves tissue elasticity.',
        },
        {
            question: 'What is the difference between Thai and Medical massage?',
            answer:
                'Thai massage can be done by any person learning or experiencing\n' +
                'treatment. MM requires responsible understanding of Theory and practice\n' +
                'of healing the body physically and energetically. \nMM requires Knowledge of Anatomy , Knowledge of the flow of energy ,\n' +
                'sensitivity to identify the exact points needed treatment , a whole view of\n' +
                'the body situation and physical Strength of the healer . A good and an\n' +
                'effective MM requires also years of experience of treatment.',
        },
        {
            question: 'What is needed from a professional Medical Massage therapist?',
            answer: (
                <div>
                    {phases.map((phase, index) => (
                        <div key={index}>
                            <strong>{phase.title}</strong>
                            <p>{phase.description}</p>
                        </div>
                    ))}
                </div>
            ),
        },
    ];

    return (
        <section id="faq" className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openQuestion === index ? 'active' : ''}`}
                        onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    >
                        <h3>{faq.question}</h3>
                        <div>{openQuestion === index && faq.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
