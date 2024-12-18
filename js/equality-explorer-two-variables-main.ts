// Copyright 2018-2024, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerConstants from '../../equality-explorer/js/common/EqualityExplorerConstants.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import EqualityExplorerTwoVariablesStrings from './EqualityExplorerTwoVariablesStrings.js';
import TwoVariablesScreen from './twovariables/TwoVariablesScreen.js';

simLauncher.launch( () => {

  const titleStringProperty = EqualityExplorerTwoVariablesStrings[ 'equality-explorer-two-variables' ].titleStringProperty;

  const screens = [
    new TwoVariablesScreen( { tandem: Tandem.ROOT.createTandem( 'twoVariablesScreen' ) } )
  ];

  const sim = new Sim( titleStringProperty, screens, {
    credits: EqualityExplorerConstants.CREDITS
  } );

  sim.start();
} );