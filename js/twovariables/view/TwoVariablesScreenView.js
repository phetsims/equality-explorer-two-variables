// Copyright 2018-2019, University of Colorado Boulder

/**
 * View for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const EqualityExplorerScreenView = require( 'EQUALITY_EXPLORER/common/view/EqualityExplorerScreenView' );
  const equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  const inherit = require( 'PHET_CORE/inherit' );
  const TwoVariablesSceneNode = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/twovariables/view/TwoVariablesSceneNode' );

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
     * @param {BooleanProperty} equationAccordionBoxExpandedProperty
     * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
     * @param {Bounds2} layoutBounds
     * @param {Object} [options]
     * @returns {Node}
     * @protected
     * @override
     */
    createSceneNode: function( scene, sceneProperty, equationAccordionBoxExpandedProperty,
                               snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {
      return new TwoVariablesSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
        snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
    }
  } );
} );