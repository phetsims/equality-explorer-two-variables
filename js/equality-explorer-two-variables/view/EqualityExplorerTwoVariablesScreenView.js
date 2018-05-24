// Copyright 2018, University of Colorado Boulder

/**
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );

  /**
   * @param {EqualityExplorerTwoVariablesModel} equalityExplorerTwoVariablesModel
   * @constructor
   */
  function EqualityExplorerTwoVariablesScreenView( equalityExplorerTwoVariablesModel ) {

    ScreenView.call( this );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        equalityExplorerTwoVariablesModel.reset();
      },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  equalityExplorerTwoVariables.register( 'EqualityExplorerTwoVariablesScreenView', EqualityExplorerTwoVariablesScreenView );

  return inherit( ScreenView, EqualityExplorerTwoVariablesScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );