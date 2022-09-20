// Copyright 2018-2022, University of Colorado Boulder

/**
 * View of a scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import VariablesSceneNode from '../../../../equality-explorer/js/variables/view/VariablesSceneNode.js';
import merge from '../../../../phet-core/js/merge.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';

export default class TwoVariablesSceneNode extends VariablesSceneNode {

  /**
   * @param {TwoVariablesScene} scene
   * @param {Property.<Scene>} sceneProperty - the selected scene
   * @param {BooleanProperty} equationAccordionBoxExpandedProperty
   * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   */
  constructor( scene, sceneProperty, equationAccordionBoxExpandedProperty,
               snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {

    options = merge( {

      // VariablesSceneNode options
      termsToolboxContentSize: new Dimension2( 270, 50 ),
      termsToolboxSpacing: 12, // horizontal spacing between terms in the toolbox
      snapshotControlOptions: {
        orientation: 'vertical', // put variable values below equations in Snapshots
        controlHeight: 70 // height of each snapshot, a bit taller than default since values are below equations
      }
    }, options );

    super( scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
  }
}

equalityExplorerTwoVariables.register( 'TwoVariablesSceneNode', TwoVariablesSceneNode );