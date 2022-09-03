// Copyright 2018-2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerConstants from '../../equality-explorer/js/common/EqualityExplorerConstants.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import equalityExplorerTwoVariablesStrings from './equalityExplorerTwoVariablesStrings.js';
import TwoVariablesScreen from './twovariables/TwoVariablesScreen.js';

simLauncher.launch( () => {
  const sim = new Sim(
    equalityExplorerTwoVariablesStrings[ 'equality-explorer-two-variables' ].titleStringProperty,
    [ new TwoVariablesScreen() ], {
      credits: EqualityExplorerConstants.CREDITS
    } );
  sim.start();
} );