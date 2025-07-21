import { useState } from 'react';
import './GameCard.css';

export default function GameCard({ rarity, title, imageAlt, imageUrl, atk, health, skill_title, skill_description, skill = [] }) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleFlip() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`game-card ${rarity}`} onClick={handleFlip}>
            <div className={`card-inner ${!isFlipped ? 'is-flipped' : ''}`}>
                {/* Card Front */}
                <div className="card-front">
                    <div className="card-header">{title}</div>
                    <div className="card-image">
                        <img src={imageUrl} alt={imageAlt} />
                    </div>
                    <div class="card-skill-section">
                        <div class="skill-cooldown">CD: 5</div>
                        <div class="mana-cost">10 MP</div>

                        {/* Scroll indicators  */}
                        <div class="scroll-indicator top">↑</div>
                        <div class="scroll-indicator bottom show">↓</div>

                        {/* Gradient overlays  */}
                        <div class="scroll-gradient top"></div>
                        <div class="scroll-gradient bottom show"></div>

                        <div class="skill-content">
                            <div class="skill-header">
                                <div class="skill-icon">🌀</div>
                                <div class="skill-title">{skill_title}</div>
                            </div>

                            <div class="skill-description">
                                {skill_description}
                            </div>

                            {/* dame, buff, debuff, heal */}
                            {skill.map((s, id) => (
                                <div key={id} className={`skill-effect ${s.type}`}>
                                    <span className="effect-name">{s.name}</span>
                                    <span className="effect-value">{s.value}</span>
                                </div>
                            ))}

                            {/* <div class="skill-combo">
                                <div class="combo-title">Combo Effects:</div>
                                <div class="combo-item">With Fire Elemental: +50% damage</div>
                                <div class="combo-item">With Dragon cards: Extends burn duration</div>
                                <div class="combo-item">With Healing cards: Double regeneration</div>
                                <div class="combo-item">With Lightning: Chain lightning effect</div>
                            </div> */}

                            <div class="skill-effects">
                                {/* <div class="skill-effect buff">
                                    <span class="effect-name">Duration</span>
                                    <span class="effect-value">6 turns</span>
                                </div> */}
                                <div class="skill-effect damage">
                                    <span class="effect-name">Area Effect</span>
                                    <span class="effect-value">All enemies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-stats">
                        <div className="stat-column atk-stat">
                            <div className="stat-label">ATK</div>
                            <div className="stat-value">{atk}</div>
                        </div>
                        <div className="stat-column health-stat">
                            <div className="stat-label">Health</div>
                            <div className="stat-value">{health}</div>
                        </div>
                    </div>
                </div>

                {/* Card Back */}
                <div className="card-back">
                    <div className="back-content">
                        <div className="back-logo-area">
                            <div className="logo-circle">
                                <div className="logo-inner">
                                    <div className="logo-symbol">💎</div>
                                </div>
                            </div>
                        </div>

                        <div className="back-pattern">
                            <div className="pattern-line"></div>
                            <div className="pattern-line"></div>
                            <div className="pattern-line"></div>
                        </div>

                        <div className="back-title">
                            <h3>Sakamoto Days</h3>
                            <p>Anime Series</p>
                        </div>

                        <div className="back-pattern">
                            <div className="pattern-line"></div>
                            <div className="pattern-line"></div>
                            <div className="pattern-line"></div>
                        </div>

                        <div className="back-info">
                            <div className={`rarity-badge ${rarity}`}>{rarity}</div>
                        </div>

                        <div className="back-decoration">
                            <div className="deco-diamond">◆</div>
                            <div className="deco-line"></div>
                            <div className="deco-diamond">◆</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}