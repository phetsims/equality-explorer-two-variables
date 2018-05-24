// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EqualityExplorerConstants = require( 'EQUALITY_EXPLORER/common/EqualityExplorerConstants' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var TwoVariablesScreen = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/TwoVariablesScreen' );

  // strings
  var equalityExplorerTwoVariablesTitleString = require( 'string!EQUALITY_EXPLORER_TWO_VARIABLES/equality-explorer-two-variables.title' );

  SimLauncher.launch( function() {
    var sim = new Sim( equalityExplorerTwoVariablesTitleString, [ new TwoVariablesScreen() ], {
      credits: EqualityExplorerConstants.CREDITS
    } );
    sim.start();
  } );
} );