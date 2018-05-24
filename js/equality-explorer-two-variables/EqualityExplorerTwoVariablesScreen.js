// Copyright 2018, University of Colorado Boulder

/**
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  var EqualityExplorerTwoVariablesModel = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equality-explorer-two-variables/model/EqualityExplorerTwoVariablesModel' );
  var EqualityExplorerTwoVariablesScreenView = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equality-explorer-two-variables/view/EqualityExplorerTwoVariablesScreenView' );

  /**
   * @constructor
   */
  function EqualityExplorerTwoVariablesScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new EqualityExplorerTwoVariablesModel(); },
      function( model ) { return new EqualityExplorerTwoVariablesScreenView( model ); },
      options
    );
  }

  equalityExplorerTwoVariables.register( 'EqualityExplorerTwoVariablesScreen', EqualityExplorerTwoVariablesScreen );

  return inherit( Screen, EqualityExplorerTwoVariablesScreen );
} );