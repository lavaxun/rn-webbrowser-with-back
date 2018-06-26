'use strict';

import React from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Image,
} from 'react-native';

import BaseComponent from './BaseComponent'
import Button from './Button'
import styles from './styles'

class Toolbar extends BaseComponent {

    constructor(props) {
        super(props);

        this.inputText = '';
        this.state = Toolbar.updateState(this.props);
    }

    static updateState(props) {
        return {
            backButtonEnabled: props.backButtonEnabled,
            forwardButtonEnabled: props.forwardButtonEnabled,
            homeButtonEnabled: props.homeButtonEnabled,
            onBack: props.onBack,
            onHome: props.onHome,
            onForward: props.onForward
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(Toolbar.updateState(nextProps));
    }

    renderHomeButton() {

        if (this.props.hideRefreshButton) {
            return <View/>
        }

        return (
            <Button
                disabled={!this.state.homeButtonEnabled}
                onPress={this.state.onHome}>
                <Image
                    style={this.buttonStyle()}
                    source={require('./assets/images/refresh-empty.png')}
                />
            </Button>
        );
    }

    buttonStyle() {
        return [styles.toolBarIcons, this.props.foregroundColor && {tintColor:this.props.foregroundColor}];
    }

    render() {
        return (
            <View style={styles.toolBar}>

                <Button
                    disabled={!this.state.backButtonEnabled}
                    onPress={this.state.onBack}>
                    <Image
                        style={this.buttonStyle()}
                        source={require('./assets/images/arrow-left.png')}
                    />
                </Button>

                {this.renderHomeButton()}

                <Button
                    disabled={!this.state.forwardButtonEnabled}
                    onPress={this.state.onForward}>
                    <Image
                        style={this.buttonStyle()}
                        source={require('./assets/images/arrow-right.png')}
                    />
                </Button>
            </View>
        );
    }
}

Toolbar.propTypes = {
    backButtonEnabled: PropTypes.bool,
    forwardButtonEnabled: PropTypes.bool,
    homeButtonEnabled: PropTypes.bool,
    hideRefreshButton: PropTypes.bool,
    onBack: PropTypes.func,
    onHome: PropTypes.func,
    onForward: PropTypes.func,
    foregroundColor: PropTypes.string
};

Toolbar.defaultProps = {
    backButtonEnabled: false,
    forwardButtonEnabled: false,
    homeButtonEnabled: true,
    hideRefreshButton: false,
    onBack: ()=> {},
    onHome: ()=> {},
    onForward: ()=> {}
};

module.exports = Toolbar;
