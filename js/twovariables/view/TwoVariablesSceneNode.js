// Copyright 2018, University of Colorado Boulder

/**
 * View of a scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Dimension2 = require( 'DOT/Dimension2' );
  const equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  const inherit = require( 'PHET_CORE/inherit' );
  const VariablesSceneNode = require( 'EQUALITY_EXPLORER/variables/view/VariablesSceneNode' );

  /**
   * @param {TwoVariablesScene} scene
   * @param {Property.<Scene>} sceneProperty - the selected scene
   * @param {BooleanProperty} equationAccordionBoxExpandedProperty
   * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   * @constructor
   */
  function TwoVariablesSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
                                  snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {

    options = _.extend( {

      // VariablesSceneNode options
      termsToolboxContentSize: new Dimension2( 270, 50 ),
      termsToolboxSpacing: 12, // horizontal spacing between terms in the toolbox
      snapshotControlOptions: {
        orientation: 'vertical', // put variable values below equations in Snapshots
        controlHeight: 70 // height of each snapshot, a bit taller than default since values are below equations
      }
    }, options );

    VariablesSceneNode.call( this, scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
  }

  equalityExplorerTwoVariables.register( 'TwoVariablesSceneNode', TwoVariablesSceneNode );

  return inherit( VariablesSceneNode, TwoVariablesSceneNode );
} );