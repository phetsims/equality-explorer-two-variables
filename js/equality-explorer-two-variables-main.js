// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const EqualityExplorerConstants = require( 'EQUALITY_EXPLORER/common/EqualityExplorerConstants' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const TwoVariablesScreen = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/TwoVariablesScreen' );

  // strings
  const equalityExplorerTwoVariablesTitleString = require( 'string!EQUALITY_EXPLORER_TWO_VARIABLES/equality-explorer-two-variables.title' );

  SimLauncher.launch( function() {
    const sim = new Sim( equalityExplorerTwoVariablesTitleString, [ new TwoVariablesScreen() ], {
      credits: EqualityExplorerConstants.CREDITS
    } );
    sim.start();
  } );
} );