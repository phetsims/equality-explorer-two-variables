// Copyright 2018-2020, University of Colorado Boulder

/**
 * View for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerScreenView from '../../../../equality-explorer/js/common/view/EqualityExplorerScreenView.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import TwoVariablesSceneNode from './TwoVariablesSceneNode.js';

class TwoVariablesScreenView extends EqualityExplorerScreenView {

  /**
   * @param {TwoVariablesModel} model
   */
  constructor( model ) {
    super( model );
  }

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
  createSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
                   snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {
    return new TwoVariablesSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
  }
}

equalityExplorerTwoVariables.register( 'TwoVariablesScreenView', TwoVariablesScreenView );

export default TwoVariablesScreenView;