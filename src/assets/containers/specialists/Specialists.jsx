import React, { useCallback, useState } from 'react';
import './specialists.css';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { SpecialistCard } from '../../componentes';
import specialists_data from '../../files/specialists';

const Specialists = () => {
    const size = 40;
    const [selectOpt, setSelectOpt] = useState(1); // useState para selecionar a opção

    const [showSpecialists, setShowSpecialists] = useState(false)

    const category = () => {
        if (selectOpt === 1) {
            return "CoquetelariaClassica";
        } else if (selectOpt === 2) {
            return "MixologiaMolecular";
        } else if (selectOpt === 3) {
            return "BarDeWhisky"
        } else if (selectOpt === 4) {
            return "CoquetéisSemAlcool"
        } else {
            return "PersonalizaçaoDeCoqueteis"
        }
    };

    const Menu = () => (
        <>
            <Opt1 />
            <Opt2 />
            <Opt3 />
            <Opt4 />
            <Opt5 />
        </>
    );

    const Opt1 = () => (
        <p onClick={() => setSelectOpt(1)} className={selectOpt === 1 && ("text__highlight")}>Coquetelaria Clássica</p>
    );

    const Opt2 = () => (
        <p onClick={() => setSelectOpt(2)} className={selectOpt === 2 && ("text__highlight")}>Mixologia Molecular</p>
    );

    const Opt3 = () => (
        <p onClick={() => setSelectOpt(3)} className={selectOpt === 3 && ("text__highlight")}>Bar de Whisky</p>
    );

    const Opt4 = () => (
        <p onClick={() => setSelectOpt(4)} className={selectOpt === 4 && ("text__highlight")}>Coquetéis Sem Álcool</p>
    );

    const Opt5 = () => (
        <p onClick={() => setSelectOpt(5)} className={selectOpt === 5 && ("text__highlight")}>Personalização de Coquetéis</p>
    );

    const MoveNext = useCallback(() => {
        setSelectOpt((prev) => (prev < 5 ? prev + 1 : 1));
    }, []);

    const MovePrevious = useCallback(() => {
        setSelectOpt((prev) => (prev > 1 ? prev - 1 : 5));
    }, []);

    return (
        <div id='specialists' className='bc__specialists section__padding'>
            <div className="bc__specialists-heading">
                <h1>Especialistas</h1>
            </div>
            <div className="bc__specialists-container">
                <div className='bc__specialists-links'>
                    <button>
                        <IoMdArrowDropleftCircle onClick={MovePrevious} size={size} />
                    </button>
                    <Menu />
                    <button>
                        <IoMdArrowDroprightCircle onClick={MoveNext} size={size} />
                    </button>
                </div>
                <div className="bc__specialists_menu-container">
                    <div className="bc__specialists_menu-container-links">
                        <button>
                            <IoMdArrowDropleftCircle onClick={MovePrevious} size={size} />
                        </button>
                        {/* Carroussel with options */}
                        {selectOpt === 1 ? (
                            <div className="bc__specilists_menu-container-links_opt">
                                <div className="previous">
                                    <Opt5 />
                                </div>
                                <Opt1 />
                                <div className="next">
                                    <Opt2 />
                                </div>
                            </div>
                        ) : selectOpt === 2 ? (
                            <div className="bc__specilists_menu-container-links_opt">
                                <div className="previous">
                                    <Opt1 />
                                </div>
                                <Opt2 />
                                <div className="next">
                                    <Opt3 />
                                </div>
                            </div>
                        ) : selectOpt === 3 ? (
                            <div className="bc__specilists_menu-container-links_opt">
                                <div className="previous">
                                    <Opt2 />
                                </div>
                                <Opt3 />
                                <div className="next">
                                    <Opt4 />
                                </div>
                            </div>
                        ) : selectOpt === 4 ? (
                            <div className="bc__specilists_menu-container-links_opt">
                                <div className="previous">
                                    <Opt3 />
                                </div>
                                <Opt4 />
                                <div className="next">
                                    <Opt5 />
                                </div>
                            </div>
                        ) : (
                            <div className="bc__specilists_menu-container-links_opt">
                                <div className="previous">
                                    <Opt4 />
                                </div>
                                <Opt5 />
                                <div className="next">
                                    <Opt1 />
                                </div>
                            </div>
                        )}
                        <button>
                            <IoMdArrowDroprightCircle onClick={MoveNext} size={size} />
                        </button>
                    </div>
                </div>
                <div className="bc__specialists-card-container">
                    <button onClick={() => setShowSpecialists(!showSpecialists)}>{showSpecialists ? ("Esconder Especialistas") : ("Mostar Especialistas")}</button>
                    {showSpecialists && (
                        <div className="bc__specilists-cards fade-in">
                            {specialists_data.map((item, i) => {
                                if (item.category === category()) {
                                    return (
                                        <SpecialistCard
                                            key={i}
                                            photo={item.photo}
                                            name={item.name}
                                            age={item.age}
                                            phone={item.phone}
                                            email={item.email}
                                            xp={item.xp}
                                            score={item.score}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    )}
                    {showSpecialists && (
                        <button onClick={() => setShowSpecialists(!showSpecialists)}>{showSpecialists ? ("Esconder Especialistas") : ("Mostar Especialistas")}</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Specialists;
