// Copyright 2018, University of Colorado Boulder

/**
 * View of a scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Dimension2 = require( 'DOT/Dimension2' );
  var equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  var inherit = require( 'PHET_CORE/inherit' );
  var VariablesSceneNode = require( 'EQUALITY_EXPLORER/variables/view/VariablesSceneNode' );

  /**
   * @param {TwoVariablesScene} scene
   * @param {Property.<Scene>} sceneProperty - the selected scene
   * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   * @constructor
   */
  function TwoVariablesSceneNode( scene, sceneProperty, snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {

    options = _.extend( {

      // VariablesSceneNode options
      termsToolboxContentSize: new Dimension2( 270, 50 ),
      termsToolboxSpacing: 12, // horizontal spacing between terms in the toolbox
      snapshotControlOptions: {
        orientation: 'vertical', // put variable values below equations in Snapshots
        controlHeight: 70 // height of each snapshot, a bit taller than default since values are below equations
      }
    }, options );

    VariablesSceneNode.call( this, scene, sceneProperty, snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
  }

  equalityExplorerTwoVariables.register( 'TwoVariablesSceneNode', TwoVariablesSceneNode );

  return inherit( VariablesSceneNode, TwoVariablesSceneNode );
} );