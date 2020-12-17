import React from 'react';
import FeaturesContent from "./FeaturesContent";
import FeaturesFooter from "./FeaturesFooter";

function Features(props) {
    return (
        <div className="feat">
            <FeaturesContent />
            <FeaturesFooter />
        </div>
    );
}

export default Features;