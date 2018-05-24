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
  var equalityExplorer = require( 'EQUALITY_EXPLORER/equalityExplorer' );
  var inherit = require( 'PHET_CORE/inherit' );
  var VariablesSceneNode = require( 'EQUALITY_EXPLORER/variables/view/VariablesSceneNode' );

  /**
   * @param {TwoVariablesScene} scene
   * @param {Property.<Scene>} sceneProperty - the selected scene
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   * @constructor
   */
  function TwoVariablesSceneNode( scene, sceneProperty, layoutBounds, options ) {

    options = _.extend( {
      termsToolboxContentSize: new Dimension2( 270, 50 ),
      termsToolboxSpacing: 12, // horizontal spacing between terms in the toolbox
      snapshotControlOrientation: 'vertical', // put variable values below equations in Snapshots
      snapshotControlHeight: 70 // height of each snapshot, a bit taller than default since values are below equations
    }, options );

    VariablesSceneNode.call( this, scene, sceneProperty, layoutBounds, options );
  }

  equalityExplorer.register( 'TwoVariablesSceneNode', TwoVariablesSceneNode );

  return inherit( VariablesSceneNode, TwoVariablesSceneNode );
} );