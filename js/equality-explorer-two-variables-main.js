// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var EqualityExplorerTwoVariablesScreen = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equality-explorer-two-variables/EqualityExplorerTwoVariablesScreen' );

  // strings
  var equalityExplorerTwoVariablesTitleString = require( 'string!EQUALITY_EXPLORER_TWO_VARIABLES/equality-explorer-two-variables.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( equalityExplorerTwoVariablesTitleString, [ new EqualityExplorerTwoVariablesScreen() ], simOptions );
    sim.start();
  } );
} );