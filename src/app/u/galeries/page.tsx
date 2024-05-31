import React from 'react';

import { Arrow } from '@/components/elements/Arrow';
import { GalerieCard } from '@/components/elements/GalerieCard';

export const metadata = {
    title: 'RSC Wasquehal - Galeries',
  };

export default function Galeries()
{
    return <main className="galeries">
        <section className="hero section">
            <div className="hero__container">
                <div className="hero__content">
                <div className="hero__content__title fade-in-up">La galerie</div>
                <div className="hero__content__description fade-in-up">En immersion dans notre club !</div>
                </div>
                <div className="hero__cover"></div>
            </div>
        </section>


        <section className="galeries section">
            <div className="galeries__container container">
    
    
                <div className="galeries__title__wrapper">
                    <div className="title">
                    <div className="title__bar"></div>
                    <h1>La galerie du club</h1>
                    </div>  
                    
                </div>
    
    
    
    
                <div className="galeries__content" id="galleries__slick">

                    <div className="galeries_wrapper">
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                        <GalerieCard 
                            src=""
                            description="Une description un peu en détail mais pas trop non plus parce que tu connais"
                            date="2023-12-11"
                        />
                    
            

                    </div>
                    
        
                </div>
    
    
            </div>
    
            <div className="galeries__arrows__buttons">
                <Arrow direction="left" />

                <div className="buttons__container">

                </div>


                <Arrow direction="right" />
            </div>
        </section>
    </main>
}