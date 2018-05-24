// Copyright 2018, University of Colorado Boulder

/**
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );

  /**
   * @constructor
   */
  function EqualityExplorerTwoVariablesModel() {
    //TODO
  }

  equalityExplorerTwoVariables.register( 'EqualityExplorerTwoVariablesModel', EqualityExplorerTwoVariablesModel );

  return inherit( Object, EqualityExplorerTwoVariablesModel, {

    // @public resets the model
    reset: function() {
      //TODO reset things here
    },

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle model animation here.
    }
  } );
} );