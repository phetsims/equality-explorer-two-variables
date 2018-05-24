// Copyright 2018, University of Colorado Boulder

/**
 * View for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var equalityExplorer = require( 'EQUALITY_EXPLORER/equalityExplorer' );
  var EqualityExplorerScreenView = require( 'EQUALITY_EXPLORER/common/view/EqualityExplorerScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var TwoVariablesSceneNode = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/view/TwoVariablesSceneNode' );

  /**
   * @param {TwoVariablesModel} model
   * @constructor
   */
  function TwoVariablesScreenView( model ) {
    EqualityExplorerScreenView.call( this, model, {
      createSceneNode: function( scene, sceneProperty, layoutBounds, options ) {
        return new TwoVariablesSceneNode( scene, sceneProperty, layoutBounds, options );
      }
    } );
  }

  equalityExplorer.register( 'TwoVariablesScreenView', TwoVariablesScreenView );

  return inherit( EqualityExplorerScreenView, TwoVariablesScreenView );
} );