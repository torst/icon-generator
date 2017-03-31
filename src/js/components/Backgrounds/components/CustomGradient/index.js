import React, { Component } from 'react';
import AppStore from '../../../../stores/AppStore';
import GradientColor from './components/GradientColor';

export default class CustomGradient extends Component {
    constructor() {
        super();

        this.state = {
            topColor: AppStore.getColorGradientTop(),
            bottomColor: 'green',
        };
    }

    render () {
        const backgroundGradient = {
            background: this.state.topColor,
            background: 'linear-gradient('+this.state.topColor+', '+this.state.bottomColor+')'
        };
        return (
			<div className="gradient">
				<h3>Custom gradient</h3>
				<div className="box" onClick={this.change}>
					<div className="result" style={backgroundGradient}></div>
					<div className="inputs">
                        <GradientColor/>
						<GradientColor class="MT-44"/>
					</div>
				</div>
			</div>
        );
    }
}