import React from 'react';

const Tabs = ({ activeTab, onTabChange, superheroData }) => {
    const { powerstats, biography, appearance, connections, image } = superheroData || {};

    const tabContent = {
        1: (
            <div className="tab-content">
                <h3>Power Stats</h3>
                <ul>
                    <li>Intelligence: {powerstats?.intelligence}</li>
                    <li>Strength: {powerstats?.strength}</li>
                    <li>Speed: {powerstats?.speed}</li>
                    <li>Durability: {powerstats?.durability}</li>
                    <li>Power: {powerstats?.power}</li>
                    <li>Combat: {powerstats?.combat}</li>
                </ul>
            </div>
        ),
        2: (
            <div className="tab-content">
                <h3>Biography</h3>
                <ul>
                    <li>Full Name: {biography?.['full-name']}</li>
                    <li>Alter Egos: {biography?.['alter-egos']}</li>
                    <li>Aliases: {biography?.aliases}</li>
                    <li>Place of Birth: {biography?.['place-of-birth']}</li>
                    <li>First Appearance: {biography?.['first-appearance']}</li>
                    <li>Publisher: {biography?.publisher}</li>
                </ul>
            </div>
        ),
        3: (
            <div className="tab-content">
                <h3>Appearance</h3>
                <ul>
                    <li>Gender: {appearance?.gender}</li>
                    <li>Race: {appearance?.race}</li>
                    <li>Height: {appearance?.height?.[0]}</li>
                    <li>Weight: {appearance?.weight?.[0]}</li>
                    <li>Eye Color: {appearance?.['eye-color']}</li>
                    <li>Hair Color: {appearance?.['hair-color']}</li>
                </ul>
            </div>
        ),
        4: (
            <div className="tab-content">
                <h3>Connections</h3>
                <ul>
                    <li>Group Affiliation: {connections?.['group-affiliation']}</li>
                    <li>Relatives: {connections?.relatives}</li>
                </ul>
            </div>
        ),
    };

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                <button onClick={() => onTabChange(1)} className={activeTab === 1 ? 'active' : ''}>Powerstats</button>
                <button onClick={() => onTabChange(2)} className={activeTab === 2 ? 'active' : ''}>Biography</button>
                <button onClick={() => onTabChange(3)} className={activeTab === 3 ? 'active' : ''}>Appearance</button>
                <button onClick={() => onTabChange(4)} className={activeTab === 4 ? 'active' : ''}>Connections</button>
            </div>
            <div className="tabs-content">
                {superheroData ? (
                    <div className="hero-details">
                        <div className="hero-thumbnail">
                            <img src={image?.url} alt={superheroData.name} />
                        </div>
                        {tabContent[activeTab]}
                    </div>
                ) : (
                    <p>Select a superhero to see details.</p>
                )}
            </div>
        </div>
    );
};

export default Tabs;
