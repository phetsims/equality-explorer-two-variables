// Copyright 2018-2022, University of Colorado Boulder

// @ts-nocheck
/**
 * View for the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerScreenView from '../../../../equality-explorer/js/common/view/EqualityExplorerScreenView.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import TwoVariablesSceneNode from './TwoVariablesSceneNode.js';

export default class TwoVariablesScreenView extends EqualityExplorerScreenView {

  /**
   * @param {TwoVariablesModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    super( model, tandem );
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