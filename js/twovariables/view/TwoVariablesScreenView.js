// Copyright 2018, University of Colorado Boulder

/**
 * View for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EqualityExplorerScreenView = require( 'EQUALITY_EXPLORER/common/view/EqualityExplorerScreenView' );
  var equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  var inherit = require( 'PHET_CORE/inherit' );
  var TwoVariablesSceneNode = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/view/TwoVariablesSceneNode' );

  /**
   * @param {TwoVariablesModel} model
   * @constructor
   */
  function TwoVariablesScreenView( model ) {
    EqualityExplorerScreenView.call( this, model );
  }

  equalityExplorerTwoVariables.register( 'TwoVariablesScreenView', TwoVariablesScreenView );

  return inherit( EqualityExplorerScreenView, TwoVariablesScreenView, {

    /**
     * Creates the Node for this scene.
     * @param {EqualityExplorerScene} scene
     * @param {Property.<EqualityExplorerScene>} sceneProperty - the selected scene
     * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
     * @param {Bounds2} layoutBounds
     * @param {Object} [options]
     * @returns {Node}
     * @protected
     * @override
     */
    createSceneNode: function( scene, sceneProperty, snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {
      return new TwoVariablesSceneNode( scene, sceneProperty, snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
    }
  } );
} );