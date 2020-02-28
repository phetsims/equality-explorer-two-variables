// Copyright 2018-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerConstants from '../../equality-explorer/js/common/EqualityExplorerConstants.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import equalityExplorerTwoVariablesStrings from './equality-explorer-two-variables-strings.js';
import TwoVariablesScreen from './twovariables/TwoVariablesScreen.js';

const equalityExplorerTwoVariablesTitleString = equalityExplorerTwoVariablesStrings[ 'equality-explorer-two-variables' ].title;

SimLauncher.launch( () => {
  const sim = new Sim( equalityExplorerTwoVariablesTitleString, [ new TwoVariablesScreen() ], {
    credits: EqualityExplorerConstants.CREDITS
  } );
  sim.start();
} );