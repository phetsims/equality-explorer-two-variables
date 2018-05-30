// Copyright 2018, University of Colorado Boulder

/**
 * The sole scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ConstantTermCreator = require( 'EQUALITY_EXPLORER/common/model/ConstantTermCreator' );
  var EqualityExplorerColors = require( 'EQUALITY_EXPLORER/common/EqualityExplorerColors' );
  var EqualityExplorerScene = require( 'EQUALITY_EXPLORER/common/model/EqualityExplorerScene' );
  var equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Variable = require( 'EQUALITY_EXPLORER/common/model/Variable' );
  var VariableTermCreator = require( 'EQUALITY_EXPLORER/common/model/VariableTermCreator' );

  // string
  var xString = require( 'string!EQUALITY_EXPLORER/x' );
  var yString = require( 'string!EQUALITY_EXPLORER_TWO_VARIABLES/y' );

  /**
   * @constructor
   */
  function TwoVariablesScene() {

    var xVariable = new Variable( xString );
    var yVariable = new Variable( yString );

    EqualityExplorerScene.call( this,
      createTermCreators( xVariable, yVariable ),
      createTermCreators( xVariable, yVariable ), {
        debugName: 'xy',
        variables: [ xVariable, yVariable ],
        numberOfSnapshots: 4
      } );
  }

  equalityExplorerTwoVariables.register( 'TwoVariablesScene', TwoVariablesScene );

  /**
   * Creates the term creators for this scene.
   * @param {Variable} xVariable
   * @param {Variable} yVariable
   * @returns {TermCreator[]}
   */
  function createTermCreators( xVariable, yVariable ) {

    return [

      // x & -x
      new VariableTermCreator( xVariable ),

      // y & -y
      new VariableTermCreator( yVariable, {
        positiveFill: EqualityExplorerColors.POSITIVE_Y_FILL,
        negativeFill: EqualityExplorerColors.NEGATIVE_Y_FILL
      } ),

      new ConstantTermCreator()
    ];
  }

  return inherit( EqualityExplorerScene, TwoVariablesScene );
} );
