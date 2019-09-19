// Copyright 2018, University of Colorado Boulder

/**
 * The sole scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const ConstantTermCreator = require( 'EQUALITY_EXPLORER/common/model/ConstantTermCreator' );
  const EqualityExplorerColors = require( 'EQUALITY_EXPLORER/common/EqualityExplorerColors' );
  const EqualityExplorerScene = require( 'EQUALITY_EXPLORER/common/model/EqualityExplorerScene' );
  const equalityExplorerTwoVariables = require( 'EQUALITY_EXPLORER_TWO_VARIABLES/equalityExplorerTwoVariables' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Variable = require( 'EQUALITY_EXPLORER/common/model/Variable' );
  const VariableTermCreator = require( 'EQUALITY_EXPLORER/common/model/VariableTermCreator' );

  // string
  const xString = require( 'string!EQUALITY_EXPLORER/x' );
  const yString = require( 'string!EQUALITY_EXPLORER_TWO_VARIABLES/y' );

  /**
   * @constructor
   */
  function TwoVariablesScene() {

    const xVariable = new Variable( xString );
    const yVariable = new Variable( yString );

    EqualityExplorerScene.call( this,
      createTermCreators( xVariable, yVariable ),
      createTermCreators( xVariable, yVariable ), {
        debugName: 'twoVariables',
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
