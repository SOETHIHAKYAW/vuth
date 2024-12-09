import React, {useState} from 'react';
import '../styles/About.css';

export default function About() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the accordion item
    };

    return (
        <section id="about" className="about">
            <div className="card">
                <h3>Founder & Concert</h3>
                <p>
                    Medical-Massage was founded and is managed by <strong> K Vuth Adiwat Wanpen</strong> <br/>- a
                    certified Massage therapist with over <strong>20 years</strong> of experience living in
                    <br/><strong> the island of Koh Phangan</strong>. <strong>K Vuth</strong> developed a therapeutic
                    way of massage based on:
                </p>
                <ul>
                    <li>Precise diagnostic of the pain and stiffness and body limitations.</li>
                    <li>Deep and sensitive therapy releasing outer and inner deep muscles.</li>
                    <li>
                        Regenerating Blood flow to the muscle through the blood vessels and create a
                        flow of Energy (Qi) to through the meridians to the muscles and to the whole
                        body.
                    </li>
                </ul>
            </div>

            <div className="card">
                <h3>The Treatment Phases</h3>
                <p>The Treatment is composed of four phases or elements:</p>

                <div className="phase">
                    <h4 onClick={() => handleAccordionClick(0)}>
                        1. DIAGNOSING <span>{activeIndex === 0 ? '▲' : '▼'}</span>
                    </h4>
                    {activeIndex === 0 && (
                        <p>
                            {/* Khun Vuth’s Diagnosis is done by observing abnormalities in the body including
              the patient's movements, testing the ability to control movement, asking
              questions about the patient's pathology, and asking about the history of work,
              exercise, and past accidents if any.  */}
                            <p>
                                <strong>Khun Vuth’s Diagnosis</strong> is done by observing abnormalities in the body
                                including
                                the patient's movements, testing the ability to control movement, asking questions about
                                the patient's pathology, and asking about the history of work,
                                exercise, and past accidents if any.
                            </p>
                            <p>
                                Following this analytical information, <strong>Khun Vuth</strong> tracks the real cause
                                of the
                                pathology diagnosed and together they identify the specific symptoms such as
                                stiffness or blockages.
                            </p>
                            <p>
                                Third phase is to physically examining the symptoms by pressing the finger on
                                the points where there is likely to be injury to the muscles and tendons on the
                                patient's body.
                            </p>
                        </p>
                    )}
                </div>

                <div className="phase">
                    <h4 onClick={() => handleAccordionClick(1)}>
                        2. RELEASING <span>{activeIndex === 1 ? '▲' : '▼'}</span>
                    </h4>
                    {activeIndex === 1 && (
                        <p>
                            Medical Massage or deep tissue massage is releasing stiff or
                            painful muscles of two levels - The outer peripheral muscles and the inner
                            deeper muscles, such as the muscles which are deep along the spine.
                        </p>
                    )}
                </div>

                <div className="phase">
                    <h4 onClick={() => handleAccordionClick(2)}>
                        3. REGENERATE BLOOD FLOW <span>{activeIndex === 2 ? '▲' : '▼'}</span>
                    </h4>
                    {activeIndex === 2 && (
                        <p>
                            Going Deep and then gently start massaging the muscles allows blood flow
                            to the traumatized outer muscles and the stiff inner-deep muscles. Re flow
                            of blood to the muscle tissue brings oxygen , warm temperature and
                            nutrition to the muscle
                        </p>
                    )}
                </div>

                <div className="phase">
                    <h4 onClick={() => handleAccordionClick(3)}>
                        4. REGENERATE FLOW OF QI ENERGY <span>{activeIndex === 3 ? '▲' : '▼'}</span>
                    </h4>
                    {activeIndex === 3 && (
                        <p>
                            <p>
                                The deep tissue massage regenerates energy flow to the outer and inner
                                muscles through the Meridian channels system and through the nervous
                                system.
                            </p>
                            <p>
                                Often patients feel re-energized and more vital , for instance releasing the
                                spine and neck often brings clarity of thoughts to the mind , or a general
                                feeling of awakening and vitality.
                            </p>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
